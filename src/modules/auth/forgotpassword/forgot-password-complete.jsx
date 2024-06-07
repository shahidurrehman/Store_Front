import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { useNavigate, useParams } from "react-router-dom";
import { getUrlQueryParam } from "../../../common/utils/app.util";
import { completeForgotPasswordAction } from "../../../app-redux/auth/authActions";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import CLoader from "../../../common/components/loader";
import { resetcompleteForgotPasswordAction, resetErrorAction, selectAuthError, selectCompleteForgotPasswordStatus, selectStatus } from "../../../app-redux/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";





const ForgotPasswordComplete = () => {

    const [messages, setMessages] = useState({});
    const [isFormik, setIsFormik] = useState(false);
    const [message, setMessage] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [loader, showLoader] = useState(false)
    const dispatch = useAppDispatch();
    const authStatus = useAppSelector(selectStatus);
    const forgotpasswordCompleteStatus =useAppSelector(selectCompleteForgotPasswordStatus)
    let navigate = useNavigate();
    let error = useAppSelector(selectAuthError);
    const notify = () => toast.error("Unable to change Password");

  
    const formik = useFormik({
        initialValues: {
            userId: "",
            token: "",
            password: "",
        },
        // validationSchema: signinFormValidation,
        onSubmit: (values) => {
            const model = {
                userId: values.userId,
                token: values.token,
                password: values.password,
            };
            console.log("model", model);
            dispatch(completeForgotPasswordAction(model));
        },
    });

    useEffect(() => {
        if (authStatus === "loading") showLoader(true)
        else showLoader(false)
      }, [authStatus]);

      useEffect(() => {
        if (forgotpasswordCompleteStatus && forgotpasswordCompleteStatus.status === true) {
          navigate("/auth/signin");
          dispatch(resetcompleteForgotPasswordAction())
        }
      
      }, [forgotpasswordCompleteStatus]);

      useEffect(()=>{
        if(error && error.status === false)
        {
            setMessage(error.error)
            dispatch(resetErrorAction());
            notify()
           
        }
      },[error])

    useEffect(() => {
        const code = getUrlQueryParam("code");
        if (code) {          
            formik.setFieldValue("token", code);
            console.log("code", code);
        }
    }, []);

    useEffect(() => {
        const id = getUrlQueryParam("id");
        if (id) {
            formik.setFieldValue("userId", id);
            console.log("userId", id);
        }
    }, []);



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
                                    Enter New Password
                                </h2>


                                <div className="row mb-3">
                                    <div className="col-md-6 col-xl-12">
                                        <label className="form-label">New Password </label>
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

                                <div className="form-footer text-end">
                                    <button type="submit" className={`btn btn-primary w-20 ${disabled ? "" : ""}`}>
                                        Change password
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

export default ForgotPasswordComplete