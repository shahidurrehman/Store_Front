import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../common/components/c_input";
import Button from "../../common/components/button";


function ChangePassword() {
 
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
                    Forgate Password
                  </h2>
  
                  
  
                  <div className="row mb-3">
                    <div className="col-md-6 col-xl-12">
                      <label className="form-label">Password </label>
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
                      <label className="form-label">Confirm Password </label>
                      <CInput
                        id="c_password"
                        name="c_password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={isFormik ? { type: "formik", error: formik && formik } : { type: "server", error: messages }}
                        type="password"
                      />
                    </div>
                  </div>
                 
                  <div className="form-footer">

                    <Button type="submit" name="Save" />
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default ChangePassword