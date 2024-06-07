import React, { useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../common/components/c_input";
import CSelect from "../../../common/components/c_select";
import Button from "../../../common/components/button";
import { createServiceAction, getServiceByIdAction, getServicesAction } from "../../../app-redux/management/managementActions";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app-redux/hooks";
import { selectgetServiceByIdStatus, selectgetServiceStatus } from "../../../app-redux/management/managementSlice";
import { useEffect } from "react";

function ServiceModal({ id }) {
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const dispatch = useDispatch();
  const getServicesStatus = useAppSelector(selectgetServiceStatus);
  const getServiceByid = useAppSelector(selectgetServiceByIdStatus)

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: "",
      parentServiceId: 0,
      name: "",
      description: "",
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {
      const model = {
        parentServiceId: values.parentServiceId,
        name: values.name,
        description: values.description,

      };
      console.log("model", model);
      dispatch(createServiceAction(model));
      // dispatch(getServicesAction());
    },
  });

  // const setid = (id) => {

  //   if (id && getServicesStatus && getServicesStatus.data) {
  //     formik.setValues({ ...getServicesStatus.data, })
  //   }
  // }



  useEffect(()=>{
    console.log("getServicesStatus",getServicesStatus && getServicesStatus.data);
    
  },[getServicesStatus])

  useEffect(() => {
    if (id > 0) {
      dispatch(getServiceByIdAction(id))  
    }
  }, [])

  useEffect(()=>{
    if (id && getServiceByid && getServiceByid.data) {
      formik.setValues({ ...getServiceByid.data })
    }
  },[getServiceByid])


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row col-xl-12">
        <div className=" mb-3 col-xl-12">
          <label className="form-label">Name:</label>
          <CInput
            name="name"
            value={formik.values.name}
            placeholder="Add Name"
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
        <div className=" mb-3 col-xl-12">
          <label className="form-label">Parent Service:</label>
          <CSelect
            name="parentServiceId"
            value={formik.values.parentServiceId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="select"
            defualt_option="Please Select"
            options={getServicesStatus && getServicesStatus.data}
            option_lable="name"
            option_value="serviceId"
          />
        </div>

        <div className=" mb-3 col-xl-12">
          <label className="form-label">Description:</label>
          <CInput
            id="description"
            name="description"
            value={formik.values.description}
            placeholder="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={6}
            error={
              isFormik
                ? { type: "formik", error: formik && formik }
                : { type: "server", error: messages }
            }
            type="textarea"
          />
        </div>
        <div className="d-xl-flex justify-content-end mt-3">
          <Button color="btn-info" name="Save" />
        </div>
      </div>
    </form>
  );
}

export default ServiceModal;
