import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../../common/components/c_input";
import Button from "../../../../common/components/button";
import CSelect from "../../../../common/components/c_select";
import { getFormattedDateTime } from "../../../../common/utils/app.util";
import { busniessOfficeFormValidation } from "../../validation";
import { selectAuthError } from "../../../../app-redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { createBusinessLocationAction, getBusinessLocationByIdAction, updateBusinessLocationAction } from "../../../../app-redux/business/businessActions";
import city from "../../../../assets/options/pk.json"
import CLoader from "../../../../common/components/loader";
import { resetgetBusinessLocationByIdState, selectbusniessStatus, selectgetBusinessLocationByIdStatus } from "../../../../app-redux/business/businessSlice";



function BusinessOffices({ businessId }) {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);
  const [loader, showLoader] = useState(false)
  let error = useAppSelector(selectAuthError);
  const dispatch = useAppDispatch()
  const businessStatus = useAppSelector(selectbusniessStatus)
  const getBusinessByIdStatus = useAppSelector(selectgetBusinessLocationByIdStatus)

  const formik = useFormik({
    initialValues: {
      businessId: "",
      name: "",
      province: "",
      city: "",
      address: "",
      phone: "",
      email: "",
      inchargeName: "",
      inchargeDesignation: "",
      inchargePhone: "",
      inchargeEmail: "",
    },
    // validationSchema: busniessOfficeFormValidation,
    onSubmit: (values) => {
      const model = {
        BusinessLocationId: values.businessId,
        name: values.name,
        province: values.province,
        city: values.city,
        address: values.address,
        phone: values.phone,
        email: values.email,
        inchargeName: values.inchargeName,
        inchargeDesignation: values.inchargeDesignation,
        inchargePhone: values.inchargePhone,
        inchargeEmail: values.inchargeEmail,

      };
      console.log("model", model);
      {
        businessId ?
          dispatch(updateBusinessLocationAction(model))

          :
          dispatch(createBusinessLocationAction(model))

      }
    },
  });

 

  useEffect(() => {
    if (error && error.error) {
      let err = error.error;
      if (err && (typeof err) == "string") {
        setMessages(null);
        setMessages({ error_msg: err, status: "danger" });
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
    if (businessStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [businessStatus]);


  useEffect(() => {
    if (businessId > 0) {
      dispatch(getBusinessLocationByIdAction(businessId))
    }

  }, [])

  useEffect(() => {
    if (businessId && getBusinessByIdStatus && getBusinessByIdStatus.data) {
      formik.setValues({ ...getBusinessByIdStatus.data, businessId: businessId })    
    }
    else{
      dispatch(resetgetBusinessLocationByIdState())
    }
  }, [getBusinessByIdStatus])


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" row ">
        <div className="mb-3 col-xl-12">
          <label className="form-label">Location Name:</label>
          <CInput
            id="name"
            name="name"
            value={formik.values.name}
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
          <label className="form-label">Province:</label>
          <CSelect
            id="province"
            name="province"
            value={formik.values.province}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="select"
            defualt_option={"Please Select"}
            options={city}
            option_lable="province"
            option_value="province"
          />
        </div>

        <div className="mb-3 col-xl-6">
          <label className="form-label">City:</label>
          <CSelect
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="select"
            defualt_option={"Please Select"}
            options={city}
            option_lable="city"
            option_value="city"

          />
        </div>

        <div className="mb-3 col-xl-12">
          <label className="form-label">Address:</label>
          <CInput
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
            type="textarea"
          />
        </div>
        <div className="mb-3 col-xl-6">
          <label className="form-label">Phone number:</label>
          <CInput
            name="phone"
            value={formik.values.phone}
            placeholder="Number"
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
          <label className="form-label">Office Email:</label>
          <CInput
            name="email"
            value={formik.values.email}
            placeholder="email"
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

        <div className="form-label text-indigo">Office In-Charge </div>
        <div className="mb-3 col-xl-3">
          <label className="form-label">Name:</label>
          <CInput
            name="inchargeName"
            value={formik.values.inchargeName}
            placeholder="Incharge Name"
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

        <div className="mb-3 col-xl-3">
          <label className="form-label">Designation:</label>
          <CInput
            name="inchargeDesignation"
            value={formik.values.inchargeDesignation}
            placeholder="Incharge Designation"
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

        <div className="mb-3 col-xl-3">
          <label className="form-label">Contact:</label>
          <CInput
            name="inchargePhone"
            value={formik.values.inchargePhone}
            placeholder="Incharge Contact"
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

        <div className="mb-3 col-xl-3">
          <label className="form-label">Email:</label>
          <CInput
            name="inchargeEmail"
            value={formik.values.inchargeEmail}
            placeholder="Incharge Email"
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
          <Button type="submit" color="btn-info" name="Update" />
        </div>
      </div>
    </form>
  );
}

export default BusinessOffices;
