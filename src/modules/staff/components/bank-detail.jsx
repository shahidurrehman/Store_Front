import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app-redux/hooks";
import { resetbankDetailAction, selectbankDetailStatus, selectgetBankAccountDetailsStatus, selectStaffError } from "../../../app-redux/staff/staffSlice";
import { bankDetailAction, getBankAccountDetailsAction } from "../../../app-redux/staff/staffActions";
import { bankDetailFormValidation } from "../validation";
import { toast, ToastContainer } from "react-toastify";

function BankDetail({ handleNext, staffId }) {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const getBankAccountDetailsStatus = useAppSelector(selectgetBankAccountDetailsStatus)

  // const [show, setShow] = useState(false);
  // const userdata = useAppSelector(selectUser);

  const bankDetailStatus = useAppSelector(selectbankDetailStatus);
  const error = useAppSelector(selectStaffError);
  const notify = () => toast.success("Bank Account Details Updated!");


  const formik = useFormik({
    initialValues: {
      userId: 0,
      id: 0,
      name: "",
      branch: "",
      accountTitle: "",
      accountNumber: "",
    },
    validationSchema: bankDetailFormValidation,
    onSubmit: (values) => {
      const model = {
          userId: values.userId,
        id: values.id,
        name: values.name,
        branch: values.branch,
        accountTitle: values.accountTitle,
        accountNumber: values.accountNumber,
      };
      console.log("model", model);
      console.log("values", values);
      dispatch(bankDetailAction(model));
    },
  });
  useEffect(() => {
    // let id = getStaffId();
    console.log("id", staffId)
    if (staffId && staffId) {
      dispatch(getBankAccountDetailsAction(staffId));
    }
  }, [staffId])

  useEffect(() => {
    // console.log("getsuccess", getBankAccountDetailsStatus.data);
    if (getBankAccountDetailsStatus && getBankAccountDetailsStatus.data) {
      console.log("getBankAccountDetailsStatus", getBankAccountDetailsStatus);
      formik.setValues({ ...getBankAccountDetailsStatus.data, userId: staffId })
    } else {
      formik.setValues({ userId: staffId })
    }
  }, [getBankAccountDetailsStatus]);



  useEffect(() => {
    console.log("success", bankDetailStatus)
    if (bankDetailStatus && bankDetailStatus.status === true) {
      dispatch(resetbankDetailAction());
      notify()
    }
  }, [bankDetailStatus]);


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
        <div className="mb-3 col-xl-6">
          <label className="form-label">Bank Name:</label>
          <CInput
            id="name"
            name="name"
            value={formik.values.name}
            placeholder="Bank Name"
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
          <label className="form-label">Branch Name:</label>
          <CInput
            id="branch"
            name="branch"
            value={formik.values.branch}
            placeholder="Branch Name"
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
          <label className="form-label">Account Title:</label>
          <CInput
            id="accountTitle"
            name="accountTitle"
            value={formik.values.accountTitle}
            placeholder="Account Title"
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
          <label className="form-label">Account Number:</label>
          <CInput
            id="accountNumber"
            name="accountNumber"
            value={formik.values.accountNumber}
            placeholder="Account Number"
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

export default BankDetail;
