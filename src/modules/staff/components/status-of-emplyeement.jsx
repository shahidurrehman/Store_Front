import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { getStatusOfEmploymentAction, statusOfEmploymentAction } from "../../../app-redux/staff/staffActions";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { selectgetStatusOfEmploymentStatus, selectStaffError, selectstatusOfEmploymentStatus } from "../../../app-redux/staff/staffSlice";

const other = "";
const qualification_list = [
  { lable: "CA (ICAP)", value: "ca_icap", checked: false },
  { lable: "ICMA", value: "icma", checked: false },
  { lable: "PIPFA", value: "pipfa", checked: false },
  { lable: "MBA/ M.com", value: "mba_mcom", checked: false },
  { lable: "CA (ICAEW)", value: "ca_icawe", checked: false },
  { lable: "ACCA", value: "acca", checked: false },
  { lable: "CIMA", value: "cima", checked: false },
  { lable: "Others", value: "", checked: false },
];
function StatusOfEmplyeement({ handleNext, staffId }) {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [feild, setFeild] = useState(false)
  const [value,setValue] =useState("")

  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const statusOfEmployementstatus = useAppSelector(selectstatusOfEmploymentStatus)
  const getstatusOfEmployementStatus = useAppSelector(selectgetStatusOfEmploymentStatus)
  const error = useAppSelector(selectStaffError)

  const formik = useFormik({
    initialValues: {
      userId: 0,
      other: "",
      employmentStatus: "string",
      professionalQualification: qualification_list
    },

    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      let array = getQualificationValue(values.professionalQualification);
      console.log("array", array);
      const model = {
        userId: values.userId,
        employmentStatus: values.employmentStatus,
        professionalQualification: array.join() + formik.values.other,
      };
      console.log("model", model);
      dispatch(statusOfEmploymentAction(model));
    },
  });

  const getQualificationValue = (data) => {
    let result = data.reduce((verified, { checked, value }) => {
      if (checked) {
        verified.push(value);
      }
      return verified;
    }, []);
    return result;
  }



  useEffect(() => {
    if (staffId && staffId) {
      dispatch(getStatusOfEmploymentAction(staffId));
    }
  }, [staffId])


  // useEffect(()=>{
  //   console.log("GetStatus", getstatusOfEmployementStatus && getstatusOfEmployementStatus.data);
  //   if( getstatusOfEmployementStatus && getstatusOfEmployementStatus.data){
  //     formik.setValues({ ...getstatusOfEmployementStatus.data,professionalQualification:getstatusOfEmployementStatus.data.professionalQualification.split(',')  })
  //   }
  // },[getstatusOfEmployementStatus])

  useEffect(() => {
    formik.setFieldValue("userId", staffId)
  }, [staffId])

  useEffect(() => {
    console.log("success", statusOfEmployementstatus);
    if (statusOfEmployementstatus && statusOfEmployementstatus.status === true) {
      // dispatch(resetgaurduanInformationAction());
      // handleNext();
    }
  }, [statusOfEmployementstatus]);

  useEffect(() => {
    console.log("GetStatus", getstatusOfEmployementStatus && getstatusOfEmployementStatus.data);
    if (getstatusOfEmployementStatus && getstatusOfEmployementStatus.data) {
      const values = { ...getstatusOfEmployementStatus.data, other: formik.values.other };
      const qualifications = values.professionalQualification ? values.professionalQualification.split(",") : [];

      values.professionalQualification = qualification_list.map((item) => ({
        ...item,
        checked: qualifications.includes(item.value),
      }));
      formik.setValues(values);
    }
  }, [getstatusOfEmployementStatus]);


  useEffect(() => {
    console.log("error", error)
  }, [error]);

  const onChecked = (e, i) => {
  
    const { checked } = e.target;
    let array = formik.values.professionalQualification;
    if (checked) {
      array[i].checked = true;
      if (array.length - 1 === i) {
        setFeild(true)
      }
    } else {
      array[i].checked = false;
      if (array.length - 1 === i) {
        setFeild(false)
      }
    }
    formik.setFieldValue("professionalQualification", array)
    
  }


  useEffect(()=>{
   console.log("values",formik.values.other);
  },[formik.values.other])

  return (
    <form onSubmit={formik.handleSubmit} >
      <div className=" row ">
        <div className="mb-3 col-xl-12">
          <h3>Employment Status</h3>
        </div>

        <div className="mb-3 col-xl-3">
          <label className="form-check">
            <CInput
              name="employmentStatus"
              value={"employee"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="radio"
              checked={formik.values.employmentStatus === "employee"}
            />
            <span className="form-check-label">Employee</span>
          </label>
        </div>

        <div className=" mb-3 col-xl-3">
          <label className="form-check">
            <CInput
              name="employmentStatus"
              value={"icap_training"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="radio"
              checked={formik.values.employmentStatus === "icap_training"}
            />
            <span className="form-check-label">ICAP – training</span>
          </label>
        </div>
        <div className=" mb-3 col-xl-3">
          <label className="form-check">
            <CInput
              name="employmentStatus"
              value={"acca_training"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="radio"
              checked={formik.values.employmentStatus === "acca_training"}
            />

            <span className="form-check-label">ACCA – training</span>

          </label>
        </div>

        <div className=" mb-3 col-xl-3">
          <label className="form-check">
            <CInput
              name="employmentStatus"
              value={"icaew_training"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="radio"
              checked={formik.values.employmentStatus === "icaew_training"}
            />
            <span className="form-check-label">ICAEW – TRAINING</span>
          </label>
        </div>

        <div className=" mb-3 col-xl-3">
          <label className="form-check">
            <CInput
              name="employmentStatus"
              value={"internship"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="radio"
              checked={formik.values.employmentStatus === "internship"}
            />
            <span className="form-check-label">Internship</span>
          </label>
        </div>
        <hr />

        <div className="mb-3 col-xl-12">
          <h3>Professional Qualification</h3>
        </div>
        {formik.values.professionalQualification.map((item, i) =>
          <div className="mb-3 col-xl-3">
            <label className="form-check">
              <CInput
                name="icap"
                checked={item.checked}
                onChange={(e) => onChecked(e, i)}
                className="form-check-input"
                // error={
                //   isFormik
                //     ? { type: "formik", error: formik && formik }
                //     : { type: "server", error: messages }
                // }
                type="checkbox"
              />
              <span className="form-check-label">{item.lable}</span>
            </label>
          </div>
        )}
        {feild ?
          <div className="mb-3 col-xl-4">
            <CInput
              name="other"
              value={formik.values.other}
              placeholder=""
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
          :
          <div>
          </div>
        }

        <div className=" text-end mt-3">
          <button type="submit" className="btn btn-info">Save</button>
          {/* <Button type="submit" color="btn-info" name="Save" /> */}
        </div>
      </div>
    </form>
  );
}

export default StatusOfEmplyeement;
