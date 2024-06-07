import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { selectLoginStatus } from "../../../app-redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { getAllTaskAction, updateTaskStatusAction } from "../../../app-redux/task/taskActions";
import { selectgetAllTaskstatus } from "../../../app-redux/task/taskSlice";
import Breadcrumbs from "../../../common/components/bread_crumbs";
import DraggableCard from "../../../common/components/draggable_card";
import FilterArea from "../../../common/components/filter_area";
import CModel from "../../../common/components/model/index";
import TopContainer from "../../../common/components/overview";
import { getTaskColumsForDND } from "../../../common/utils/app.util";
import EditTaskPopup from "../component/model";
import TaskFilterForm from "./Components/task-filter-form";

function Task() {

  const dispatch = useAppDispatch();
  const getAllTaskStatus = useAppSelector(selectgetAllTaskstatus);
  const [taskColumns, setTaskColumns] = useState({ ...getTaskColumsForDND() });
  const getloginStatus = useAppSelector(selectLoginStatus)
  const [id, setid] = useState(null);
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      pageNo: 1,
      pageSize: 500,
    },
  });

  const UpdateActioncall = (taskId, index, status) => {
    const currentUserId = getloginStatus.id
    let values = { currentUserId, taskId, index, status }
    dispatch(updateTaskStatusAction(values))
    console.log("values", values);
  }

  const handleShow = (id) => {
    setShow(true);
    setid(id)

  };
  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (vals) => {
    console.log("vals", vals);
    let values = formik.values
    formik.setValues({ ...values, ...vals })

    // let { leadResponsible, seniorResponsible, assistantResponsible } = formik.values

    formik.setFieldValue("leadResponsible", vals.Responsible)
    formik.setFieldValue("seniorResponsible", vals.Responsible)
    formik.setFieldValue("assistantResponsible", vals.Responsible)
  }

  useEffect(() => {
    dispatch(getAllTaskAction(formik.values))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values])

  useEffect(() => {
    let cols = taskColumns;
    if (getAllTaskStatus && getAllTaskStatus.data) {
      if (taskColumns && taskColumns) {
        // eslint-disable-next-line array-callback-return
        Object.entries(taskColumns) && Object.entries(taskColumns).map(([columnId, column], index) => {
          let array = getAllTaskStatus.data.filter(o => o.status === column.name);

          cols = { ...cols, [columnId]: { ...column, items: array.sort((a, b) => a.index - b.index) } }

        });
      }
      setTaskColumns({ ...cols });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAllTaskStatus])

  const onDragEnd = (result, columns, setColumns) => {

    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });

      console.log("destColumn", destColumn);
      let droppedItem = null;
      const found = destItems.findIndex(o => (o.taskId.toString() === result.draggableId));
      if (found > -1) {
        console.log("found", found);
        droppedItem = destItems[found]
        console.log("droppedItem", droppedItem);
        console.log("removed", removed.status);
        UpdateActioncall(droppedItem.taskId, result.destination.index, destColumn.name);
      }
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const destColumn = columns[destination.droppableId];
      const [removed] = copiedItems.splice(source.index, 1);
      const destItems = [...destColumn.items];
      destItems.splice(destination.index, 0, removed);
      console.log("else removed", removed.status);

      console.log("else result", result);

      console.log("else columns", columns);
      let droppedItem = null;
      const found = destItems.findIndex(o => (o.taskId.toString() === result.draggableId));
      droppedItem = destItems[found]

      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });

      UpdateActioncall(droppedItem.taskId, result.destination.index, destColumn.name);
    }
  };

  return (
    <>
      <TopContainer
        component={<Breadcrumbs />}
        title="Tasks"
        btntxt=" Add Task"
        to="/task/create-task"
      />

      <div className="page-body">
        <FilterArea form={<TaskFilterForm handleSubmit={handleSubmit} />} title="Task Search" />
        <div className="container-xl">
          {/* <ul className="nav nav-bordered  mb-4">
            <li className="nav-item ">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                View all
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Marketing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Development
              </a>
            </li>
          </ul> */}
          <div className="row">
            {taskColumns && taskColumns &&
              <DragDropContext
                onDragEnd={(result) => onDragEnd(result, taskColumns, setTaskColumns)}
              >

                {Object.entries(taskColumns) && Object.entries(taskColumns).map(([columnId, column], index) => {
                  return (
                    <div className="col-12 col-md-6 col-lg" key={columnId}>
                      <h2>{column.name}</h2>
                      <div>
                        <Droppable droppableId={columnId} key={columnId}>
                          {(provided, snapshot) => {
                            return (
                              <div
                                className="w-100 min-vh-100"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                                {column.items.map((item, index) => {
                                  return (
                                    <Draggable
                                      key={item.id}
                                      draggableId={item.taskId.toString()}
                                      index={index}
                                    >
                                      {(provided, snapshot) => {
                                        return (
                                          <div
                                            className="col-12 "
                                            onClick={() => handleShow(item.taskId)}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                          >
                                            <DraggableCard data={item} />
                                          </div>
                                        );
                                      }}
                                    </Draggable>
                                  );
                                })}
                                {provided.placeholder}
                              </div>
                            );
                          }}
                        </Droppable>
                      </div>
                    </div>
                  );
                })}
              </DragDropContext>
            }
          </div>
        </div>
      </div>


      {show && (
        <CModel
          show={show}
          handleClose={handleClose}
          component={<EditTaskPopup id={id} />}
          // title="Ticket No #1234"
          modalSize="modal-xl"
          button_ok_text="Save"
          // button_close_text="Close"
          // to="/task/edit/"
          showSubmitButton={false}
        />
      )}
    </>
  );
}

export default Task;
