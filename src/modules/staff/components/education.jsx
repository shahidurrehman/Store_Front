import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import CSelect from "../../../common/components/c_select";
import Button from "../../../common/components/button";
import { resetdeleteEducationAction, reseteducationAction, resetgetEducationDetailsAction, selectDeleteEducationStatus, selecteducationStatus, selectgetEducationDetailsStatus, selectStaffError } from "../../../app-redux/staff/staffSlice";
import { useAppSelector } from "../../../app-redux/hooks";
import { selectUser } from "../../../app-redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { deleteEducationAction, educationAction, getEducationDetailsAction } from "../../../app-redux/staff/staffActions";
import { educationFormValidation } from "../edit/validation";
import IconPlus from "../../../assets/icons/plus";
import IconMinus from "../../../assets/icons/minus";
import { deleteRowFromArry } from "../../../common/utils/app.util";
import EducationForm from "./education_form ";
import RemoveableCard from "../../../common/components/removeable_card";
import { toast, ToastContainer } from "react-toastify";
import CModel from "../../../common/components/model";
import Confirmation from "../../../common/utils/Confirmation";

const InitEducation = {
  educationId: 0,
  userId: "",
  examination: "",
  yearOfpassing: "",
  grade: "",
  university: "",
  institute: "",
};

function Education({ staffId }) {

  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [other, setOther] = useState(false);
  const [index,setIndex] =useState(null)
  const[delId,setDelId] =useState(null)
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const getEducationDetailsStatus = useAppSelector(selectgetEducationDetailsStatus)
  const deleteEducationStatus = useAppSelector(selectDeleteEducationStatus)

  const userdata = useAppSelector(selectUser);
  const educationStatus = useAppSelector(selecteducationStatus);
  const error = useAppSelector(selectStaffError);
  const notify = () => toast.success("Education Details Added!");
  const notify2 = () => toast.warn("Education Details Deleted")

  const formik = useFormik({
    initialValues: {
      userId: 0,
      deleted: "",
      education: []
    },
    validationSchema: educationFormValidation,
    onSubmit: (values) => {
      const model = {
        userId: values.userId,
        deleted: values.deleted,
        education: values.education
      };
      console.log("model", model);
      // dispatch(educationAction(model));
    },
  });


  function handleSet() {
    console.log("data",delId,index);
    const { education } = formik.values;
    education.splice(index, 1);
    formik.setFieldValue("education", [...education]);
    dispatch(deleteEducationAction(delId))
  }

  const handleClose = () => {
    setShow(false);
  };

  // const setDeleted = (id) => {
  //   const deleted = formik.values.deleted;
  //   let str = ""
  //   if (parseInt(id) > 0) {
  //     if (deleted === "") {
  //       str = id;
  //     } else {
  //       str = deleted.concat(",", id);
  //     }
  //     formik.setFieldValue("deleted", str);
  //   }
  // };

  const addRow = () => {
    const { education } = formik.values;
    formik.setFieldValue("education", [...education, InitEducation]);
  };


  const deleteRow = (id, index) => {
    setShow(true)
    setDelId(id)
    setIndex(index)
    // handleSet(id,index)
    // const { education } = formik.values;
    // education.splice(index, 1);
    // formik.setFieldValue("education", [...education]);
    // console.log("id", id);
    // dispatch(deleteEducationAction(id))
  };


  useEffect(() => {
    if (staffId && staffId) {
      dispatch(getEducationDetailsAction(staffId));
    }
  }, [staffId]);


  useEffect(() => {

    console.log("getsuccess", getEducationDetailsStatus);
    if (getEducationDetailsStatus && getEducationDetailsStatus.data) {
      formik.setValues({ education: [...getEducationDetailsStatus.data], userId: staffId })
      if (getEducationDetailsStatus && getEducationDetailsStatus.data.length < 1) {
        formik.setFieldValue("education", [InitEducation])
        console.log("Length", formik.values.education.length);
      }
      dispatch(resetgetEducationDetailsAction())
    }
  }, [getEducationDetailsStatus]);


  useEffect(() => {
    if (educationStatus && educationStatus.status === true) {
      dispatch(reseteducationAction())
      notify()
    }
    if (deleteEducationStatus && deleteEducationStatus.status === true) {
      dispatch(resetdeleteEducationAction())
      setShow(false)
      notify2()
    }

  }, [educationStatus, deleteEducationStatus]);

  useEffect(() => {
    console.log("error", error)
  }, [error]);

  // useEffect(() => {
  //   const { education } = formik.values;
  //   if (formik.values.education.length < 1) {
  //     formik.setFieldValue("education", [...education, InitEducation])
  //     console.log("Length", formik.values.education.length);
  //   }
  // }, [formik.values])


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
      {formik.values.education.map((item, i) =>
        <RemoveableCard
          component={<EducationForm values={item} id={item.educationId} index={i} deleteRow={deleteRow} arrayLength={formik.values.education.length} />}
          id={item.educationId}
          arrayLength={formik.values.education.length}
          index={i}
          addRow={addRow}
          deleteRow={deleteRow}
          name={"Add Education"}
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

export default Education;
