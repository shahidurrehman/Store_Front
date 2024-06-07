import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app-redux/hooks";
import { educationAction } from "../../../app-redux/staff/staffActions";
import { selecteducationStatus, selectgetEducationDetailsStatus, selectStaffError } from "../../../app-redux/staff/staffSlice";
import IconCheck from "../../../assets/icons/check";
import IconTrash from "../../../assets/icons/trash";
import CInput from "../../../common/components/c_input";
import CSelect from "../../../common/components/c_select";
import { getFormattedDateTime } from "../../../common/utils/app.util";
import { educationFormValidation } from "../edit/validation";

const InitEducation = {
  educationId: 0,
  userId: "",
  examination: "",
  yearOfPassing: "",
  grade: "",
  university: "",
  institution: "",
};

function EducationForm({ values, id, index, deleteRow, arrayLength }) {

  const { staffId } = useParams();
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  // const [other, setOther] = useState(false);
  // const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const getEducationDetailsStatus = useAppSelector(selectgetEducationDetailsStatus)

  // const userdata = useAppSelector(selectUser);
  const educationStatus = useAppSelector(selecteducationStatus);
  const error = useAppSelector(selectStaffError);

  const formik = useFormik({
    initialValues: InitEducation,
    validationSchema: educationFormValidation,
    onSubmit: (values) => {
      const model = {
        educationId: values.educationId,
        userId: staffId,
        examination: values.examination,
        yearOfPassing: values.yearOfPassing,
        grade: values.grade,
        university: values.university,
        institution: values.institution,
      };
      console.log("model", model);
      dispatch(educationAction(model));
    },
  });

  useEffect(() => {
    if (staffId && staffId) {
      // dispatch(getEducationDetailsAction(staffId));

    }
  }, [staffId]);

  useEffect(() => {
    formik.setFieldValue("userId", staffId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffId])

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
    formik.setValues({ ...values })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getEducationDetailsStatus])

  // useEffect(() => {
  //   console.log("success", educationStatus)
  // }, [educationStatus]);

  // useEffect(() => {
  //   console.log("error", error)
  // }, [error]);

  useEffect(() => {
    setIsFormik(true)
  }, [formik.errors]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="col-12 text-end">
        <span className=" col-xl-6 text-indigo bg-transparent cursor-pointer" onClick={formik.handleSubmit}>
          <IconCheck />
        </span>
        {arrayLength > 1 &&
          <span className="cursor-pointer text-end" onClick={() => deleteRow(id, index)}>
            <IconTrash />
          </span>
        }
      </div>
      <div className="row">
        <div className="col-xl-4 mb-3">
          <label className="form-label">Examination:</label>
          <CInput
            id="examination"
            name="examination"
            value={formik.values.examination}
            placeholder="Examination"
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

        <div className="col-xl-4 mb-3">
          <label className="form-label">Year of Passing:</label>
          <CInput
            id="yearOfPassing"
            name="yearOfPassing"
            value={getFormattedDateTime(formik.values.yearOfPassing, "YYYY-MM-DD")}
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
        <div className="col-xl-4 mb-3">
          <label className="form-label">Grade:</label>
          <CInput
            id="grade"
            name="grade"
            value={formik.values.grade}
            placeholder="Grade"
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

        <div className="col-xl-6 mb-3">
          <label className="form-label">Board/University:</label>
          <CSelect
            id="university"
            name="university"
            value={formik.values.university}
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
              { value: "ibcc", lable: "Inter Board Committee of Chairman (IBCC) Islamabad" },
              { value: "fbise", lable: "Federal Board of Intermediate and Secondary Education, Islamabad" },
              { value: "bise_rwp", lable: "Board of Intermediate and Secondary Education, Bahawalpur" },
              { value: "bise_dik", lable: "Board of Intermediate and Secondary Education, DG Khan" },
              { value: "bise_fsd", lable: "Board of Intermediate and Secondary Education, Faisalabad" },
              { value: "bise_gjrw", lable: "Board of Intermediate and Secondary Education, Gujranwala" },
              { value: "bise_lhr", lable: "Board of Intermediate and Secondary Education, Lahore" },
              { value: "bise_multan", lable: "Board of Intermediate and Secondary Education, Multan" },
              { value: "bise_rwp", lable: "Board of Intermediate and Secondary Education, Rawalpindi" },
              { value: "bise_shw", lable: "Board of Intermediate and Secondary Education, Sahiwal" },
              { value: "bise_sgr", lable: "Board of Intermediate and Secondary Education, Sargodha" },
              { value: "others", lable: "Others" },

            ]}
          />
        </div>

        <div className="col-xl-6 mb-3">
          <label className="form-label">Institute:</label>
          <CInput
            id="institution"
            name="institution"
            value={formik.values.institution}
            placeholder="institution "
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
    </form>
  );
}
export default EducationForm;
