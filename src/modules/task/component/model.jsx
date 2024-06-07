import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../../common/components/bread_crumbs";
import TopContainer from "../../../common/components/overview";
import CSelect from "../../../common/components/c_select";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { createTaskAction, getTaskAction } from "../../../app-redux/task/taskActions";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { selectcreateTaskstatus, selectgetTaskstatus, selecttaskError, selectTaskStatus } from "../../../app-redux/task/taskSlice";
import { getAllClientsAction, getAllUsersAction } from "../../../app-redux/common/commonActions";
import { selectgetAllClientStatus, selectgetAllUserStatus } from "../../../app-redux/common/commonSlice";
import task_statuses from "../../../assets/options/task_statuses.json"
import TaskModel from "../component/model";
import { selectgetServiceStatus } from "../../../app-redux/management/managementSlice";
import { getServicesAction } from "../../../app-redux/management/managementActions";
import { getUrlQueryParam } from "../../../common/utils/app.util";
import CLoader from "../../../common/components/loader";
import { clientServicesAction } from "../../../app-redux/client/clientActions";
import { selectclientServicesStatus } from "../../../app-redux/client/clientSlice";


function EditTaskPopup({ id }) {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const dispatch = useAppDispatch();
  let { taskId } = useParams();
  console.log("taskid", taskId);
  console.log("id", id);

  const createTaskStatus = useAppSelector(selectcreateTaskstatus)
  const getTaskStatus = useAppSelector(selectgetTaskstatus)
  const getAllClientStatus = useAppSelector(selectgetAllClientStatus)
  const getServicesStatus = useAppSelector(selectgetServiceStatus)
  const [loader, showLoader] = useState(false)
  const error = useAppSelector(selecttaskError)
  const getAllUserStatus = useAppSelector(selectgetAllUserStatus)
  const taskStatus = useAppSelector(selectTaskStatus)
  const getClientServicesStatus = useAppSelector(selectclientServicesStatus)

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      pageNo: 1,
      pageSize: 500,
      userId: 0,
      title: "",
      taskId: "",
      clientId: "",
      description: "",
      department: "",
      leadResponsible: null,
      seniorResponsible: 0,
      assistantResponsible: 0,
      isBillable: "",
      recieved: "",
      serviceId: "",
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        clientId: values.clientId,
        department: values.department,
        taskId: values.taskId,
        title: values.title,
        leadResponsible: parseInt(values.leadResponsible)||0,
        seniorResponsible: parseInt(values.seniorResponsible)||0,
        assistantResponsible: parseInt(values.assistantResponsible)||0,
        description: values.description,
        isBillable: values.isBillable,
        recieved: values.recieved,
        serviceId: values.serviceId,
      };
      console.log("model", model);
      dispatch(createTaskAction(model));
    },
  });


  useEffect(() => {

    if (taskId === undefined) {
      taskId = id
      console.log("taskIdLatest", taskId);
    }
  }, [getTaskStatus])

  useEffect(() => {
    let some = taskId
    console.log("id", taskId)
    if (taskId && taskId) {
      dispatch(getTaskAction(taskId));
    }
    else {
      // taskId = t_id;
      // console.log("taskid",taskId);
    }
  }, [taskId])


  useEffect(() => {
    console.log("GetTasks", getTaskStatus);
  }, [getTaskStatus])


  useEffect(() => {
    if (taskId && getTaskStatus && getTaskStatus.data) {
      formik.setValues({ ...getTaskStatus.data, taskId: taskId })
    }
  }, [getTaskStatus]);


  useEffect(() => {
    console.log("getAllUsers", getAllUserStatus);
  }, [getAllUserStatus]);


  useEffect(() => {
    if (taskStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [taskStatus]);


  useEffect(() => {
    console.log("success", createTaskStatus);
  }, [createTaskStatus]);

  useEffect(() => {
    console.log("error", error)
  }, [error]);

  useEffect(() => {
    // if (!(getAllUserStatus && getAllUserStatus.data)) {
    const { pageNo, pageSize } = formik.values;
    dispatch(getAllUsersAction({ pageNo, pageSize }));
    dispatch(getServicesAction());
    dispatch(getAllClientsAction({ pageNo, pageSize }));
    // 
    // }
  }, []);


  useEffect(() => {
    if (formik.values.clientId) {
      let clientId = formik.values.clientId
      dispatch(clientServicesAction(clientId))
      console.log("ClientServices", getClientServicesStatus);
    }

  }, [formik.values.clientId])

  useEffect(() => {
    let stringValue = formik.values.isBillable;
    const Billable = str2bool(stringValue)
    formik.setFieldValue("isBillable", Billable)

  }, [formik.values.isBillable])


  var str2bool = (value) => {

    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  }



  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row col-xl-12">
        <div className="mb-3 col-xl-12">
          <label className="form-label">Title:</label>
          <CInput
            id="title"
            name="title"
            value={formik.values.title}
            placeholder="Add Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="text"
          />
        </div>
        <div className="row">
          <div className=" mb-3 col-xl-6">
            <label className="form-label">Description:</label>
            <CInput
              id="description"
              name="description"
              value={formik.values.description}
              placeholder="Description"
              rows="9"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="textarea"
            />
          </div>

          <div className=" mb-3 col-xl-6">
            <div className="row">
              <div className=" mb-3 col-xl-12">
                <label className="form-label">Client: </label>
                <CSelect
                  name="clientId"
                  value={formik.values.clientId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    isFormik
                      ? { type: "formik", error: formik && formik }
                      : { type: "server", error: messages }
                  }
                  type="select"
                  defualt_option={"Select Client"}
                  options={getAllClientStatus && getAllClientStatus.data}
                  option_lable="clientName"
                  option_value="clientId"

                />
              </div>

              <div className=" mb-3 col-xl-12">
                <label className="form-label">Services:</label>
                <CSelect
                  id="serviceId"
                  name="serviceId"
                  value={formik.values.serviceId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    isFormik
                      ? { type: "formik", error: formik && formik }
                      : { type: "server", error: messages }
                  }
                  type="select"
                  defualt_option={"Select service"}
                  options={getClientServicesStatus && getClientServicesStatus.data}
                  option_lable="serviceName"
                  option_value="serviceId"
                />
              </div>
              <div className="mb-3 col-xl-12">

                <h4>Billable:</h4>
                <div className="row">
                  <div className="col-xl-2">
                    <label className="form-check">
                      <CInput
                        name="billed"
                        value={"true"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-check-input"
                        error={
                          isFormik
                            ? { type: "formik", error: formik && formik }
                            : { type: "server", error: messages }
                        }
                        type="radio"
                      />
                      <span className="form-check-label">Yes</span>
                    </label>

                  </div>
                  <div className="col-xl-2">
                    <label className="form-check">
                      <CInput
                        name="billed"
                        value={"false"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-check-input"
                        error={
                          isFormik
                            ? { type: "formik", error: formik && formik }
                            : { type: "server", error: messages }
                        }
                        type="radio"
                      />
                      <span className="form-check-label">No</span>
                    </label>
                  </div>
                </div>

              </div>


            </div>

          </div>
          <div className="row">
            <div className=" mb-3 col-xl-4">
              <label className="form-label">Lead Responsible:</label>
              <CSelect
                id="leadResponsible"
                name="leadResponsible"
                value={formik.values.leadResponsible}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  isFormik
                    ? { type: "formik", error: formik && formik }
                    : { type: "server", error: messages }
                }
                type="select"
                defualt_option={"Select Lead"}
                options={getAllUserStatus && getAllUserStatus.data}
                option_lable="displayName"
                option_value="userId"
              />
            </div>


            <div className=" mb-3 col-xl-4">
              <label className="form-label">Senior Responsible:</label>
              <CSelect
                id="seniorResponsible"
                name="seniorResponsible"
                value={formik.values.seniorResponsible}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  isFormik
                    ? { type: "formik", error: formik && formik }
                    : { type: "server", error: messages }
                }
                type="select"
                defualt_option={"Select Senior"}
                options={getAllUserStatus && getAllUserStatus.data}
                option_lable="displayName"
                option_value="userId"
              />
            </div>


            <div className=" mb-3 col-xl-4">
              <label className="form-label">Assistant Responsible:</label>
              <CSelect
                id="assistantResponsible"
                name="assistantResponsible"
                value={formik.values.assistantResponsible}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  isFormik
                    ? { type: "formik", error: formik && formik }
                    : { type: "server", error: messages }
                }
                type="select"
                defualt_option={"Select Assistant"}
                options={getAllUserStatus && getAllUserStatus.data}
                option_lable="displayName"
                option_value="userId"
              />
            </div>
          </div>


        </div>


        {/* <div className=" mb-3 col-xl-4">
                        <label className="form-label">User</label>
                        <CSelect
                          name="user"
                          value={formik.values.user}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            isFormik
                              ? { type: "formik", error: formik && formik }
                              : { type: "server", error: messages }
                          }
                          type="select"
                          defualt_option={"Please Select user"}
                        />
                      </div> */}

      </div>

      <div className="row">
        <div className="mb-3 col-xl-6">
          <label className="form-label">Department:</label>
          <CInput
            id="department"
            name="department"
            value={formik.values.department}
            placeholder="Department"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="text"
          />
        </div>

        <div className="mb-3 col-xl-6">
          <label className="form-label">Recieved</label>
          <CInput
            id="recieved"
            name="recieved"
            value={formik.values.recieved}
            placeholder="Add recieved"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="text"
          />
        </div>
      </div>




      <div className="d-xl-flex justify-content-end mt-3">
        <Button name="Update" type="submit" color="btn-info" />
      </div>
    </form>
  );
}

export default EditTaskPopup;
