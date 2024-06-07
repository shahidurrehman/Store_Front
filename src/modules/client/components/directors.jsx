import { useFormik } from "formik";
import { useState } from "react";
import Button from "../../../common/components/button";
import CInput from "../../../common/components/c_input";

function Directors({ clientId }) {
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
    },
  });
  return (
    <div className='card-body'>
      <form>
        <div className=" row ">
          <div className="mb-3 col-xl-12">
            <label className="form-label">Director 01:</label>
            <CInput
              name="director1"
              value={formik.values.director1}
              placeholder="Director 01"
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
            <label className="form-label">Director 02:</label>
            <CInput
              name="director2"
              value={formik.values.director2}
              placeholder="Director 02"
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
            <label className="form-label">Director 03:</label>
            <CInput
              name="director3"
              value={formik.values.director3}
              placeholder="Director 03"
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
            <Button name="Save" type="submit" color="btn-info" />

          </div>
        </div>
      </form>
    </div>
  );
}

export default Directors;
