import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { selectAuthError, selectStatus } from "../../../app-redux/auth/authSlice";
import Alert from "../../../common/components/alerts";
import CLoader from "../../../common/components/loader";
import { getUrlQueryParam } from "../../../common/utils/app.util";
import { addUserPasswordAction, completeEmailVerificationAction } from "../../../app-redux/auth/authActions";


function CompleteEmailVerification() {

    const dispatch = useAppDispatch();
    const [messages, setMessages] = useState({});
    const [isFormik, setIsFormik] = useState(false);
    const [message, setMessage] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [loader, showLoader] = useState(false)

    let error = useAppSelector(selectAuthError);
    const authStatus = useAppSelector(selectStatus);

    const formik = useFormik({
        initialValues: {
            userId: "",
            password: "",
            // c_password: "",
            // token:""
        },
        // validationSchema: signinFormValidation,
        onSubmit: (values) => {
            const model = {
                userId: values.userId,
                password: values.password,
                // c_password: values.c_password,
                // token:values.token,
            };
            console.log("model", model);
            dispatch(addUserPasswordAction(model));
        },
    });


    useEffect(() => {
        const id = getUrlQueryParam("id");
        const code = getUrlQueryParam("code")
        if (id && code) {
            formik.setFieldValue("userId", id);
            formik.setFieldValue("token", code);
        }
        dispatch(completeEmailVerificationAction({ token: code, userId: id }))

    }, [])


    useEffect(() => {
        console.log("authStatus", authStatus)
        if (authStatus === "loading") {
            showLoader(true)
        } else {
            showLoader(false)
        }
    }, [authStatus]);


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
                                    Set Your Password
                                </h2>
                                <div className="row mb-3">
                                    {message &&
                                        <Alert title={message.error_msg} type={message.status} />}
                                    <div className="col-md-6 col-xl-12">
                                        <label className="form-label"> New Password
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
                                    <div className="col-md-6 col-xl-12">
                                        <label className="form-label"> Confirm Password
                                        </label>
                                        <CInput
                                            id="c_password"
                                            name="c_password"
                                            value={formik.values.c_password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={isFormik ? { type: "formik", error: formik && formik } : { type: "server", error: messages }}
                                            type="password"
                                        />
                                    </div>
                                </div>
                                {/* <div className="mb-2">
                  <a onClick={ForgotPassword}>Forgot password</a>
                </div> */}
                                <div className="form-footer">
                                    <button type="submit" className={`btn btn-primary w-100 ${disabled ? "disabled" : ""}`}>
                                        Confirm Password
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
export default CompleteEmailVerification;
