import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../../common/components/c_input";
import Button from "../../../../common/components/button";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { changeEmailAction, getProfileAction } from "../../../../app-redux/auth/authActions";
import { selectAuthError, selectgetProfileStatus, selectLoginStatus } from "../../../../app-redux/auth/authSlice";
import { selectuserGetStatus } from "../../../../app-redux/staff/staffSlice";
import { changeEmailFormValidation } from "../../validation";
function ChangeEmail() {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatch = useAppDispatch();
  const getloginStatus=useAppSelector(selectLoginStatus)
  let error = useAppSelector(selectAuthError);
  const getProfileStatus=useAppSelector(selectgetProfileStatus)
  const userGetStatus = useAppSelector(selectuserGetStatus)


  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      userId: "",
      newEmail: ""
    },
    validationSchema: changeEmailFormValidation,
    onSubmit: (values) => {
      const model = {
        userId: values.userId,
        newEmail: values.newEmail,
      };
      console.log("model",model);
      dispatch(changeEmailAction(model));
    },
  });

  useEffect(()=>{
    dispatch(getProfileAction());
    console.log("getProfileStatus",getProfileStatus);
  },[])

   useEffect(() => {
    if (getloginStatus.id && userGetStatus && userGetStatus.data) {
      formik.setValues({ ...userGetStatus.data, newEmail:getloginStatus.email})
    }
  }, [userGetStatus]);
  

  useEffect(() => {
    console.log("id", getloginStatus);
    formik.setFieldValue("userId", getloginStatus.id);
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
        <div className="mb-3 col-xl-12">
          <label className="form-label">Email:</label>
          <CInput
            name="newEmail"
            value={formik.values.newEmail}
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="email"
          />
        </div>
        {/* <div className=" col-xl-12">
          <label className="form-label">New Email:</label>
          <CInput
            name="newEmail"
            value={formik.values.newEmail}
            placeholder=" Enter Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="email"
          />
        </div> */}

        <div className="d-xl-flex justify-content-end mt-3">
          <Button type="submit" color="btn-info" name="Update" />
        </div>
      </div>
    </form>
  );
}

export default ChangeEmail;
