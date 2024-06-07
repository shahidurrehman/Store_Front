import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../common/components/bread_crumbs";
import TopContainer from "../../../common/components/overview";
import CSelect from "../../../common/components/c_select";
import CInput from "../../../common/components/c_input";

function AssignTask() {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      country: "",
      phone_number: "",
      password: "",
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        country: values.country,
        phone_number: values.phone_number,
        password: values.password,
      };
      // dispatch(loginAction(model));
    },
  });
  return (
    <>
      <TopContainer
        title="Ticket #123"
        component={<Breadcrumbs />}
        btntxt=" Create New Task"
      />

      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className=" card-body border-bottom py-3">
              <div className=" col-lg-12 row">
                <form formid="task_form">
                  <div className="row col-xl-12">
                    <div className=" mb-3 col-xl-6">
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
                    </div>

                    <div className=" mb-3 col-xl-12">
                      <label className="form-label">Title:</label>
                      <CInput
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
                    <div className=" mb-3 col-xl-12">
                      <label className="form-label">Description:</label>
                      <CInput
                        ab="textarea"
                        name="description"
                        value={formik.values.description}
                        placeholder="Description"
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

                    <div className=" mb-3 col-xl-6">
                      <label className="form-label">Services</label>
                      <CSelect
                        name="service"
                        value={formik.values.service}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          isFormik
                            ? { type: "formik", error: formik && formik }
                            : { type: "server", error: messages }
                        }
                        type="select"
                        defualt_option={"Please Select service"}
                      />
                    </div>

                    <div className=" mb-3 col-xl-6">
                      <label className="form-label">Order</label>
                      <CSelect
                        name="order"
                        value={formik.values.order}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          isFormik
                            ? { type: "formik", error: formik && formik }
                            : { type: "server", error: messages }
                        }
                        type="select"
                        defualt_option={"Please Select order"}
                      />
                    </div>

                    <div className=" mb-3 col-xl-6">
                      <label className="form-label">Appeal</label>
                      <CSelect
                        name="appeal"
                        value={formik.values.appeal}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          isFormik
                            ? { type: "formik", error: formik && formik }
                            : { type: "server", error: messages }
                        }
                        type="select"
                        defualt_option={"Please Select appeal"}
                      />
                    </div>
                    <div className=" mb-3 col-xl-6">
                      <label className="form-label">Notice</label>
                      <CSelect
                        name="notice"
                        value={formik.values.notice}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          isFormik
                            ? { type: "formik", error: formik && formik }
                            : { type: "server", error: messages }
                        }
                        type="select"
                        defualt_option={"Please Select notice"}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>


          </div>

          <div className="d-xl-flex justify-content-end mt-3">
            <button
              type="button"
              className="btn-close"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignTask;
