import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { changeEmailAction, verifyEmailAction } from "../../../app-redux/auth/authActions";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { selectEmailStatus, selectUser } from "../../../app-redux/auth/authSlice";
import Alert from "../../../common/components/alerts";
import { selectgetUserLoginDetailStatus, selectStaffError } from "../../../app-redux/staff/staffSlice";
import { getCreateUserLoginAction, getUserLoginDetailAction } from "../../../app-redux/staff/staffActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import ChangeEmail from "./change-email";

function EmailVarification({ logindetail }) {

  const dispatch = useAppDispatch();
  const registerEmailStatus = useAppSelector(selectEmailStatus);
  const [messages, setMessages] = useState({});
  const [emailConfirmation, setEmailConfirmed] = useState(false);
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const userdata = useAppSelector(selectUser);
  const error = useAppSelector(selectStaffError);
  const emailStatus = useAppSelector(selectEmailStatus);
  const getUserLoginDetailStatus = useAppSelector(selectgetUserLoginDetailStatus)
  const navigate = useNavigate();
  const { staffId } = useParams();

  const formik = useFormik({
    initialValues: {
      userId: "",
      newEmail: "",
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        userId: values.userId,
        newEmail: values.email,
      };
      console.log("model", model);
      {
        emailConfirmation ?
          dispatch(changeEmailAction(model))
          :
          dispatch(getCreateUserLoginAction(model))
      }
    },
  });



  useEffect(() => {
    console.log("getUserLoginDetailStatus", getUserLoginDetailStatus);
    if (getUserLoginDetailStatus && getUserLoginDetailStatus.data) {
      formik.setValues({ email: getUserLoginDetailStatus.data.email, userId: staffId })
      setEmailConfirmed(getUserLoginDetailStatus.data.emailConfirmed)
    } else {
      // formik.setValues({ id: staffId })
    }
  }, [getUserLoginDetailStatus])


  console.log("emailConfrimation", emailConfirmation);

  useEffect(() => {
    console.log("success", emailStatus)
  }, [emailStatus]);

  useEffect(() => {
    console.log("error", error)
  }, [error]);

  useEffect(() => {
    if (registerEmailStatus && registerEmailStatus.status === true) {
      setMessage(registerEmailStatus.message)
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }, [registerEmailStatus]);

  return (
    <form onSubmit={formik.handleSubmit}>

      <div className="mb-3">
        {message &&
          <Alert title={message} />}
      </div>
      <div className=" row ">
        <div className="row mb-3">
          <div className="col-md-8 col-xl-8">
            <label className="form-label">Email</label>
            <CInput
              id="email"
              name="email"
              value={formik.values.email}
              placeholder="enter email for verification"
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
          <div className="col-md-4   col-xl-4" style={{ marginTop: "1.6rem" }}>
            {emailConfirmation ?

              <Button name="Change Email" color="btn-info" />
              :
              <Button name="Send Verification" color="btn-info" />



            }
          </div>
        </div>
      </div>
    </form>
  )
};

export default EmailVarification;