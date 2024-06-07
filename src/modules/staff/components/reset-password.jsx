import React, { useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";

function ResetPassword() {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      country: "",
      phone_number: "",
      password: "",
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        country: values.country,
        phone_number: values.phone_number,
        password: values.password,
      };
      // dispatch(loginAction(model));
    },
  });
  return (
    <form>
      <div className="card-bodt">
      <div className=" row ">


        <div className="row mb-3">
          <div className="col-md-8 col-xl-8">
            <label className="form-label">New Password</label>
            <CInput
              id="new_password"
              name="new_password"
              value={formik.values.new_password}
              placeholder="Enter New Password "
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

          <div className="col-md-8 col-xl-8">
            <label className="form-label">Confirm Password</label>
            <CInput
              id="confirm_password"
              name="confirm_password"
              value={formik.values.confirm_password}
              placeholder="Enter confirm Password "
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
          <div className="col-md-4 mt-3 p-2 col-xl-4">
            <Button name="Change Password " color="btn-info" style="pe-4" />
          </div>
        </div>


      </div>
      </div>
    </form>
  )
}

export default ResetPassword