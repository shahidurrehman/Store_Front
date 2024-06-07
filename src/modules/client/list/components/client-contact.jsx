import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../../common/components/bread_crumbs";
import TopContainer from "../../../../common/components/overview";
import TabNavbar from "../../../../common/components/tab/nav-tab";
import { managementTabItem } from "../../../../common/components/tabsNav";
import CModel from "../../../../common/components/model";
import { useFormik } from "formik";
import IconTrash from "../../../../assets/icons/trash";
import IconEdit from "../../../../assets/icons/edit";
import { toast, ToastContainer } from "react-toastify";
import ClientContact from "../../components/contact";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { clientDeleteContactAction, getClientContactInformationAction } from "../../../../app-redux/client/clientActions";
import { resetclientDeleteContactStatus, resetcontactInformationState, resetgetClientContactInformationState, selectclientDeleteContactStatus, selectClientStatus, selectcontactInformationStatus, selectgetClientContactInformationStatus } from "../../../../app-redux/client/clientSlice";
import ContactTab from "../../../../common/components/tab/contact-tab";
import Confirmation from "../../../../common/utils/Confirmation";
import CLoader from "../../../../common/components/loader";
import { resetDeleteServiceState } from "../../../../app-redux/management/managementSlice";

const init_headers = [
    { label: "ID.", accessor: "serviceId", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
    { label: "Service Name", accessor: "name", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
    { label: "Actions", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
];
function ContactList({ clientId }) {
    const [active, setActive] = useState(1);
    const [row, setRow] = useState(false)
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [headers, setHeaders] = useState(init_headers);
    const [loader, showLoader] = useState(false)
    const [id, setId] = useState(null);
    const [delId, setdelId2] = useState(false)
    const dispatch = useAppDispatch();
    const getClientContactInformationStatus = useAppSelector(selectgetClientContactInformationStatus)
    const contactInfromationStatus = useAppSelector(selectcontactInformationStatus)
    const deleteContactInfromationStatus = useAppSelector(selectclientDeleteContactStatus)
    const clientStatus = useAppSelector(selectClientStatus)

    const notify = () => toast.success("Contact Added!");
    const notify2 = () => toast.info("Contact Deleted!");

    const formik = useFormik({
        initialValues: {
            pageNo: 1,
            pageSize: 5,
            userId: 0,
            search: "",
            // orderBy: "clientName",
            // order: "DESC",
        },
    })

    useEffect(() => {
        if (clientId && clientId) {
            dispatch(getClientContactInformationAction(clientId));
        }
        console.log("getstatus", getClientContactInformationStatus);
        if (getClientContactInformationStatus && getClientContactInformationStatus.data) {
            formik.setValues({ ...getClientContactInformationStatus.data, clientId: clientId })
        }

        if (contactInfromationStatus && contactInfromationStatus.status=== true) {
            setShow(false)
            dispatch(resetcontactInformationState())
            notify();

        }

        if (deleteContactInfromationStatus && deleteContactInfromationStatus.status === true) {
            setShow2(false)
            dispatch(resetclientDeleteContactStatus())
            notify2();
        }

      
    }, [clientId, contactInfromationStatus, deleteContactInfromationStatus])

    useEffect(() => {
        if (clientStatus === "loading") showLoader(true)
        else showLoader(false)
      }, [clientStatus]);
    




    const handleToggle = (index) => {
        setActive(index);
    };

    const handleShow = (id) => {
        setShow(true);
        setId(id)
    };

    const handleButtonShow = () => {
        setId(null)
        setShow(true);

    }

    const handleClose = () => {
        setShow(false);
    };

    const handleClose2 = () => {
        setShow2(false);
    };

    const changePage = (e, page) => {
        e.preventDefault();
        formik.setFieldValue('pageNo', page);
    };


    function handleClick(id) {
        setShow2(true)
        setdelId2(id)
    }

    function handleSet() {
        setShow2(true)
        const clientContactId = delId;

        console.log("clientContactId ", clientContactId);
        dispatch(clientDeleteContactAction(clientContactId));
    }

    useEffect(() => {
        if (getClientContactInformationStatus && getClientContactInformationStatus.data.clientContact != null) {
            setRow(true);
        }
        else {
            setRow(false);
        }
    }, [getClientContactInformationStatus])



    const handelSortChange = (i) => {
        let obj = headers[i];
        let final = { ...obj, sort: !obj.sort }
        let headerList = headers;
        headerList[i] = final;
        formik.setFieldValue('orderBy', final.accessor);
        formik.setFieldValue('order', final.sort ? "ASC" : "DESC");
        setHeaders([...headerList]);
    };



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

            <div className="card-header">
                <div className="col-lg-4">
                    <h3 className="card-title">Client Contact</h3>
                </div>

                <div className="ms-auto text-muted col-lg-2">

                    <button onClick={handleButtonShow} type="submit" className={`btn btn-primary w-20`}>
                        Add Contact
                    </button>
                </div>
            </div>
            <div className="card-body">

                {getClientContactInformationStatus && getClientContactInformationStatus.data.map((item, i) =>
                    <div className="list-group list-group-flush list-group-hoverable">
                        <div className="row align-items-center">
                            <div className="list-group-item">

                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img
                                            className="avatar avatar-sm  avatar-rounded text-muted"
                                            src={` https://ui-avatars.com/api/?name=${item && item.contactDesignation}`}
                                        />

                                    </div>


                                    <div className="col text-truncate">
                                        <div className="row">
                                            <a className="col-xl-8 text-reset d-block"> {item && item.clientContactName}
                                            </a>
                                            <div className="col-xl-4 text-end">

                                                <div className="text-end">
                                                    <span onClick={() => handleShow(item.clientContactId)} className="cursor-pointer">
                                                        <IconEdit />
                                                    </span>
                                                    <span onClick={() => handleClick(item.clientContactId)} className="ms-2 link-danger cursor-pointer">
                                                        <IconTrash />
                                                    </span>
                                                </div>

                                            </div>
                                            
                                            <div className="d-block text-muted text-truncate mt-n1">{item && item.contactDesignation} (<a href={"mailto:" + item && item.contactEmail}>{item && item.contactEmail}</a>)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                )}
            </div>


            {show && (
                <CModel
                    show={show}
                    handleClose={handleClose}
                    component={<ClientContact id={id} />}
                    // title="Ticket No #1234"
                    modalSize="modal-md"
                    button_ok_text="Save"
                    // button_close_text="Close"
                    to="/management/services"
                    showSubmitButton={false}
                />
            )}

            {show2 && (
                <CModel
                    show={show2}
                    handleClose={handleClose2}
                    handleClick={handleSet}
                    component={<Confirmation text="Do you really want to delete this contact?" />}
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

export default ContactList;
