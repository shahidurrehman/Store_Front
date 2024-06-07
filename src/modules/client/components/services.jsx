import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { clientAssociateServiceAction, clientDissociateServiceAction, clientServicesAction } from "../../../app-redux/client/clientActions";
import { selectclientDissociateServiceStatus, selectclientAssociateServiceStatus, selectclientServicesStatus, selectClientStatus, selectStatus, resetclientDissociateServiceState, resetclientAssociateServiceState } from "../../../app-redux/client/clientSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { getServicesAction } from "../../../app-redux/management/managementActions";
import { selectgetServiceStatus } from "../../../app-redux/management/managementSlice";
import IconTrash from "../../../assets/icons/trash";
import CSelect from "../../../common/components/c_select";
import CLoader from "../../../common/components/loader";
import CModel from "../../../common/components/model";
import CTable from "../../../common/components/table";
import Confirmation from "../../../common/utils/Confirmation";

const init_headers = [
    { label: "ID.", accessor: "serviceId", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
    { label: "Service Name", accessor: "serviceName", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
    { label: "Actions", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
];

function ClientServices({ clientId }) {

    const [active, setActive] = useState(1);
    const [show, setShow] = useState(false);
    const [id, setid] = useState(null)
    const dispatch = useAppDispatch();
    const [loader, showLoader] = useState(false)
    const clientStatus = useAppSelector(selectClientStatus)
    const [headers, setHeaders] = useState(init_headers);
    const getServicesStatus = useAppSelector(selectgetServiceStatus)
    const getClientServicesStatus = useAppSelector(selectclientServicesStatus)
    const clientAssociateStatus = useAppSelector(selectclientAssociateServiceStatus)
    const clientDissociateStatus = useAppSelector(selectclientDissociateServiceStatus)

    const handleToggle = (index) => {
        setActive(index);
    };

    const formik = useFormik({
        initialValues: {
            clientId: "",
            serviceId: "",

        },
        // validationSchema: signinFormValidation,
        onSubmit: (values) => {
            const model = {
                serviceId: values.serviceId,
                clientId: values.clientId,
            };
            console.log("model", model);
        },
    });

    const notify = () => toast.warn("Service Deleted!");
    const notify2 = () => toast.success("Service Added!");

    const changePage = (e, page) => {
        e.preventDefault();
        formik.setFieldValue('pageNo', page);
    };

    function handleClick(id) {
        setShow(true)
        setid(id)
    }
    function handleSet() {
        console.log("id", id);
        const model = {
            clientServiceId: id,
        };
        dispatch(clientDissociateServiceAction(model))
    }
    useEffect(() => {

        {
            clientDissociateStatus && clientDissociateStatus ?

                handleClose()
                :
                console.log("Ni hay");

        }

    }, [clientDissociateStatus])



    useEffect(() => {
        if (clientDissociateStatus && clientDissociateStatus.status === true) {
            notify();
            dispatch(resetclientDissociateServiceState())
        }
    }, [clientDissociateStatus])

    useEffect(() => {
        if (clientAssociateStatus && clientAssociateStatus.status === true) {
            notify2();
            dispatch(resetclientAssociateServiceState())
        }
    }, [clientAssociateStatus])


    useEffect(() => {
        if (clientStatus === "loading") showLoader(true)
        else showLoader(false)
    }, [clientStatus]);



    const handelSortChange = (i) => {
        let obj = headers[i];
        let final = { ...obj, sort: !obj.sort }
        let headerList = headers;
        headerList[i] = final;
        formik.setFieldValue('orderBy', final.accessor);
        formik.setFieldValue('order', final.sort ? "ASC" : "DESC");
        setHeaders([...headerList]);
    };

    const setActionLinks = (obj) => {
        return (
            <>
                <span onClick={() => handleClick(obj.clientServiceId)} className="link-danger cursor-pointer">
                    <IconTrash />

                </span>
            </>
        )
    }

    const handleShow = () => {
        setShow(true);

    };
    const handleClose = () => {
        setShow(false);
    };


    const handleAdd = () => {
        const model = {
            clientId: clientId,
            serviceId: formik.values.serviceId,
        };
        console.log("model", model);
        dispatch(clientAssociateServiceAction(model))

    }

    useEffect(() => {
        dispatch(clientServicesAction(clientId))
        console.log("ClientServices", getClientServicesStatus);

    }, [clientAssociateStatus, clientDissociateStatus])

    useEffect(() => {
        dispatch(getServicesAction());
    }, [])

    return (
        <>
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
            <div className="row">
                <div className="mb-3 col-xl-6">
                    <label className="form-label">Select Service</label>
                    <CSelect
                        id="serviceId"
                        name="serviceId"
                        value={formik.values.serviceId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="select"
                        defualt_option="Please Select"
                        options={getServicesStatus && getServicesStatus.data}
                        option_lable="name"
                        option_value="serviceId"
                    />
                </div>
                <div className="ms-auto text-muted col-lg-2">
                    <button type="submit" onClick={handleAdd} className={`btn btn-primary btn-end mt-3`}>
                        Add Service
                    </button>
                </div>


                <div className="card-body">
                    <div className="col-12 ">
                        <CTable
                            headers={headers}
                            rows={getClientServicesStatus && getClientServicesStatus.data}
                            changePage={changePage}
                            filterProps={false}
                            handelSortChange={handelSortChange}
                            setActionLinks={setActionLinks}
                            searchable={false}
                        />
                    </div>
                </div>
            </div>
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
            <CLoader show={loader} />
        </>
    );
}

export default ClientServices;
