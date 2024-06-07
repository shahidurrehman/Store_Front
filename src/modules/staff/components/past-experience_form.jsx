import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import {
  selectgetPastExperienceStatus,
  selectpastExperienceStatus,
  selectStaffError,
} from "../../../app-redux/staff/staffSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { selectUser } from "../../../app-redux/auth/authSlice";
import {
  deleteRowFromArry,
  getDateDifference,
  getFormattedDateTime,
  Industries,
} from "../../../common/utils/app.util";
import IconMinus from "../../../assets/icons/minus";
import IconPlus from "../../../assets/icons/plus";
import {
  deletePastExperienceAction,
  updatePastExperienceAction,
} from "../../../app-redux/staff/staffActions";
import { useParams } from "react-router-dom";
import IconCheck from "../../../assets/icons/check";
import IconTrash from "../../../assets/icons/trash";
import { pastExperienceFormValidation } from "../validation";

const InitPastExperience = {
  pastExperienceId: 0,
  userId: "",
  employer: "",
  year_Period: "",
  from: "",
  to: "",
  reasonForLeaving: "",
};

function PastExperienceForm({ values, id, index, deleteRow, arrayLength }) {
  const { staffId } = useParams();
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [other, setOther] = useState(false);

  const [show, setShow] = useState(false);

  const [inputList, setinputList] = useState();
  const dispatch = useAppDispatch();
  const userdata = useAppSelector(selectUser);
  const pastExperienceStatus = useAppSelector(selectpastExperienceStatus);
  const getPastExperienceStatus = useAppSelector(selectgetPastExperienceStatus);
  const error = useAppSelector(selectStaffError);

  const formik = useFormik({
    initialValues: InitPastExperience,
    validationSchema: pastExperienceFormValidation,
    onSubmit: (values) => {
      const model = {
        pastExperienceId: values.pastExperienceId,
        userId: staffId,
        employer: values.employer,
        from: values.from == "" ? null : values.from,
        to: values.to == "" ? null : values.to,
        reasonForLeaving: values.reasonForLeaving,
      };
      console.log("model", model);
      dispatch(updatePastExperienceAction(model));
    },
  });

  const setDeleted = (id) => {
    const deleted = formik.values.deleted;
    let str = "";
    if (parseInt(id) > 0) {
      if (deleted === "") {
        str = id;
      } else {
        str = deleted.concat(",", id);
      }
      formik.setFieldValue("deleted", str);
    }
  };

  const handleOther = (e) => {
    e.preventDefault();
    if (other === false) {
      setOther(true);
    } else {
      setOther(false);
    }
  };

  useEffect(() => {
    formik.setValues({ ...values });
  }, [getPastExperienceStatus]);

  useEffect(() => {
    console.log("success", pastExperienceStatus);
  }, [pastExperienceStatus]);

  useEffect(() => {
    console.log("error", error);
  }, [error]);

  useEffect(() => {
    if (userdata && userdata.id) {
      formik.setFieldValue("id", userdata.id);
    }
  }, [userdata]);

  useEffect(() => {
    const diff = getDateDifference(formik.values.from, formik.values.to);
    formik.setFieldValue("year_Period", diff);
  }, [formik.values.from, formik.values.to]);

  useEffect(() => {
    if (error && error.error) {
      let err = error.error;
      if (err && typeof err == "string") {
        setMessages(null);
        setIsFormik(false);
      }
    } else setMessages(null);
  }, [error]);

  useEffect(() => {
    setIsFormik(true);
  }, [formik.errors]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="col-12 text-end">
        <span
          className=" col-xl-6 text-indigo bg-transparent cursor-pointer"
          onClick={formik.handleSubmit}
        >
          <IconCheck />
        </span>
        {arrayLength > 1 && (
          <span
            className="cursor-pointer text-end"
            onClick={() => deleteRow(id, index)}
          >
            <IconTrash />
          </span>
        )}
      </div>

      <div className="col-12">
        <div className=" row ">
          <div className="mb-3 col-xl-6">
            <label className="form-label">Employer: *</label>
            <CInput
              id="employer"
              name="employer"
              value={formik.values.employer}
              placeholder="Employer"
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
            <label className="form-label">Reasons For Leaving: *</label>
            <CInput
              id="reasonForLeaving"
              name="reasonForLeaving"
              value={formik.values.reasonForLeaving}
              placeholder="Reasons for leaving"
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
        </div>

        <div className="row">
          <div className=" mb-3 col-xl-4">
            <label className="form-label">From:</label>
            <CInput
              id="from"
              name="from"
              value={getFormattedDateTime(formik.values.from, "YYYY-MM-DD")}
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

          <div className=" mb-3 col-xl-4">
            <label className="form-label">To:</label>
            <CInput
              id="to"
              name="to"
              value={getFormattedDateTime(formik.values.to, "YYYY-MM-DD")}
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

          <div className=" mb-3 col-xl-4">
            <label className="form-label">Period In Years:</label>
            <CInput
              id="year_Period"
              name="year_Period"
              value={formik.values.year_Period}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={true}
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="text"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
export default PastExperienceForm;
