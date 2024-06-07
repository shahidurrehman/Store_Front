import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { basicInformationAction, getBasicInformationAction } from "../../../app-redux/staff/staffActions";
import { resetbasicInformationAction, selectBasicInformationStatus, selectgetUserLoginDetailStatus, selectloginDetailStatus, selectStaffError, selectuserGetStatus } from "../../../app-redux/staff/staffSlice";
import { getFormattedDateTime } from "../../../common/utils/app.util";
import Alert from "../../../common/components/alerts";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { basicInformationFormValidation } from "../validation";
import { selectLoginStatus } from "../../../app-redux/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";

function BasicInformation({ handleNext, staffId }) {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector(selectStaffError);
  const basicInformationStatus = useAppSelector(selectBasicInformationStatus);
  const userGetStatus = useAppSelector(selectuserGetStatus);
  const usergetLoginStatus = useAppSelector(selectLoginStatus)

  const [messages, setMessages] = useState({});
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);
  const notify = (message) => toast.success(message);

  const formik = useFormik({
    initialValues: {
      id: "0",
      businessId: "",
      displayName: "",
      designation: "",
      department:"",
      cnic: "",
      dateOfBirth: "",
      nationality: "",
      dateOfJoining: "",
      contactpersonal: "",
      contactHome: "",
      email: "",
      address: "",
      permanantAddress: ""
    },
    validationSchema: basicInformationFormValidation,
    onSubmit: (values) => {
      const model = {
        id: values.id,
        businessId: usergetLoginStatus.businessId,
        displayName: values.displayName,
        designation: values.designation,
        department: values.department,
        cnic: values.cnic,
        dateOfBirth: values.dateOfBirth,
        nationality: values.nationality,
        dateOfJoining: values.dateOfJoining,
        contactpersonal: values.contactpersonal,
        contactHome: values.contactHome,
        email: values.email,
        address: values.address,
        permanantAddress: values.permanantAddress
      };
      console.log("model", model);
      dispatch(basicInformationAction(model));
    },
  });

  const Reset = () => {
    formik.setValues({ ...userGetStatus.data, id: staffId })
  }

  useEffect(() => {
    if (staffId && staffId) {
      dispatch(getBasicInformationAction(staffId));
    }
  }, [dispatch, staffId])

  useEffect(() => {
    if (staffId && userGetStatus && userGetStatus.data) {
      formik.setValues({ ...userGetStatus.data, id: staffId, })
    }
  }, [userGetStatus]);

  useEffect(() => {
    if (basicInformationStatus && basicInformationStatus.data) {
      navigate("/staff/edit/" + basicInformationStatus.data);
    }
  }, [basicInformationStatus]);


  useEffect(() => {
    if (error && error.error) {
      let err = error.error;
      if (err && (typeof err) == "string") {
        setMessages(null);
        // setMessage({ error_msg: err, status: "danger" });
        setIsFormik(false)
      }
    } else {
      setMessages(null);
    }
  }, [error]);

  useEffect(() => {
    if (basicInformationStatus && basicInformationStatus.status === true) {
      dispatch(resetbasicInformationAction());
      notify("Information Updated Successfully!");
    }
  }, [basicInformationStatus]);

  useEffect(() => {
    setIsFormik(true)
  }, [formik.errors]);

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.resetForm}>
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
      <div className="mb-3">
        {message &&
          <Alert title={message} />}
      </div>

      <div className="row">
        <div className="mb-1 col-xl-3 col-md-3  text-center d-block d-sm-none mt-2 ms-0 ">
          <img
            src="https://avatars.githubusercontent.com/u/61797303?v=4"
            className="rounded-circle  "
            style={{ width: "50%" }}
            alt="Avatar"
          />
        </div>
        {/* Uncomment for user image  */}
        {/* <div className="col-xl-9  col-md-9 col-sm-9"> */}
          <div className="mb-3 col-xl-12">
            <label className="form-label">Name:</label>
            <CInput
              id="displayName"
              name="displayName"
              value={formik.values.displayName}
              placeholder="Enter name"
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
          {/* <div className="row"> */}
            <div className="mb-3 col-xl-6">
              <label className="form-label">Designation:</label>
              <CInput
                id="designation"
                name="designation"
                value={formik.values.designation}
                placeholder="Designation"
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

            <div className="mb-6 col-xl-6">
              <label className="form-label">Department:</label>
              <CInput
                id="department"
                name="department"
                value={formik.values.department}
                placeholder="Department"
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
{/* 
          </div> */}
        {/* Uncomment for user image  */}
        {/* </div> */}

        {/* Uncomment for user image */}
        {/* <div className="mb-1 col-xl-3 col-md-3 mt-md-4 d-none d-sm-block mt-2 ms-0 ">
          <img
            src="https://avatars.githubusercontent.com/u/61797303?v=4"
            className="rounded-circle  "
            style={{ width: "90%" }}
            alt="Avatar"
          />
        </div> */}

        <div className="mb-3 col-xl-6">
          <label className="form-label">CNIC Number:</label>
          <CInput
            id="cnic"
            name="cnic"
            value={formik.values.cnic}
            placeholder=" CNIC Number"
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
        <div className=" mb-3 col-xl-6">
          <label className="form-label">Date of Birth:</label>
          <CInput
            id="dateOfBirth"
            name="dateOfBirth"
            value={getFormattedDateTime(formik.values.dateOfBirth, "YYYY-MM-DD")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // min={moment(moment().add(-18))}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="date"
            pattern="\d{2}-\d{2}-\d{4}"
          />
        </div>

        <div className=" mb-3 col-xl-6">
          <label className="form-label">Nationality:</label>
          <CInput
            id="nationality"
            name="nationality"
            value={formik.values.nationality}
            placeholder="Nationality"
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
        <div className=" mb-3 col-xl-6">
          <label className="form-label">Date of Joining:</label>
          <CInput
            id="datepicker-default"
            name="dateOfJoining"
            value={getFormattedDateTime(formik.values.dateOfJoining, "YYYY-MM-DD")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="date"
          />
        </div>

        <div className=" mb-3 col-xl-6">
          <label className="form-label">Phone Personal:</label>
          <CInput
            id="contactpersonal"
            name="contactpersonal"
            value={formik.values.contactpersonal}
            placeholder="Phone Personal"
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
        <div className=" mb-3 col-xl-6">
          <label className="form-label">Phone Home:</label>
          <CInput
            id="contactHome"
            name="contactHome"
            value={formik.values.contactHome}
            placeholder="Phone Home"
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

        <div className=" mb-3 col-xl-6">
          <label className="form-label">Email:</label>
          <CInput
            id="email"
            name="email"
            value={formik.values.email}
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={staffId ? true : false}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="email"
          />
        </div>

        <div className=" mb-3 col-xl-6">
          <label className="form-label">Address:</label>
          <CInput
            id="address"
            name="address"
            value={formik.values.address}
            placeholder="Address"
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
        <div className=" mb-3 col-xl-12">
          <label className="form-label">Permanent Address:</label>
          <CInput
            id="permanantAddress"
            name="permanantAddress"
            value={formik.values.permanantAddress}
            placeholder="Permanent Address"
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
        <div className="text-end">
          {staffId ?
            <><button type="button" className="ms-2 mb-2 btn btn-light btn-mb-2" onClick={Reset}>
              Reset
            </button>
            <Button type="submit" color="btn-info" name="Update" />
              </>
            : <>
                <Button type="Reset" color="btn btn-light w-10" name="Reset" />
                <Button type="submit" color="btn-info" name="Save" />
            </>
          }
        </div>
      </div>
    </form>
  );
}

export default BasicInformation;
