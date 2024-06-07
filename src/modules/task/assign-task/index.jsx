import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clientServicesAction } from "../../../app-redux/client/clientActions";
import { selectclientServicesStatus } from "../../../app-redux/client/clientSlice";
import { getAllClientsAction, getAllUsersAction } from "../../../app-redux/common/commonActions";
import { selectgetAllClientStatus, selectgetAllUserStatus } from "../../../app-redux/common/commonSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { getServicesAction } from "../../../app-redux/management/managementActions";
import { selectgetServiceStatus } from "../../../app-redux/management/managementSlice";
import { createTaskAction, getTaskAction } from "../../../app-redux/task/taskActions";
import { selectcreateTaskstatus, selectgetTaskstatus, selecttaskError, selectTaskStatus } from "../../../app-redux/task/taskSlice";
import Breadcrumbs from "../../../common/components/bread_crumbs";
import Button from "../../../common/components/button";
import CInput from "../../../common/components/c_input";
import CSelect from "../../../common/components/c_select";
import CLoader from "../../../common/components/loader";
import TopContainer from "../../../common/components/overview";
import { taskFormValidation } from "../validation";

function AssignTask({ taskId }) {
  const [messages, setMessages] = useState("");
  const [message, setMessage] = useState(null);
  const [isFormik, setIsFormik] = useState(false);
  const [loader, showLoader] = useState(false)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [Value, setValue] = useState();

  const createTaskStatus = useAppSelector(selectcreateTaskstatus)
  const getTaskStatus = useAppSelector(selectgetTaskstatus)
  const getAllClientStatus = useAppSelector(selectgetAllClientStatus)
  const getServicesStatus = useAppSelector(selectgetServiceStatus)
  const error = useAppSelector(selecttaskError)
  const getAllUserStatus = useAppSelector(selectgetAllUserStatus)
  const getClientServicesStatus = useAppSelector(selectclientServicesStatus)
  const taskStatus = useAppSelector(selectTaskStatus)

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      pageNo: 1,
      pageSize: 500,
      userId: 0,
      title: "",
      taskId: "",
      description: "",
      clientId: "",
      department: "",
      leadResponsible: 0,
      seniorResponsible: 0,
      assistantResponsible: 0,
      isBillable: "true",
      recieved: "",
      serviceId: "",
    },
    validationSchema: taskFormValidation,
    onSubmit: (values) => {
      const model = {
        title: values.title,
        description: values.description,
        clientId: values.clientId,
        department: values.department,
        leadResponsible: parseInt(values.leadResponsible),
        seniorResponsible: parseInt(values.seniorResponsible),
        assistantResponsible: parseInt(values.assistantResponsible),
        isBillable: values.isBillable,
        recieved: values.recieved,
        serviceId: values.serviceId,
      };
      console.log("model", model);
      dispatch(createTaskAction(model));
    },
  });

  useEffect(() => {
    console.log("id", taskId)
    if (taskId && taskId) {
      dispatch(getTaskAction(taskId));
    }
  }, [taskId])

  useEffect(() => {
    // if (!(getAllUserStatus && getAllUserStatus.data)) {
    dispatch(getServicesAction());
    // }
  }, []);

  useEffect(() => {
    const { pageNo, pageSize } = formik.values;
    dispatch(getAllUsersAction({ pageNo, pageSize }));
    dispatch(getAllClientsAction({ pageNo, pageSize }));

  }, []);


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


  useEffect(() => {
    console.log("getAllUsers", getAllUserStatus);
  }, [getAllUserStatus]);


  // useEffect(() => {
  //   console.log("getsuccess", getTaskStatus);
  //   // if (getTaskStatus && getTaskStatus.data) {
  //   //   console.log("getTaskStatus", getTaskStatus);
  //   //   formik.setValues({ ...getTaskStatus.data, id: taskId })
  //   // } else {
  //   //   formik.setValues({ id: taskId })
  //   // }
  // }, [getTaskStatus]);


  useEffect(() => {
    console.log("success", createTaskStatus);
    if (createTaskStatus && createTaskStatus.data) {
      navigate("/task/edit/" + createTaskStatus.data);
    }
  }, [createTaskStatus]);

  useEffect(() => {
    console.log("error", error)
  }, [error]);

  useEffect(() => {
    if (error && error.error) {
      let err = error.error;
      if (err && (typeof err) == "string") {
        setMessages(null);
        setMessage({ error_msg: err, status: "danger" });
        setIsFormik(false)
      }
    } else {
      setMessages(null);
    }
  }, [error]);

  useEffect(() => {
    setIsFormik(true)
  }, [formik.errors]);

  useEffect(() => {
    if (formik.values.clientId) {
      let clientId = formik.values.clientId
      dispatch(clientServicesAction(clientId))
      console.log("ClientServices", getClientServicesStatus);
    }

  }, [formik.values.clientId])

  useEffect(() => {
    setValue(formik.values.clientId)
  }, [formik.values.clientId])

  useEffect(() => {
    if (taskStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [taskStatus]);


  return (
    <form onSubmit={formik.handleSubmit}>
      <TopContainer
        title="Create Task"
        component={<Breadcrumbs />}
      // btntxt="Create New Task"
      />

      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className=" card-body border-bottom py-3">
              <div className=" col-lg-12 row">
                <form formid="task_form">
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
                            <label className="form-label">Services: </label>
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
                              defualt_option="Select Service"
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
                                    id="isBillable"
                                    name="isBillable"
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
                                    id="isBillable"
                                    name="isBillable"
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
                        defualt_option={"Select lead"}
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
                      <label className="form-label">Recieved:</label>
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
                </form>
              </div>
            </div>
          </div>

          <div className="d-xl-flex justify-content-end mt-3">
            <Button name="Create Task" type="submit" color="btn-info" />
          </div>
        </div>
      </div>
      <CLoader show={loader} />
    </form>
  );
}

export default AssignTask;
