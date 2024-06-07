import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import { resetdeletPastExperienceAction, resetgetPastExperienceAction, resetpastExperienceAction, selectDeletePastExperienceStatus, selectgetPastExperienceStatus, selectpastExperienceStatus, selectStaffError } from "../../../app-redux/staff/staffSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { selectUser } from "../../../app-redux/auth/authSlice";
import { deleteRowFromArry, Industries } from "../../../common/utils/app.util";
import IconMinus from "../../../assets/icons/minus";
import IconPlus from "../../../assets/icons/plus";
import PastExperienceForm from "./past-experience_form";
import RemoveableCard from "../../../common/components/removeable_card";
import { deletePastExperienceAction, getPastExperienceAction } from "../../../app-redux/staff/staffActions";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CModel from "../../../common/components/model";
import Confirmation from "../../../common/utils/Confirmation";

const InitPastExperience = {
  pastExperienceId: 0,
  employer: "",
  year_Period: "",
  from: "",
  to: "",
  reasonForLeaving: "",
}

function PastExperience({ handleNext }) {

  const { staffId } = useParams();
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [other, setOther] = useState(false);

  const [show, setShow] = useState(false);

  const [delId, setDelId] = useState(null);
  const [index, setIndex] = useState(null);

  const userdata = useAppSelector(selectUser);
  const pastExperienceStatus = useAppSelector(selectpastExperienceStatus);
  const error = useAppSelector(selectStaffError);
  const getPastExperienceStatus = useAppSelector(selectgetPastExperienceStatus);
  const deletePastExpericeStatus =useAppSelector(selectDeletePastExperienceStatus)
  const notify = () => toast.success("Information Updated!");
  const notify2 = () => toast.warn("Past experience deleted")


  const formik = useFormik({
    initialValues: {
      userId: 0,
      deleted: "",
      pastExperience: []
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        userId: values.userId,
        deleted: values.deleted,
        pastExperience: values.pastExperience

      };
      console.log("model", model);
      // dispatch(loginAction(model));
    },
  });

  const setDeleted = (id) => {
    const deleted = formik.values.deleted;
    let str = ""
    if (parseInt(id) > 0) {
      if (deleted === "") {
        str = id;
      } else {
        str = deleted.concat(",", id);
      }
      formik.setFieldValue("deleted", str);
    }
  };

  const addRow = () => {
    let pastExperience = formik.values.pastExperience;
    formik.setFieldValue("pastExperience", [...pastExperience, InitPastExperience]);
  };

  const deleteRow = (id, index) => {
    setShow(true);
    setDelId(id)
    setIndex(index)
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
    if (staffId && staffId) {
      dispatch(getPastExperienceAction(staffId));
    }
  }, [staffId]);


  function handleSet() {
    const { pastExperience } = formik.values;
    // setDeleted(id);
    Object.freeze(pastExperience)
    const obj = [...pastExperience]
    let remainingArray = deleteRowFromArry(obj, index, 1);
    formik.setFieldValue("pastExperience", [...remainingArray]);
    dispatch(deletePastExperienceAction(delId))
  }

  const handleClose = () => {
    setShow(false);
  };


  useEffect(() => {
    console.log("success", pastExperienceStatus)
  }, [pastExperienceStatus]);

  useEffect(() => {
    console.log("getsuccess", getPastExperienceStatus)
  }, [getPastExperienceStatus]);

  useEffect(() => {
    console.log("getsuccess", getPastExperienceStatus);
    if (getPastExperienceStatus && getPastExperienceStatus.data) {
      formik.setValues({ pastExperience: getPastExperienceStatus.data, userId: staffId })
      if (getPastExperienceStatus && getPastExperienceStatus.data < 1) {
        formik.setFieldValue("pastExperience", [InitPastExperience])
        console.log("Length", formik.values.pastExperience.length);
      }
      dispatch(resetgetPastExperienceAction())
    }
  }, [getPastExperienceStatus]);


  useEffect(() => {
    if (pastExperienceStatus && pastExperienceStatus.status === true) {
      dispatch(resetpastExperienceAction())
      notify()
    }
    if (deletePastExpericeStatus && deletePastExpericeStatus.status === true) {
      dispatch(resetdeletPastExperienceAction())
      setShow(false)
      notify2()
    }

  }, [pastExperienceStatus, deletePastExpericeStatus]);



  useEffect(() => {
    console.log("error", error)
  }, [error]);

  useEffect(() => {
    if (userdata && userdata.id) {
      formik.setFieldValue("id", userdata.id)
    }
  }, [userdata]);

  return (
    <>
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

      {formik.values.pastExperience.map((item, i) =>

        <RemoveableCard
          component={<PastExperienceForm values={item} id={item.pastExperienceId} index={i} deleteRow={deleteRow} arrayLength={formik.values.pastExperience.length} />}
          id={item.pastExperienceId}
          arrayLength={formik.values.pastExperience.length}
          index={i}
          addRow={addRow}
          deleteRow={deleteRow}
          name={"Add Past Experience"}
        />
      )}


      {show && (
        <CModel
          show={show}
          handleClose={handleClose}
          handleClick={handleSet}
          component={<Confirmation />}
          modalSize="modal-sm"
          button_ok_text="Delete"
          button_close_text="Cancel"
          showSubmitButton={true}
          submitButtonClass="danger"
        />
      )}

    </>

  );

}
export default PastExperience;
