import React, { useState, useEffect } from "react";
import { isEmptyArray, useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { gaurduanInformationAction, getGaurdianInformationAction } from "../../../app-redux/staff/staffActions";
import { resetgaurduanInformationAction, resetgetGaurdianInformationAction, selectgaurduanInformationStatus, selectgetGaurdianInformationStatus, selectStaffError } from "../../../app-redux/staff/staffSlice";
import { selectUser } from "../../../app-redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { guardianInformationFormValidation } from "../validation";
import { toast, ToastContainer } from "react-toastify";



function GuardianInformation({ handleNext, staffId }) {
  const [messages, setMessages] = useState("");
  const [message, setMessage] = useState(null);
  const [isFormik, setIsFormik] = useState(false);
  const dispatch = useAppDispatch();
  const getGaurdianInformationStatus = useAppSelector(selectgetGaurdianInformationStatus)

  const [show, setShow] = useState(false);

  const userdata = useAppSelector(selectUser);
  const gaurdianInformationStatus = useAppSelector(selectgaurduanInformationStatus);
  const error = useAppSelector(selectStaffError);
  const notify = () => toast.success("Guardian Information Updated!");


  const formik = useFormik({
    initialValues: {
      id: "",
      guardianName: "",
      guardianCnic: "",
      guardianOccupation: "",
      guardianContactPersonal: "",
      guardianContactOffice: "",
    },
    validationSchema: guardianInformationFormValidation,
    onSubmit: (values) => {
      const model = {
        id: values.id,
        guardianName: values.guardianName,
        guardianCnic: values.guardianCnic,
        guardianOccupation: values.guardianOccupation,
        guardianContactPersonal: values.guardianContactPersonal,
        guardianContactOffice: values.guardianContactOffice,
      };
      console.log("model", model);
      dispatch(gaurduanInformationAction(model));
    },
  });

  useEffect(() => {
    // let id = getStaffId();
    console.log("id", staffId)
    if (staffId && staffId) {
      dispatch(getGaurdianInformationAction(staffId));
    }
  }, [staffId])

  useEffect(() => {
    console.log("getsuccess", getGaurdianInformationStatus);
    if (getGaurdianInformationStatus && getGaurdianInformationStatus.data) {
      console.log("getGaurdianInformationStatus", getGaurdianInformationStatus);
      formik.setValues({ ...getGaurdianInformationStatus.data, id: staffId })
      dispatch(resetgetGaurdianInformationAction());
    } 
    
    
  }, [getGaurdianInformationStatus]);



  useEffect(() => {
    console.log("success", gaurdianInformationStatus);
    if (gaurdianInformationStatus && gaurdianInformationStatus.status === true) {
      dispatch(resetgaurduanInformationAction())
     notify()
    }
  }, [gaurdianInformationStatus]);

  useEffect(() => {
    console.log("error", error)
  }, [error]);


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
    <form onSubmit={formik.handleSubmit}>
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
      <div className=" row ">
        <div className="mb-3 col-xl-12">
          <label className="form-label">Guardian Name:</label>
          <CInput
            id="guardianName"
            name="guardianName"
            value={formik.values.guardianName}
            placeholder="Guardian Name"
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
          <label className="form-label">CNIC Number:</label>
          <CInput
            id="guardianCnic"
            name="guardianCnic"
            value={formik.values.guardianCnic}
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
          <label className="form-label">Occupation:</label>
          <CInput
            id="guardianOccupation"
            name="guardianOccupation"
            value={formik.values.guardianOccupation}
            placeholder="Occupation"
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
          <label className="form-label">Phone Personal:</label>
          <CInput
            id="guardianContactPersonal"
            name="guardianContactPersonal"
            value={formik.values.guardianContactPersonal}
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
          <label className="form-label">Phone Office:</label>
          <CInput
            id="guardianContactOffice"
            name="guardianContactOffice"
            value={formik.values.guardianContactOffice}
            placeholder="Phone Office"
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

        <div className=" text-end mt-3">
          <Button type="submit" color="btn-info" name="Save" />
        </div>
      </div>
    </form>
  );
}

export default GuardianInformation;
