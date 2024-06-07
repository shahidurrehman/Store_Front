import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../common/components/c_input";
import { useNavigate } from "react-router-dom";

function EmailVerification() {
  

  const [messages, setMessages] = useState({});
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        username: values.username,
        password: values.password,
      };
    //   dispatch(loginAction(model));
    },
  });

  let navigate = useNavigate();

  function handleClick() {
   
  // Somewhere in your code, e.g. inside a handler:
  navigate("/auth/change-password"); 
  }



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
                  Verify Email
                </h2>

                <div className="row mb-3">
                  <div className="col-md-12 col-xl-12">
                    <label className="form-label">Email</label>
                    <CInput
                      id="email"
                      name="email"
                      value={formik.values.username}
                      placeholder="enter email for verification"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={isFormik ? { type: "formik", error: formik && formik } : { type: "server", error: messages }}
                      type="email"
                    />

                  </div>
                </div>

                
               
                <div className="form-footer">
                  <button onClick={handleClick} type="submit" className={`btn btn-primary w-100 ${disabled ? "" : ""}`}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default EmailVerification;
