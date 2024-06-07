import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import Button from "../../../common/components/button";
import CSelect from "../../../common/components/c_select";

function ServiceComponenet({ clientId }) {

  const [row, setrow] = useState(false)
  const [hide, sethide] = useState(true)

  const formik = useFormik({
    initialValues: {
      legalStatus: "",

    },

  });


  useEffect(() => { 
    {
      formik.values.parentServiceId ?
        setrow(true) ||
        sethide(false)
        :
        setrow(false) ||
        sethide(true)
    }

  }, [formik.values.parentServiceId])


  return (
    <>
      {hide ?
        <div className="mb-3 col-xl-6">
          <CSelect
            name="parentServiceId"
            value={formik.values.parentServiceId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="select"
            defualt_option="Please Select"
            options={[
              { value: "Bilal", lable: "Bilal" },
              { value: "Shahid", lable: "shahid" },
            ]}
          />
        </div>
        :
        <div>{formik.values.parentServiceId}</div>
      }
      {row ?
        <div className="row">

          <div className="mb-3 mt-3 col-xl-3">
            <label className="form-label">Date Of Engagemnet:</label>
            <CInput
              id="engagment"
              name="engagment"
              value={formik.values.engagment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="date"
            />
          </div>

          <div className="mb-3 mt-3 col-xl-3">
            <label className="form-label">Date Of cessation:</label>
            <CInput
              id="cessation"
              name="cessation"
              value={formik.values.cessation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="date"
            />
          </div>

          <div className=" mb-3 mt-3 col-xl-3">
            <label className="form-label">Reengagement Date:</label>
            <CInput
              id="Reengagement"
              name="Reengagement"
              value={formik.values.Reengagement}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="date"
            />
          </div>


          <div className=" mb-3 mt-3 col-xl-3">
            <label className="form-label">Frequency :</label>
            <CSelect
              name="Frequency"
              value={formik.values.Frequency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="select"
              defualt_option="Please Select"
              options={[
                { value: "Monthly", lable: "Monthly" },
                { value: "Quarterly", lable: "Quarterly" },
                { value: "Bi-annual", lable: "Bi-annual" },
                { value: "Annual", lable: "Annual" },
              ]}
            />
          </div>





        </div>
        :
        <div> </div>
      }
      <div>


      </div>


    </>
  );
}

export default ServiceComponenet;
