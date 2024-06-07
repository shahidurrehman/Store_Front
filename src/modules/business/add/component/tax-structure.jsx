import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CInput from "../../../../common/components/c_input";
import Button from "../../../../common/components/button";
import CSelect from "../../../../common/components/c_select";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { selectAuthError } from "../../../../app-redux/auth/authSlice";
import CLoader from "../../../../common/components/loader";
import { ToastContainer } from "react-toastify";
import { clientgetTaxAction } from "../../../../app-redux/client/clientActions";
import { resetclientTaxDetailsByIdStatus, selectclientTaxDetailsByIdStatus } from "../../../../app-redux/client/clientSlice";


function TaxStructure({ id }) {
    const [messages, setMessages] = useState("");
    const [isFormik, setIsFormik] = useState(false);
    const [message, setMessage] = useState(null);
    const [loader, showLoader] = useState(false)
    const [disable, setdisable] = useState(true)
    const [disable2, setdisable2] = useState(true)
    const [disable3, setdisable3] = useState(true)
    const [disable4, setdisable4] = useState(true)
    const [disable5, setdisable5] = useState(true)
    const clientgettaxResponse = useAppSelector(selectclientTaxDetailsByIdStatus)

    let error = useAppSelector(selectAuthError);
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            clientTaxDetails: []
            // FBR: "",
            // PRA: "",
            // SRB: "",
            // KPRA: "",
            // BRA: "",
        },
        // validationSchema: busniessOfficeFormValidation,
        onSubmit: (values) => {
            const model = {
                clientTaxDetails: values.clientTaxInfo
            };
            console.log("model", model);
            // dispatch(clientUpdateTaxAction(model))
        },

    });


    
    useEffect(() => {
        dispatch(resetclientTaxDetailsByIdStatus())
        if (clientgettaxResponse && clientgettaxResponse.data) {
            formik.setFieldValue("clientTaxInfo", [...clientgettaxResponse.data])
        }

    }, [clientgettaxResponse])

    useEffect(() => {
        
            const model = {
                clientId: 12
            }
           

            dispatch(clientgetTaxAction(model))
            
    }, [])





    // const addRow = (name) => {
    //     const { clientTaxDetails } = formik.values;
    //     const n = "strn_" + name;
    //     console.log("e", name);
    //     formik.setFieldValue("clientTaxDetails", [
    //         ...clientTaxDetails,
    //         { taxAuthorityAcronym: name, tax_number: formik.values[n] }]);
    // };



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

    // useEffect(() => {
    //     if (businessStatus === "loading") showLoader(true)
    //     else showLoader(false)
    // }, [businessStatus]);


    return (
        <form onSubmit={formik.handleSubmit}>
            {formik.values?.clientTaxInfo?.map((item, i) =>
                <div className="row" key={i}>
                    <div className="form-check form-switch col-xl-12">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name={`clientTaxInfo[${i}].isEnabled`}
                            checked={item.isEnabled}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <span className="form-check-label">{item.taxAuthorityAcronym} ({item.taxAuthority.toUpperCase()})</span>
                    </div>

                    <div className="col-xl-5 mt-2">
                        <label className="form-label">Sales Tax Number:</label>
                        <CInput
                            id={`clientTaxInfo[${i}].taxNumber`}
                            name={`clientTaxInfo[${i}].taxNumber`}
                            value={item.taxNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            disabled={!item.isEnabled}
                        />
                    </div>

                    <div className="col-xl-5 mt-2 mb-4">
                        <label className="form-label">Date of Registration:</label>
                        <CInput
                            id={`clientTaxInfo[${i}].dateOfRegistration`}
                            name={`clientTaxInfo[${i}].dateOfRegistration`}
                            value={item.dateOfRegistration}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="date"
                            disabled={!item.isEnabled}
                        />
                    </div>
                </div>
            )}
            <div className="d-xl-flex justify-content-end mt-3">
                <Button type="submit" color="btn-info" name="Update" />
            </div>

            <CLoader show={loader} />
        </form >
    );
}



export default TaxStructure;
