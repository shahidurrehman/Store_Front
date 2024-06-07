import React, { useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../../common/components/c_input";
import Button from "../../../../common/components/button";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { changePasswordAction } from "../../../../app-redux/auth/authActions";
import { useEffect } from "react";
import { selectAuthError, selectLoginStatus } from "../../../../app-redux/auth/authSlice";
import Alert from "../../../../common/components/alerts";
import { changePasswordFormValidation } from "../../validation";

function ChangePassword() {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatch = useAppDispatch();
  const getloginStatus = useAppSelector(selectLoginStatus);
  let error = useAppSelector(selectAuthError);

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      currentUserId: "",
      password: "",
      newPassword: "",
      ConfirmPassword: "",
    },
    validationSchema: changePasswordFormValidation,
    onSubmit: (values) => {
      const model = {
        currentUserId: values.currentUserId,
        password: values.password,
        newPassword: values.newPassword,
        ConfirmPassword: values.ConfirmPassword,
      };
      console.log("model", model);
      dispatch(changePasswordAction(model));
    },
  });

  useEffect(() => {
    console.log("id", getloginStatus);
    formik.setFieldValue("currentUserId", getloginStatus.id);
  }, [getloginStatus])


  useEffect(() => {
    if (error && error.error) {
      let err = error.error;
      if (err && (typeof err) == "string") {
        setMessages(null);
        setMessages({ error_msg: err, status: "danger" });
        setIsFormik(false)
      }
    } else {
      setMessages(null);
    }
  }, [error]);

  useEffect(() => {
    setIsFormik(true)
  }, [formik.errors]);


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" row ">
        {messages &&
          <Alert title={messages.error_msg} type={messages.status} />}
        <div className="mb-3 col-xl-12">
          <label className="form-label">Current Password:</label>
          <CInput
            name="password"
            value={formik.values.password}
            placeholder="Enter Current password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="password"
          />
        </div>
        <div className="mb-3 col-xl-12">
          <label className="form-label">New Password:</label>
          <CInput
            name="newPassword"
            value={formik.values.newPassword}
            placeholder=" Enter New Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="password"
          />
        </div>
        <div className=" mb-3 col-xl-12">
          <label className="form-label">Confirm Password:</label>
          <CInput
            id="ConfirmPassword"
            name="ConfirmPassword"
            value={formik.values.ConfirmPassword}
            placeholder=" Enter New Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="password"
          />
        </div>
        <div className="d-xl-flex justify-content-end mt-3">
          <Button type="submit" color="btn-info" name="Update" />
        </div>
      </div>
    </form>
  );
}

export default ChangePassword;
