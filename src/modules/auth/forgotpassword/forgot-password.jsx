import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import { useNavigate } from "react-router-dom";
import { forgotPasswordAction } from "../../../app-redux/auth/authActions";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { forgotPasswordFormValidation } from "./validation";
import { resetForgotPasswordStatus, selectAuthError, selectForgotPasswordStatus, selectStatus } from "../../../app-redux/auth/authSlice";
import Alert from "../../../common/components/alerts";
import CLoader from "../../../common/components/loader";
import { toast, ToastContainer } from "react-toastify";


function ForgotPassword() {
  const [messages, setMessages] = useState({});
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [loader, showLoader] = useState(false)
  let error = useAppSelector(selectAuthError);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectStatus);
  const forgotPasswordStatus = useAppSelector(selectForgotPasswordStatus)

  const notify = () => toast.success("Email Sent")

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordFormValidation,
    onSubmit: (values) => {
      const model = {
        email: values.email,
      };
      console.log("model", model);
      dispatch(forgotPasswordAction(model));
    },
  });

  let navigate = useNavigate();

  function handleClick() {

    // Somewhere in your code, e.g. inside a handler:
    // navigate("/auth/change-password");
  }

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
    if (forgotPasswordStatus && forgotPasswordStatus.status === true) {
      notify();
      // dispatch(resetForgotPasswordStatus())
    }
  }, [forgotPasswordStatus])



  useEffect(() => {
    setIsFormik(true)
  }, [formik.errors]);

  useEffect(() => {
    if (authStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [authStatus]);



  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />

      <div className="d-flex flex-column">
        <div className="page page-center">
          <div className="container-tight py-4">
            <form
              className="card card-md"
              onSubmit={formik.handleSubmit}
              autoComplete="off"
            >
              <div className="card-body">
                <h2 className="card-title text-center mb-4">
                  Forgot Password
                </h2>
                <p className="text-muted mb-4"> Enter your email address and your password will be reset and emailed to you. </p>

                <div className="row mb-3">
                  <div className="col-md-12 col-xl-12">
                    {message &&
                      <Alert title={message.error_msg} type={message.status} />}
                    <label className="form-label">Email address</label>
                    <CInput
                      id="email"
                      name="email"
                      value={formik.values.email}
                      placeholder="Enter email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={isFormik ? { type: "formik", error: formik && formik } : { type: "server", error: messages }}
                      type="email"
                    />

                  </div>
                </div>

                <div className="form-footer">
                  <button onClick={handleClick} type="submit" className={`btn btn-primary w-100 ${disabled ? "" : ""}`}>
                    Send change password link
                  </button>
                </div>
              </div>

            </form>
            <div className="text-center text-muted mt-3">
              Forget it,
              <a href="/auth/siginin"> send me back </a>
              to the sign in screen
            </div>
          </div>
        </div>
      </div>
      <CLoader show={loader} />
    </>
  );
}
export default ForgotPassword;
