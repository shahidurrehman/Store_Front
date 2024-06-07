import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { clientContactInformationAction, getClientContactInformationAction, getContactByIdAction } from "../../../app-redux/client/clientActions";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { resetcontactInformationState, resetgetContactByIdStats, selectClientError, selectClientStatus, selectcontactInformationStatus, selectgetClientContactInformationStatus, selectgetContactByIdStatus } from "../../../app-redux/client/clientSlice";
import { contactFormValidation } from "../validation";
import CLoader from "../../../common/components/loader";
import { toast, ToastContainer } from "react-toastify";
import IconAddPlus from "../../../assets/icons/add_plus";
import { useParams } from "react-router-dom";

const contactPhoneItems = [

]

function ClientContact({ id }) {
  const [messages, setMessages] = useState("");
  const [message, setMessage] = useState(null);
  const [loader, showLoader] = useState(false)
  const [isFormik, setIsFormik] = useState(false);
  const clientStatus = useAppSelector(selectClientStatus)
  const getContactStatus = useAppSelector(selectgetContactByIdStatus)

  const notify = () => toast.success("Contact Updated!");

  const dispatch = useAppDispatch();
  const { clientId } = useParams();

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      clientContactId: 0,
      clientId: "",
      clientContactName: "",
      contactDesignation: "",
      contactEmail: "",
      contactPhone: [contactPhoneItems],
    },
    validationSchema: contactFormValidation,
    onSubmit: (values) => {
      const model = {
        clientContactId: values.clientContactId,
        clientId: values.clientId,
        clientContactName: values.clientContactName,
        contactDesignation: values.contactDesignation,
        contactEmail: values.contactEmail,
        contactPhone: values.contactPhone.join(),

      };
      console.log("model", model);
      dispatch(clientContactInformationAction(model));
    },

  });


  useEffect(() => {
    if (id > 0) {
      dispatch(getContactByIdAction(id))
    }

  }, [id])

  useEffect(() => {
    if (getContactStatus && getContactStatus.data) {
      console.log("getContactStatus", getContactStatus.data);
      formik.setValues({ ...getContactStatus.data, contactPhone: getContactStatus.data.contactPhone.split(','), clientContactId: id })
    }
    dispatch(resetgetContactByIdStats())
  }, [getContactStatus])

  useEffect(() => {
    formik.setFieldValue("clientId", clientId)
  }, [])

  const addRow = () => {
    const { contactPhone } = formik.values;
    formik.setFieldValue("contactPhone", [...contactPhone, contactPhoneItems]);
  };


  useEffect(() => {
    if (clientStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [clientStatus]);



  return (
    <form onSubmit={formik.handleSubmit}>
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



      <div className=" row ">
        {id?
          <h2 className="text-indigo text-uppercase text-center font-weight-bold ">Update Client Contact</h2>
          :
          <h2 className="text-indigo text-uppercase text-center font-weight-bold ">Add Client Contact</h2>
        }

        <div className="mb-3 col-xl-12">
          <label className="form-label">Contact Name:</label>
          <CInput
            name="clientContactName"
            value={formik.values.clientContactName}
            placeholder="Contact Name"
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
          <label className="form-label">Contact Designation:</label>
          <CInput
            name="contactDesignation"
            value={formik.values.contactDesignation}
            placeholder="Contact Designation"
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
          <label className="form-label">Contact Email:</label>
          <CInput
            name="contactEmail"
            value={formik.values.contactEmail}
            placeholder="Contact Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="email"
          />
        </div>


        <div className=" row-xl-12 ">
          {formik.values.contactPhone.map((item, i) =>
            <div className="mb-3 col-xl-12">
              <label className="form-label">Phone Number {i + 1}:</label>
              <CInput
                name={`contactPhone[${i}]`}
                value={formik.values.contactPhone[i]}
                placeholder="Phone"
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
          )}
          <span className=" col-xl-6 text-end text-indigo bg-transparent cursor-pointer" onClick={addRow}>
            <IconAddPlus /> Add Phone Number
          </span>



          <div className="d-xl-flex justify-content-end mt-3">
            <Button name="Save" type="submit" color="btn-info" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ClientContact;;
