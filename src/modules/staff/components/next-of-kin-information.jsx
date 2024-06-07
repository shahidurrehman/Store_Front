import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { getnextOfKinInformationAction, nextOfKinInformationAction } from "../../../app-redux/staff/staffActions";
import { resetnextOfKinInformationAction, selectgetNextOfKinInformationStatus, selectnextOfKinInformationStatus, selectStaffError } from "../../../app-redux/staff/staffSlice";
import { selectUser } from "../../../app-redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { toast, ToastContainer } from "react-toastify";
import { nextOfKinFormValidation } from "../validation";



function NextOfKinInformation({ handleNext, staffId }) {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const dispatch = useAppDispatch();

  const getNextofKinInformationStatus = useAppSelector(selectgetNextOfKinInformationStatus)

  // const [show, setShow] = useState(false);
  // const userdata = useAppSelector(selectUser);

  const nextOfKinInformationStatus = useAppSelector(selectnextOfKinInformationStatus);
  const error = useAppSelector(selectStaffError);
  const notify = () => toast.success("Information Added!");


  const formik = useFormik({
    initialValues: {
      id: "",
      nextOfKinName: "",
      nextOfKinCnic: "",
      nextOfKinOccupation: "",
      nextOfKinContactPersonal: "",
      nextOfKinContactOffice: "",
    },
    validationSchema: nextOfKinFormValidation,
    onSubmit: (values) => {
      const model = {
        id: values.id,
        nextOfKinName: values.nextOfKinName,
        nextOfKinCnic: values.nextOfKinCnic||0,
        nextOfKinOccupation: values.nextOfKinOccupation,
        nextOfKinContactPersonal: values.nextOfKinContactPersonal,
        nextOfKinContactOffice: values.nextOfKinContactOffice,
      };
      console.log("model", model);
      dispatch(nextOfKinInformationAction(model));
    },
  });

  
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
    setIsFormik(true)
  }, [formik.errors]);

  useEffect(() => {
    console.log("id", staffId)
    if (staffId && staffId) {
      dispatch(getnextOfKinInformationAction(staffId));
    }
  }, [staffId]);

  useEffect(() => {
    if (nextOfKinInformationStatus && nextOfKinInformationStatus.status === true) {
      dispatch(resetnextOfKinInformationAction())
      notify()
    }

  }, [nextOfKinInformationStatus]);


  useEffect(() => {
    console.log("getsuccess", getNextofKinInformationStatus);
    if (getNextofKinInformationStatus && getNextofKinInformationStatus.data) {
      console.log("getNextofKinInformationStatus", getNextofKinInformationStatus);
      formik.setValues({ ...getNextofKinInformationStatus.data, id: staffId })
    } else {
      console.log("cc", staffId);

      formik.setValues({ id: staffId })
    }
  }, [getNextofKinInformationStatus]);

  useEffect(() => {
    console.log("success", nextOfKinInformationStatus)
    if (nextOfKinInformationStatus && nextOfKinInformationStatus.status === true) {
      dispatch(resetnextOfKinInformationAction());
    }
  }, [nextOfKinInformationStatus]);

  useEffect(() => {
    console.log("error", error)
  }, [error]);

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
          <label className="form-label">Name:</label>
          <CInput
            id="nextOfKinName"
            name="nextOfKinName"
            value={formik.values.nextOfKinName}
            placeholder="Next of Kin Name"
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
            id="nextOfKinCnic"
            name="nextOfKinCnic"
            value={formik.values.nextOfKinCnic}
            placeholder="CNIC Number"
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
            id="nextOfKinOccupation"
            name="nextOfKinOccupation"
            value={formik.values.nextOfKinOccupation}
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
            id="nextOfKinContactPersonal"
            name="nextOfKinContactPersonal"
            value={formik.values.nextOfKinContactPersonal}
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
            id="nextOfKinContactOffice"
            name="nextOfKinContactOffice"
            value={formik.values.nextOfKinContactOffice}
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
          <Button type="submit" color="btn-info" name={"Save"} />
        </div>
      </div>
    </form>
  );
}

export default NextOfKinInformation;
