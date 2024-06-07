import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";


function NewEmail() {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const dispatch = useAppDispatch();
  // const getloginStatus=useAppSelector(selectLoginStatus)
  // let error = useAppSelector(selectAuthError);
  // const getProfileStatus=useAppSelector(selectgetProfileStatus)
  // const userGetStatus = useAppSelector(selectuserGetStatus)


  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      userId: "",
      newEmail: ""
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        userId: values.userId,
        newEmail: values.newEmail,
      };
      console.log("model", model);
      // dispatch(changeEmailAction(model));
    },
  });

  // useEffect(()=>{
  //   dispatch(getProfileAction());
  //   console.log("getProfileStatus",getProfileStatus);
  // },[])

  //  useEffect(() => {
  //   if (getloginStatus.id && userGetStatus && userGetStatus.data) {
  //     formik.setValues({ ...userGetStatus.data, newEmail:getloginStatus.email})
  //   }
  // }, [userGetStatus]);


  // useEffect(() => {
  //   console.log("id", getloginStatus);
  //   formik.setFieldValue("userId", getloginStatus.id);
  // }, [getloginStatus])


  return (
    <div className="d-flex flex-column">
      <div className="page page-center">
        <div className="container-tight py-4">
          <form
            className="card card-md"
            onSubmit={formik.handleSubmit}>

            <div className=" card-body ">
              <div className="mb-3 col-xl-12">
                <label className="form-label">New Email:</label>
                <CInput
                  name="newEmail"
                  value={formik.values.newEmail}
                  placeholder="Enter New email"
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
        </div>
      </div>
    </div>
  );
}

export default NewEmail;
