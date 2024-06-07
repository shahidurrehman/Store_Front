import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../../common/components/c_input";
import Button from "../../../../common/components/button";
import CSelect from "../../../../common/components/c_select";
import { getFormattedDateTime } from "../../../../common/utils/app.util";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { getBusniessDetailsAction, updateBusniessDetailsAction } from "../../../../app-redux/auth/authActions";
import { selectAuthError, selectLoginStatus } from "../../../../app-redux/auth/authSlice";
import { busniessInformationFormValidation } from "../../validation";


function BusinessInformation() {
  const dispatch =useAppDispatch();
  const getLoginStatus=useAppSelector(selectLoginStatus)
  let error = useAppSelector(selectAuthError);
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);
  const [messages, setMessages] = useState("");

  const formik = useFormik({
    initialValues: {
      currentUserId: "",
      businessId: "",
      name: "",
      legalStatus: "",
      registrationNo: "",
      dateOfRegistration: "",
      category:"",
      website: "",
      taxNumber: "",
      salesTaxRegisteredWith:"",
      salesTaxRegisterationNo: "",
      dateOfSalesTaxRegisteration:"",
    },
    validationSchema: busniessInformationFormValidation,
    onSubmit: (values) => {
      const model = {
        // currentUserId: values.currentUserId,
        // businessId:values.businessId,
        name: values.name,
        legalStatus: values.legalStatus,
        registrationNo: values.registrationNo,
        dateOfRegistration: values.dateOfRegistration,
        category: values.category,
        website: values.website,
        taxNumber: values.taxNumber,
        // newEmsalesTaxRegisteredWith: values.salesTaxRegisteredWith,
        // salesTaxRegisterationNo: values.salesTaxRegisterationNo,
        // dateOfSalesTaxRegisteration: values.dateOfSalesTaxRegisteration, 
      };
      console.log("model", model);
      // dispatch(updateBusniessDetailsAction(model))
    },
  });


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
      <div className=" row ">
        <div className="mb-3 col-xl-6">
          <label className="form-label">Business Name:</label>
          <CInput
            name="name"
            value={formik.values.name}
            placeholder="Name"
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
        <div className="mb-3 col-xl-6">
          <label className="form-label">Legal Status:</label>
          <CSelect
            id="legalStatus"
            name="legalStatus"
            value={formik.values.legalStatus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="select"
            defualt_option={"Please Select"}
            options={[
              { value: "Firm", lable: "Firm" },
              { value: "Company", lable: "Company" },
              { value: "Proprietorship", lable: "Proprietorship" }
            ]}
          />
        </div>

        <div className="mb-3 col-xl-6">
          <label className="form-label">Registration Number:</label>
          <CInput
            name="registrationNo"
            value={formik.values.registrationNo}
            placeholder="Registration"
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
          <label className="form-label">Date of Registration:</label>
          <CInput
            id="datepicker-default"
            name="dateOfRegistration"
            value={getFormattedDateTime(formik.values.dateOfRegistration, "YYYY-MM-DD")}
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

        <div className="mb-3 col-xl-6">
          <label className="form-label">Category:</label>
          <CSelect
            id="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="select"
            defualt_option={"Please Select"}
            options={[
              { value: "Chartered_accountants", lable: "Chartered Accountants" },
              { value: "Consultants", lable: "Consultants" },
              { value: "others ", lable: "others " }
            ]}
          />
        </div>
        <div className="mb-3 col-xl-6">
          <label className="form-label">Website:</label>
          <CInput
            name="website"
            value={formik.values.website}
            placeholder="website"
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

        <div className="mb-3 col-xl-6">
          <label className="form-label">National Tax Number (NTN):</label>
          <CInput
            name="taxNumber"
            value={formik.values.taxNumber}
            placeholder="Tax Number"
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

        {/* <div className="form-label text-indigo">Sales Tax Registration </div>
        <div className="mb-3 col-xl-2">
          <label className="form-check">
            <CInput
              name="salesTaxRegisteredWith"
              value={"FBR"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              type="radio"
            />
            <span className="form-check-label">FBR</span>
          </label>
        </div>

        <div className="mb-3 col-xl-2">
          <label className="form-check">
            <CInput
              name="salesTaxRegisteredWith"
              value={"PRA"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              type="radio"
            />
            <span className="form-check-label">PRA</span>
          </label>
        </div>

        <div className="mb-3 col-xl-2">
          <label className="form-check">
            <CInput
              name="salesTaxRegisteredWith"
              value={"SRB"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              type="radio"
            />
            <span className="form-check-label">SRB</span>
          </label>
        </div>

        <div className="mb-3 col-xl-2">
          <label className="form-check">
            <CInput
              name="salesTaxRegisteredWith"
              value={"KPRA"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              type="radio"
            />
            <span className="form-check-label">KPRA</span>
          </label>
        </div>

        <div className="mb-3 col-xl-2">
          <label className="form-check">
            <CInput
              name="salesTaxRegisteredWith"
              value={"BRA"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-check-input"
              type="radio"
            />
            <span className="form-check-label">BRA</span>
          </label>
        </div>
        <div className="mb-3 col-xl-6">
          <label className="form-label">STRN:</label>
          <CInput
            name="salesTaxRegisterationNo"
            value={formik.values.salesTaxRegisterationNo}
            placeholder="STRN"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
        </div>

        <div className=" mb-3 col-xl-6">
          <label className="form-label">Date of Registration:</label>
          <CInput
            id="datepicker-default"
            name="dateOfSalesTaxRegisteration"
            value={getFormattedDateTime(formik.values.dateOfSalesTaxRegisteration, "YYYY-MM-DD")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="date"
          />
        </div> */}

        <div className="d-xl-flex justify-content-end mt-3">
          <Button type="submit" color="btn-info" name="Update" />
        </div>
      </div>
    </form>
  );
}

export default BusinessInformation;
