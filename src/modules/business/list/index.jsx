import React, { useEffect, useState } from "react";
import CModel from "../../../common/components/model"
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { useFormik } from "formik";
import CTable from "../../../common/components/table";
import IconTrash from "../../../assets/icons/trash";
import IconEdit from "../../../assets/icons/edit";
import CLoader from "../../../common/components/loader";
import BusinessOffices from "../add/component/business-offices";
import { deleteBusinessLocationAction, getBusinessLocationAction } from "../../../app-redux/business/businessActions";
import { selectbusniessStatus, selectcreateBusinessLocationStatus, selectdeleteBusinessLocationStatus, selectgetBusinessLocationStatus } from "../../../app-redux/business/businessSlice";
import Confirmation from "../../../common/utils/Confirmation";

const init_headers = [
  { label: "ID.", accessor: "businessLocationId", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Address", accessor: "address", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
  { label: "Email", accessor: "email", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
  { label: "Incharge Name", accessor: "inchargeName", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
  { label: "Actions", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
];
function BusniessList() {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [headers, setHeaders] = useState(init_headers);
  const [loader, showLoader] = useState(false)
  const [id, setId] = useState(null);
  const [busniessId, setBusinessId] = useState(null);
  const [delId, setdelId2] = useState(false)
  const dispatch = useAppDispatch();
  const getBusinessLocationStatus = useAppSelector(selectgetBusinessLocationStatus)
  const businessStatus = useAppSelector(selectbusniessStatus)
  const deleteBusinessLocationStatus = useAppSelector(selectdeleteBusinessLocationStatus)
  const createBusinessLocationStatus = useAppSelector(selectcreateBusinessLocationStatus)

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
    if (businessStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [businessStatus]);


  const handleShow = (id) => {
    setShow(true);
    setBusinessId(id)
  };


  const handleButtonShow = () => {
    setBusinessId(null)
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
    dispatch(getBusinessLocationAction())
    if (createBusinessLocationStatus && createBusinessLocationStatus.data) {
      setShow(false)
    }

  }, [createBusinessLocationStatus, deleteBusinessLocationStatus])

  function handleClick(id) {
    setShow2(true);
    setdelId2(id)
  }

  function handleSet() {
    setShow2(true);
    const locationId = delId
    dispatch(deleteBusinessLocationAction(locationId))
  }

  useEffect(() => {

    {
      deleteBusinessLocationStatus && deleteBusinessLocationStatus.status ?

        handleClose2()
        :
        console.log("Ni hay");

    }

  }, [deleteBusinessLocationStatus])


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
        <span onClick={() => handleShow(obj.businessLocationId)} className="cursor-pointer">
          <IconEdit />
        </span>

        <span onClick={() => handleClick(obj.businessLocationId)} className="link-danger cursor-pointer">
          <IconTrash />
        </span>
      </>
    )
  }

  return (
    <>
      <div className="container-xl col-12">
        <div className="row">
          <div className="col-xl-12">
            <button onClick={handleButtonShow} className="mb-3 btn btn-primary col-xl-2 float-end"> Add Location </button>
          </div>
          <div className="col-xl-12 ">
            <CTable
              headers={headers}
              rows={getBusinessLocationStatus && getBusinessLocationStatus.data}
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
          component={<BusinessOffices businessId={busniessId} />}
          // title="Ticket No #1234"
          modalSize="modal-lg"
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

export default BusniessList;
