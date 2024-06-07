import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../common/components/bread_crumbs";
import TopContainer from "../../../common/components/overview";
import TabNavbar from "../../../common/components/tab/nav-tab";
import { managementTabItem } from "../../../common/components/tabsNav";
import Tab from "../../../common/components/tab";
import CSelect from "../../../common/components/c_select";
import Button from "../../../common/components/button";
import CModel from "../../../common/components/model";
import ServiceModal from "../component/modal";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { resetCreateServiceState, resetDeleteServiceState, selectcreateServiceStatus, selectdeleteServiceStatus, selectgetServicesStatus, selectgetServiceStatus, selectmanagementStatus } from "../../../app-redux/management/managementSlice";
import { useFormik } from "formik";
import { deleteServiceAction, getServicesAction } from "../../../app-redux/management/managementActions";
import CTable from "../../../common/components/table";
import IconTrash from "../../../assets/icons/trash";
import IconEdit from "../../../assets/icons/edit";
import Confirmation from "../../../common/utils/Confirmation";
import CLoader from "../../../common/components/loader";
import { toast, ToastContainer } from "react-toastify";
import ImageBreadcrumb from "common/components/breadcrumb/breadcrumb";

const init_headers = [
  { label: "ID.", accessor: "serviceId", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Service Name", accessor: "name", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
  { label: "Actions", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
];
function User() {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [headers, setHeaders] = useState(init_headers);
  const [loader, showLoader] = useState(false)
  const [id, setId] = useState(null);
  const [delId, setdelId2] = useState(false)
  const dispatch = useAppDispatch();
  const deleteServiceStatus = useAppSelector(selectdeleteServiceStatus)
  const getServicesStatus = useAppSelector(selectgetServiceStatus)
  const createServiceStatus = useAppSelector(selectcreateServiceStatus)
  const managemenetStatus = useAppSelector(selectmanagementStatus)
  const notify = () => toast.success("Service Added!");
  const notify2 = () => toast.info("Service Deleted!");

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
    if (managemenetStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [managemenetStatus]);


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

  useEffect(() => {
    dispatch(getServicesAction());
    console.log("getServicesStatus", getServicesStatus && getServicesStatus.data);
  }, [])


  function handleClick(id) {
    setShow2(true)
    setdelId2(id)
  }

  function handleSet() {
    setShow2(true)
    const serviceId = delId;

    console.log("serviceId", serviceId);
    dispatch(deleteServiceAction(serviceId));
  }

  useEffect(() => {

    {
      deleteServiceStatus && deleteServiceStatus ?

        handleClose2()
        :
        console.log("Ni hay");

    }

  }, [deleteServiceStatus])

  useEffect(() => {
    dispatch(getServicesAction())

    if (createServiceStatus && createServiceStatus.data) {
      setShow(false);
    }

  }, [createServiceStatus, deleteServiceStatus])


  useEffect(() => {
    if (createServiceStatus && createServiceStatus.status === true) {
      notify();
      dispatch(resetCreateServiceState())
    }
    if (deleteServiceStatus && deleteServiceStatus.status === true) {
      notify2();
      dispatch(resetDeleteServiceState())
    }
  }, [createServiceStatus, deleteServiceStatus])


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
     
        <span  onClick={() => handleShow(obj.serviceId)} className="cursor-pointer">
          <IconEdit />
        </span>

        
        <span onClick={() => handleClick(obj.serviceId)}  className="link-danger cursor-pointer">
          <IconTrash />
        </span>

      </>
    )
  }

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
      <TopContainer title="Management" component={<Breadcrumbs />} />
      <ImageBreadcrumb imageUrl="../assets/img/banner1.png" pageName="Our Story" />
      <div className="page-body">
        <div className="container-xl col-12">
          <div className="row">
            <div className="col-12 col-md-3 px-4 bg-white rounded">
              <div
                className="list-group list-group-transparent mb-3 mt-3 ml-3 "
                role="button"
              >
                <TabNavbar
                  navItem={managementTabItem}
                  active={active}
                  handleToggle={handleToggle}
                />
              </div>
            </div>

            <div className="container-xl col-9">
              <div className="card">
                <div className="card-header">
                  <div className="col-lg-4">
                    <label className="card-title">Services</label>
                  </div>

                  <div className="ms-auto text-muted col-lg-2">

                    <button onClick={handleButtonShow} type="submit" className={`btn btn-primary w-20`}>
                      Add Service
                    </button>
                  </div>
                </div>

                <div className="card-body">
                  <div className="col-12 ">
                    <CTable
                      headers={headers}
                      rows={getServicesStatus && getServicesStatus.data}
                      changePage={changePage}
                      filterProps={false}
                      handelSortChange={handelSortChange}
                      setActionLinks={setActionLinks}
                      searchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {show && (
        <CModel
          show={show}
          handleClose={handleClose}
          component={<ServiceModal id={id} />}
          // title="Ticket No #1234"
          modalSize="modal-sm"
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

export default User;
