import React, { useEffect } from "react";
import Button from "../../../common/components/button";
import EmailVarification from "./email-verfication";
import ChangeEmail from "./change-email";
import { forgotPasswordAction, loginAction } from "../../../app-redux/auth/authActions";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { isLogin, resetForgotPasswordAction, selectForgotPasswordStatus, selectRegisterStatus } from "../../../app-redux/auth/authSlice";
import { getUserLoginDetailAction, loginDetailAction } from "../../../app-redux/staff/staffActions";
import { Formik, useFormik } from "formik";
import { selectgetUserLoginDetailStatus } from "../../../app-redux/staff/staffSlice";
import ForgotPasswordComplete from "../../auth/forgotpassword/forgot-password-complete";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function LoginDetail({ staffId }) {

  const registerDetail = useAppSelector(selectRegisterStatus);
  const logindetail = useAppSelector(isLogin);
  const dispatch = useAppDispatch();
  const getUserLoginDetailStatus = useAppSelector(selectgetUserLoginDetailStatus)
  const resetpasswordStatus = useAppSelector(selectForgotPasswordStatus)
  const notify = () => toast.success("Email Sent Successfully!");


  const formik = useFormik({
    initialValues: {
      email: "",
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        email: values.email
      };
      // console.log("model", model);

    },
  });

  useEffect(() => {
    dispatch(getUserLoginDetailAction(staffId));

  }, []);

  useEffect(() => {
    console.log("getSucces", getUserLoginDetailStatus);
    formik.setFieldValue("email", getUserLoginDetailStatus && getUserLoginDetailStatus.data.email)
  }, [getUserLoginDetailStatus])

  let navigate = useNavigate();

  function handleClick() {
    const { email } = formik.values
    console.log("email", email);
    dispatch(forgotPasswordAction(formik.values));
  }

  useEffect(() => {
    console.log("success", resetpasswordStatus)
    if (resetpasswordStatus && resetpasswordStatus.status === true) {
      dispatch(resetForgotPasswordAction());
      notify()
    }
  }, [resetpasswordStatus]);


  return (
    < >
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <EmailVarification logindetail={logindetail} />
      {/* <ChangeEmail /> */}
      <div className="form-footer">
        <div className=" text-start mt-3">
          <button onClick={handleClick} type="submit" className={`btn btn-primary w-10`}>
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginDetail;
