import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { signinFormValidation } from "./validation";
import { loginAction } from "../../../app-redux/auth/authActions";
import { resetErrorAction, selectAuthError, selectStatus } from "../../../app-redux/auth/authSlice";
import Alert from "../../../common/components/alerts";
import CLoader from "../../../common/components/loader";

function Signin() {

  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState({});
  const [isFormik, setIsFormik] = useState(true);
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [loader, showLoader] = useState(false)

  let error = useAppSelector(selectAuthError);
  const authStatus = useAppSelector(selectStatus);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        email: values.email,
        password: values.password,
      };
      dispatch(loginAction(model));
    },
  });

  useEffect(() => {
    if (authStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [authStatus]);

  useEffect(()=>{
    dispatch(resetErrorAction());
  },[])


  useEffect(() => {
    if (error && error.error) {
      let err = error.error;
      if (err && (typeof err) == "string") {
        setMessages(null);
        setMessage({ error_msg: err, status: "danger" });
        setIsFormik(false)
      }
    } else setMessages(null);
  }, [error]);

  useEffect(() => {
    setIsFormik(true)
  }, [formik.errors]);


  return (
    <>
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
                  Login to your account
                </h2>
                <div className="row mb-3">
                  {message &&
                    <Alert title={message.error_msg} type={message.status} />}
                  <div className="col-md-12 col-xl-12">
                    <label className="form-label">Email</label>
                    <CInput
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={isFormik ? { type: "formik", error: formik && formik } : { type: "server", error: messages }}
                      type="email"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12 col-xl-12">
                    <label className="form-label">Password
                      {/* <span className="form-label-description">
                      <a href="/auth/forgot-password" > Forgot Password</a>
                    </span> */}
                    </label>
                    <CInput
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={isFormik ? { type: "formik", error: formik && formik } : { type: "server", error: messages }}
                      type="password"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <span className="form-label-description">
                    <a href="/auth/forgot-password" > Forgot Password</a>
                  </span>
                </div>
                <div className="form-footer">
                  <button type="submit" className={`btn btn-primary w-100 ${disabled ? "disabled" : ""}`}>
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CLoader show={loader} />
    </>
  );
}
export default Signin;
