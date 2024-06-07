import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { selectgetOtherInformationStatus, selectotherInformationStatus, selectStaffError } from "../../../app-redux/staff/staffSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { selectUser } from "../../../app-redux/auth/authSlice";
import { getOtherformationAction, otherInformationAction } from "../../../app-redux/staff/staffActions";


function OtherInformation({ handleNext, staffId }) {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);
  const getOtherInformationStatus = useAppSelector(selectgetOtherInformationStatus)

  const userdata = useAppSelector(selectUser);
  const otherInformationStatus = useAppSelector(selectotherInformationStatus);
  const error = useAppSelector(selectStaffError);


  const formik = useFormik({
    initialValues: {
      id: "",
      disease: "",
      courtProceedings: "",
      terminated: "",
      judicalbody: "",
      misconduct: "",
      previousEmployeeFirm: "",
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        id: values.id,
        disease: values.disease,
        courtProceedings: values.courtProceedings,
        terminated: values.terminated,
        judicalbody: values.judicalbody,
        misconduct: values.misconduct,
        previousEmployeeFirm: values.previousEmployeeFirm,
      };
      console.log("model", model);
      dispatch(otherInformationAction(model));
    },
  });

  useEffect(() => {
    console.log("id", staffId)
    if (staffId && staffId) {
      dispatch(getOtherformationAction(staffId));
    }
  }, [staffId])


  useEffect(() => {
    console.log("getsuccess", getOtherInformationStatus);
    if (getOtherInformationStatus && getOtherInformationStatus.data) {
      console.log("getOtherInformationStatus", getOtherInformationStatus);
      formik.setValues({ ...getOtherInformationStatus.data, id: staffId })
    } else {
      formik.setValues({ id: staffId })
    }
  }, [getOtherInformationStatus]);


  useEffect(() => {
    console.log("success", otherInformationStatus)
  }, [otherInformationStatus]);

  useEffect(() => {
    console.log("error", error)
  }, [error]);

  useEffect(() => {
    if (userdata && userdata.id) {
      formik.setFieldValue("id", userdata.id)
    }
  }, [userdata]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" row ">
        <div className="mb-3 col-xl-12">
          <label className="form-label">Any serious illness or disease:</label>
          <CInput
            id="disease"
            name="disease"
            value={formik.values.disease}
            placeholder="comment..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="textarea"
            rows={5}
          />
        </div>

        <div className=" mb-3 col-xl-12">
          <label className="form-label">
            Have you ever been involved in court proceedings?
          </label>
          <CInput
            id="courtProceedings"
            name="courtProceedings"
            value={formik.values.courtProceedings}
            placeholder="comment..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="textarea"
            rows={5}
          />
        </div>
        <div className=" mb-3 col-xl-12">
          <label className="form-label">
            Have you ever been terminated from any job?
          </label>
          <CInput
            id="terminated"
            name="terminated"
            value={formik.values.terminated}
            placeholder="Reasons for dismissal..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="textarea"
            rows={5}
          />
        </div>

        <div className=" mb-3 col-xl-12">
          <label className="form-label">
            Have you ever been debarred from any court or any other judicial
            body?
          </label>
          <CInput
            id="judicalbody"
            name="judicalbody"
            value={formik.values.judicalbody}
            placeholder="Reason for debarment... "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="textarea"
            rows={5}
          />
        </div>

        <div className=" mb-3 col-xl-12">
          <label className="form-label">
            Have you ever been penalized or debarred for negligence or
            misconduct by a professional body or institute?
          </label>
          <CInput
            id="misconduct"
            name="misconduct"
            value={formik.values.misconduct}
            placeholder="comment... "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="textarea"
            rows={5}
          />
        </div>
        <div className=" mb-3 col-xl-12">
          <label className="form-label">
            Are you related to any existing or previous employee of the firm?
          </label>
          <CInput
            id="previousEmployeeFirm"
            name="previousEmployeeFirm"
            value={formik.values.previousEmployeeFirm}
            placeholder="Provide name and relationship..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="textarea"
            rows={5}
          />
        </div>

        <div className=" text-end mt-3">
          <Button type="submit" color="btn-info" name="Save" />
        </div>
      </div>
    </form>
  );
}

export default OtherInformation;
