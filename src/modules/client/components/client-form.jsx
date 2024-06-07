import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clientGeneralInformationAction, getClientGeneralInformationAction } from "../../../app-redux/client/clientActions";
import { resetgeneralInformationState, selectClientError, selectClientStatus, selectgeneralInformationStatus, selectgetGeneralInformationStatus } from "../../../app-redux/client/clientSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import day from "../../../assets/options/day.json";
import industries from "../../../assets/options/industries.json";
import month from "../../../assets/options/month.json";
import Button from "../../../common/components/button";
import CInput from "../../../common/components/c_input";
import CSelect from "../../../common/components/c_select";
import CLoader from "../../../common/components/loader";
import { get_industries_sub_categories } from "../../../common/utils/app.options";
import { getFormattedDateTime } from "../../../common/utils/app.util";
import { generalInformationFormValidation } from "../validation";

const InitValues = {
  clientId: "0",
  clientName: "",
  legalStatus: "",
  ownershipStatus: "",
  website: "",
  industry: "",
  principalActivities: "",
  financialYearEnd: "",
  officeAddress: "",
  phoneNumber: "",
  dateOfIncorporation: null,
  incorporationNumber: "",
  associatedCompany: "",
  holdingCompany: "",
  isPublicInterestEntity: "",
  ntnNumber: "",
  salesTaxRegistration: "",
  authorizeShareCapital: "",
  paidUpShareCapital: "",
  pricePerShare: "",
  month: "",
  day: "",
  year: ""
}
function ClientForm({ clientId }) {
  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState(null);
  const [isFormik, setIsFormik] = useState(false);
  const [Value, setValue] = useState();
  const [loader, showLoader] = useState(false)
  const notify = () => toast.success("Client Updated!");

  const navigate = useNavigate();
  const getClientGeneralInformationStatus = useAppSelector(selectgetGeneralInformationStatus)

  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  const generalInformationStatus = useAppSelector(selectgeneralInformationStatus)
  const clientStatus = useAppSelector(selectClientStatus)
  const error = useAppSelector(selectClientError);

  const Reset = () => {
    formik.setValues({ ...getClientGeneralInformationStatus.data, data: clientId })
  }


  const formik = useFormik({
    initialValues: InitValues,
    validationSchema: generalInformationFormValidation,
    onSubmit: (values) => {
      const model = {
        clientId: values.clientId,
        clientName: values.clientName,
        legalStatus: values.legalStatus,
        ownership: values.ownershipStatus,
        website: values.website,
        industry: values.industry,
        principalActivities: values.principalActivities,
        financialYearEnd: values.month + " " + values.date,
        registeredOfficeAddress: values.officeAddress,
        telephoneNumber: values.phoneNumber,
        dateOfIncorporation: values.dateOfIncorporation,
        incorporationNumber: values.incorporationNumber,
        associatedCompany: values.associatedCompany,
        holdingCompany: values.holdingCompany,
        isPublicInterestEntity: Boolean(values.isPublicInterestEntity),
        ntn: values.ntnNumber,
        salesTaxRegistration: values.salesTaxRegistration,
        authorizeShareCapital: values.authorizeShareCapital,
        paidUpShareCapital: values.paidUpShareCapital,
        pricePerShare: values.pricePerShare,
      };
      console.log("model", model);
      dispatch(clientGeneralInformationAction(model));
    },
  });

  useEffect(() => {
    if (clientId && clientId) {
      dispatch(getClientGeneralInformationAction(clientId));

    }
  }, [])

  useEffect(() => {
    if (clientStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [clientStatus]);


  useEffect(() => {
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    formik.setFieldValue("year", year)

  }, [getClientGeneralInformationStatus])



  useEffect(() => {
    if (generalInformationStatus && generalInformationStatus.status === true) {
      notify();
      dispatch(resetgeneralInformationState())
    }
  }, [generalInformationStatus])


  useEffect(() => {
    console.log("getSuccess", getClientGeneralInformationStatus);
    if (clientId && (getClientGeneralInformationStatus && getClientGeneralInformationStatus.data)) {
      console.log("getClientGeneralInformationStatus", getClientGeneralInformationStatus);
      let text = formik.values.financialYearEnd;
      formik.setValues({ ...getClientGeneralInformationStatus.data, clientId: clientId, month: text })
      dispatch(resetgeneralInformationState())
    }
  }, [getClientGeneralInformationStatus]);


  useEffect(() => {
    setValue(formik.values.industry)
  }, [formik.values.industry])

  useEffect(() => {
    console.log("sAVE", generalInformationStatus)
    if (generalInformationStatus && generalInformationStatus.data) {
      navigate("/client/edit/" + generalInformationStatus.data);
    }
  }, [generalInformationStatus]);

  useEffect(() => {
    console.log("error", error)
  }, [error]);

  useEffect(() => {
    if (error && error.error) {
      let err = error.error;
      if (err && (typeof err) == "string") {
        setMessages(null);
        setMessage({ error_msg: err, status: "danger" });
        toast.error("Error")
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
    <div className='card-body'>
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
        <div className=" row ">
          <div className="mb-3 col-xl-6">
            <label className="form-label">Client Name:</label>
            <CInput
              id="clientName"
              name="clientName"
              value={formik.values.clientName}
              placeholder="Client Name"
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
            <label className="form-label">Legal Status</label>
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
                { value: "Sole Owner", lable: "Sole Owner" },
                { value: "Partnership", lable: "Partnership" },
                { value: "Joint Venture", lable: "Joint Venture" },
                { value: "Private Corporation", lable: "Private Corporation" },
                { value: "Public Corporation", lable: "Public Corporation" },
                { value: "Not For Profit", lable: "Not For Profit" }
              ]}
            />
          </div>
          <div className="mb-3 col-xl-6">
            <label className="form-label">Ownership Structure:</label>
            <CSelect
              id="ownershipStatus"
              name="ownershipStatus"
              value={formik.values.ownershipStatus}
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
                { value: "Chief Executive Officer", lable: "Chief Executive Officer" },
                { value: "Director", lable: "Director" },
              ]}
            />
          </div>
          <div className="mb-3 col-xl-6">
            <label className="form-label">Website:</label>
            <CInput
              id="website"
              name="website"
              value={formik.values.website}
              placeholder="Website"
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
            <label className="form-label">Industry:</label>
            <CSelect
              id="industry"
              name="industry"
              value={formik.values.industry}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="select"
              defualt_option={"Please Select"}
              options={industries}
              option_lable="industry"
            />
          </div>
          <div className="mb-3 col-xl-6">
            <label className="form-label">Principal Activities:</label>
            <CSelect
              id="principalActivities"
              name="principalActivities"
              value={formik.values.principalActivities}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="select"
              defualt_option={"Please Select"}
              options={get_industries_sub_categories(Value)}
              option_lable="name"
              option_value="name"
            />
          </div>

          <div className="mb-3 col-xl-6">
            <label className="form-label">Financial Year End:</label>
            <div className="row">
              <div className="col-xl-9">
                <CSelect
                  id="month"
                  name="month"
                  value={formik.values.month}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    isFormik
                      ? { type: "formik", error: formik && formik }
                      : { type: "server", error: messages }
                  }
                  type="select"
                  defualt_option={"Month"}
                  options={month}
                />

              </div>

              <div className="col-xl-3">
                <CSelect
                  id="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    isFormik
                      ? { type: "formik", error: formik && formik }
                      : { type: "server", error: messages }
                  }
                  type="select"
                  defualt_option={"Date"}
                  options={day}
                />

              </div>
            </div>
          </div>


          <div className="mb-3 col-xl-6">
            <label className="form-label">Registered Office Address:</label>
            <CInput
              id="officeAddress"
              name="officeAddress"
              value={formik.values.officeAddress}
              placeholder="Registered Office Address"
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
            <label className="form-label">Telephone Number:</label>
            <CInput
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              placeholder="Telephone Number"
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
            <label className="form-label">Date of Incorporation:</label>
            <CInput
              id="dateOfIncorporation"
              name="dateOfIncorporation"
              value={getFormattedDateTime(formik.values.dateOfIncorporation, "YYYY-MM-DD")}
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
            <label className="form-label">Incorporation Number:</label>
            <CInput
              id="incorporationNumber"
              name="incorporationNumber"
              value={formik.values.incorporationNumber}
              placeholder="Incorporation Number"
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
            <label className="form-label">Public Interest Entity:</label>
            <CSelect
              id="isPublicInterestEntity"
              name="isPublicInterestEntity"
              value={formik.values.isPublicInterestEntity}
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
                { value: true, lable: "Yes" },
                { value: false, lable: "No" },

              ]}
            />
          </div>

          <div className="mb-3 col-xl-6">
            <label className="form-label">National Tax Number (NTN):</label>
            <CInput
              id="ntnNumber"
              name="ntnNumber"
              value={formik.values.ntnNumber}
              placeholder="NTN Number"
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
            <label className="form-label">Authorized Share Capital:</label>
            <CInput
              id="authorizeShareCapital"
              name="authorizeShareCapital"
              value={formik.values.authorizeShareCapital}
              placeholder="Authorized Share Capital"
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
            <label className="form-label">Paid-up Share Capital:</label>
            <CInput
              id="paidUpShareCapital"
              name="paidUpShareCapital"
              value={formik.values.paidUpShareCapital}
              placeholder="Paid-up Share Capital"
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
            <label className="form-label">Price Per Share:</label>
            <CInput
              id="pricePerShare"
              name="pricePerShare"
              value={formik.values.pricePerShare}
              placeholder="Price Per Share"
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
            {/* {clientId ?
            <button type="button" className="ms-2 btn btn-light btn- mb-2" onClick={Reset}>
              Reset
            </button>
            : <Button type="Reset" color="btn btn-light w-10" name="Reset" />
          } */}
            {clientId ?
              <Button type="submit" color="btn-info" name="Update" />
              :
              <Button type="submit" color="btn-info" name="Save" />

            }
          </div>
        </div>
        <CLoader show={loader} />
      </form>
    </div>
  );
}

export default ClientForm;
