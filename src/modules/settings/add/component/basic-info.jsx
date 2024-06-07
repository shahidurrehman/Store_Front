import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../../common/components/c_input";
import Button from "../../../../common/components/button";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { selectAuthError, selectLoginStatus } from "../../../../app-redux/auth/authSlice";
import { basicInformationAction, getBasicInformationAction } from "../../../../app-redux/staff/staffActions";
import { selectuserGetStatus } from "../../../../app-redux/staff/staffSlice";
import { useSearchParams } from "react-router-dom";
import { basicInformationFormValidation } from "../../validation";

function BasicInfo() {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);

  let error = useAppSelector(selectAuthError);

  const getloginStatus = useAppSelector(selectLoginStatus)
  const dispatch = useAppDispatch();
  const userGetStatus = useAppSelector(selectuserGetStatus)

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: "",
      displayName: "",
      email: "",
      designation: "",
      contactpersonal: "",
      address: "",
    },
    validationSchema: basicInformationFormValidation,
    onSubmit: (values) => {
      const model = {
        id: values.id,
        displayName: values.displayName,
        email: values.email,
        designation: values.designation,
        contactpersonal: values.contactpersonal,
        address: values.address
      };
      console.log("model", model);
      dispatch(basicInformationAction(model));
    },
  });


  useEffect(() => {
    console.log("id", getloginStatus);
    formik.setFieldValue("id", getloginStatus.id);
  }, [getloginStatus])


  useEffect(() => {
    if (getloginStatus.id && getloginStatus.id) {
      dispatch(getBasicInformationAction(getloginStatus.id));
    }
  }, [dispatch, getloginStatus])

  useEffect(() => {
    if (getloginStatus.id && userGetStatus && userGetStatus.data) {
      formik.setValues({ ...userGetStatus.data, id:getloginStatus.id})
    }
  }, [userGetStatus]);

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



  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" row ">
        <div className="mb-3 col-xl-6">
          <label className="form-label">Name:</label>
          <CInput
            name="displayName"
            value={formik.values.displayName}
            placeholder="Name"
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
        <div className=" col-xl-6">
          <label className="form-label">Email:</label>
          <CInput
            name="email"
            value={formik.values.email}
            placeholder="Last Name"
            disabled={true}
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

        <div className="mb-3 col-xl-12">
          <label className="form-label">Designation:</label>
          <CInput
            name="designation"
            value={formik.values.designation}
            placeholder="designation"
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
          <label className="form-label">Contact Personal:</label>
          <CInput
            name="contactpersonal"
            value={formik.values.contactpersonal}
            placeholder="contactpersonal"
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
          <label className="form-label">Address:</label>
          <CInput
            name="address"
            value={formik.values.address}
            placeholder="address"
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

        <div className="d-xl-flex justify-content-end mt-3">
          <Button color="btn-info" name="Update" />
        </div>
      </div>
    </form>
  );
}

export default BasicInfo;
