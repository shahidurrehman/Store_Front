import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { selectAuthError } from "../../../app-redux/auth/authSlice";
import { clientgetTaxAction, clientUpdateTaxAction } from "../../../app-redux/client/clientActions";
import { resetclientUpdateTaxStatus, selectClientStatus, selectclientTaxDetailsByIdStatus, selectclientUpdateTaxStatus } from "../../../app-redux/client/clientSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import Button from "../../../common/components/button";
import CInput from "../../../common/components/c_input";
import CLoader from "../../../common/components/loader";
import { getFormattedDateTime } from "../../../common/utils/app.util";


function ClientTaxStructure({ clientId }) {
    const [messages, setMessages] = useState("");
    const [isFormik, setIsFormik] = useState(false);
    // const [message, setMessage] = useState(null);
    const [loader, showLoader] = useState(false)
    // const [disable, setdisable] = useState(true)
    // const [disable2, setdisable2] = useState(true)
    // const [disable3, setdisable3] = useState(true)
    // const [disable4, setdisable4] = useState(true)
    // const [disable5, setdisable5] = useState(true)
    // const clientupdateTaxResponse = useAppSelector(selectclientUpdateTaxStatus)
    const clientStatus = useAppSelector(selectClientStatus)
    const clientgettaxResponse = useAppSelector(selectclientTaxDetailsByIdStatus)
    const notify = () => toast.success("Tax Structure Updated!");
    const clientTaxStructureStatus = useAppSelector(selectclientUpdateTaxStatus)
    let error = useAppSelector(selectAuthError);
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            clientTaxInfo: []
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
            dispatch(clientUpdateTaxAction(model))
        },
    });

    useEffect(() => {
        if (clientId && clientId) {
            const model = {
                clientId: clientId
            }
            dispatch(clientgetTaxAction(model))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientId])

    useEffect(() => {
        if (clientTaxStructureStatus && clientTaxStructureStatus.status === true) {
            notify();
            dispatch(resetclientUpdateTaxStatus())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientTaxStructureStatus])

    useEffect(() => {
        // console.log("clientgettaxResponse", clientgettaxResponse);
        // console.log("formik.values", formik.values);
        if (clientgettaxResponse && clientgettaxResponse.data) {
            console.log("Get Status", clientgettaxResponse.data);
            const responseData = clientgettaxResponse.data;

            formik.setFieldValue("clientTaxDetails", responseData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientgettaxResponse]);

    useEffect(() => {
        if (clientStatus === "loading") showLoader(true)
        else showLoader(false)
    }, [clientStatus]);

    // const handleCheckboxChange = (name, checked) => {
    //     console.log("name", name);
    //     console.log(`dor_${name}`);
    //     const { clientTaxDetails } = formik.values;
    //     const index = clientTaxDetails.findIndex(item => item.taxAuthorityAcronym === name);
    //     if (checked && index === -1) {
    //         const newTaxDetails = [...clientTaxDetails, {
    //             taxAuthorityAcronym: name,
    //             isEnabled: true
    //         }];
    //         formik.setFieldValue("clientTaxDetails", newTaxDetails);
    //     } else if (!checked && index !== -1) {
    //         const newTaxDetails = [...clientTaxDetails];
    //         newTaxDetails.splice(index, 1);
    //         formik.setFieldValue("clientTaxDetails", newTaxDetails);
    //     }
    // };

    useEffect(() => {
        if (error && error.error) {
            let err = error.error;
            if (err && (typeof err) == "string") {
                setMessages(null);
                setMessages({ error_msg: err, status: "danger" });
                setIsFormik(false)
            }
        } else setMessages(null);
    }, [error]);

    useEffect(() => {
        setIsFormik(true)
    }, [formik.errors]);

    useEffect(() => {
        console.log("vL", formik.values);
    }, [formik.values]);

    useEffect(() => {
        if (clientgettaxResponse && clientgettaxResponse.data)
            formik.setFieldValue("clientTaxInfo", [...clientgettaxResponse.data])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientgettaxResponse])

    useEffect(() => {
        console.log("on chnage", formik.values.clientTaxInfo);
    }, [formik.values])

    return (
        <div className='card-body'>
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
                                value={getFormattedDateTime(item.dateOfRegistration, "YYYY-MM-DD")}
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
        </div>
    );
}

export default ClientTaxStructure;
