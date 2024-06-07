import { clientDeleteCompanyByIdAction, clientGetCompaniesByIdAction } from "app-redux/client/clientActions";
import { selectClientCompanies } from "app-redux/client/clientSlice";
import { useAppDispatch, useAppSelector } from "app-redux/hooks";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import TopContainer from "../../../common/components/overview";
import Breadcrumbs from "../../../common/components/bread_crumbs";
import TabNavbar from "../../../common/components/tab/nav-tab";
import CTable from 'common/components/table';
import IconEdit from "../../../assets/icons/edit";
import IconTrash from "../../../assets/icons/trash";
import Confirmation from "../../../common/utils/Confirmation";
import CLoader from "../../../common/components/loader";
import { toast, ToastContainer } from "react-toastify";
import CModel from "../../../common/components/model";
import { managementTabItem } from "../../../common/components/tabsNav";
import ServiceModal from "modules/management/component/modal";


// const holdingCompanyitems = {
//   holdingName: "",
// }

const associatedCompanyitems = {
  associatedName: "",
}
const arrayItems = {
  name: "",
}
// const companiesItems = {
//   clientCompanyId: 0,
//   clientId: 0,
//   companyName: "",
//   companyType: ""
// }

const tableHeaders = [
  { label: "Company Id.", accessor: "clientCompanyId", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Name", accessor: "companyName", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
  { label: "Type ", accessor: "companyType", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Action", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: false }
];

function GroupStructure({ clientId }) {

  const dispatch = useAppDispatch();
  const clientCompanies = useAppSelector(selectClientCompanies);
  const deleteCompanyStatus = useAppSelector(selectClientCompanies);
  const [holdingCompanyId, setHoldingCompanyId] = useState(0);
  const [associated, setAssociated] = useState([]);
  const [subsidiary, setSubsidiary] = useState([]);
  const [active, setActive] = useState(1);
  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);
  const [headers, setHeaders] = useState(tableHeaders);
  const [loader, showLoader] = useState(false)
  const [id, setId] = useState(null);
  const [delId, setdelId2] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const notify = () => toast.success("Service Added!");
  const notify2 = () => toast.info("Service Deleted!");

  // const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      // companies: [companiesItems],
      holdingCompany: [],
      associatedCompany: [associated],
      Subsidiaries: [subsidiary],
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {

      const holdingCompanies = {

      }

      const model = {
        companies: values.companies
        //  holdingCompanyitems: values.holdingCompany,
        // associatedCompanyitems: values.associatedCompany,
        // subsidiariesItems: values.Subsidiaries,
      };
      console.log("model", values);
    },
  });

  const addNewHolding = () => {
    const { holdingCompany } = formik.values;
    formik.setFieldValue("holdingCompany", [...holdingCompany, ""]);
  };

  const addAssociate = () => {
    const { associatedCompany } = formik.values;
    formik.setFieldValue("associatedCompany", [...associatedCompany, arrayItems])
  }

  const addsubsidiaries = () => {
    const { subsidiaries } = formik.values;
    formik.setFieldValue("subsidiaries", [...subsidiaries, arrayItems])
  }

  const concatHoldingCompanyNames = (holdingCompany) => {
    return holdingCompany.reduce((acc, cur) => {
      return acc + cur.holdingName + ' ';
    }, '').trim();
  }

  const concatAssociatedCompanyNames = (holdingCompany) => {
    return holdingCompany.reduce((acc, cur) => {
      return acc + cur.associatedName + ' ';
    }, '').trim();
  }
  const concatSubsadriesCompanyNames = (holdingCompany) => {
    return holdingCompany.reduce((acc, cur) => {
      return acc + cur.subsidiariesName + ' ';
    }, '').trim();
  }

  useEffect(() => {
    if (clientId && clientId)
      dispatch(clientGetCompaniesByIdAction(clientId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId])

  const handelSortChange = (i) => {
    let obj = headers[i];
    let final = { ...obj, sort: !obj.sort }
    let headerList = headers;
    headerList[i] = final;
    formik.setFieldValue('orderBy', final.accessor);
    formik.setFieldValue('order', final.sort ? "ASC" : "DESC");
    setHeaders([...headerList]);
  };

  const changePage = (e, page) => {
    e.preventDefault();
    formik.setFieldValue('pageNo', page);
  };

  const setActionLinks = (obj) => {
    return (
      <>
        <span onClick={() => handleShow(obj.clientCompanyId)} className="cursor-pointer">
          <IconEdit />
        </span>

        <span onClick={() => handleClick(obj.clientCompanyId)} className="link-danger cursor-pointer">
          <IconTrash />
        </span>
      </>
    )
  }

  const handleShow = (id) => {
    setShow(true);
    setId(id)
  };
  const handleButtonShow = () => {
    setId(null)
    setShow(true);
  };
  const handleToggle = (index) => {
    setActive(index);
  };

  function handleClick(id) {
    setShow2(true)
    setdelId2(id)
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleClose2 = () => {
    setShow2(false);
  };

  function handleSet() {
    setShow2(true)
    const clientCompanyId = delId;

    console.log("clientCompanyId", clientCompanyId);
    dispatch(clientDeleteCompanyByIdAction(clientCompanyId));
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
      {/* <TopContainer title="Management" component={<Breadcrumbs />} /> */}
      <div className="page-body">
        <div className="container-xl col-12 px-0">
          <div className="row">
        
            
              {/* <div className="card"> */}
                {/* <div className="card-header">
                  <div className="col-lg-4">
                    <label className="card-title">Services</label>
                  </div>

                  <div className="ms-auto text-muted col-lg-2">

                    <button onClick={handleButtonShow} type="submit" className={`btn btn-primary w-20`}>
                      Add Service
                    </button>
                  </div>
                </div> */}

                {/* <div className="card-body"> */}
                  <div className="col-12 ">
                    <CTable
                      headers={headers}
                      rows={clientCompanies && clientCompanies.data}
                      changePage={changePage}
                      filterProps={false}
                      handelSortChange={handelSortChange}
                      setActionLinks={setActionLinks}
                      searchable={false}
                    />
                  </div>
                {/* </div> */}
              {/* </div> */}
           

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


      {/* <div className='card-body'></div> */}
      {/* <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              <th>Company Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="invoice.html" className="text-reset" tabIndex={-1}>Design Works</a></td>
              <td>
                <span className="flag flag-country-us" />
                Carlson Limited
              </td>
              <td>
                87956621
              </td>
              <td className="text-end">
                <span className="dropdown">
                  <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><a href="invoice.html" className="text-reset" tabIndex={-1}>UX Wireframes</a></td>
              <td>
                <span className="flag flag-country-gb" />
                Adobe
              </td>
              <td>
                87956421
              </td>
              <td className="text-end">
                <span className="dropdown">
                  <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><a href="invoice.html" className="text-reset" tabIndex={-1}>New Dashboard</a></td>
              <td>
                <span className="flag flag-country-de" />
                Bluewolf
              </td>
              <td>
                87952621
              </td>
              <td className="text-end">
                <span className="dropdown">
                  <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><a href="invoice.html" className="text-reset" tabIndex={-1}>Landing Page</a></td>
              <td>
                <span className="flag flag-country-br" />
                Salesforce
              </td>
              <td>
                87953421
              </td>
              <td className="text-end">
                <span className="dropdown">
                  <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><a href="invoice.html" className="text-reset" tabIndex={-1}>Marketing Templates</a></td>
              <td>
                <span className="flag flag-country-pl" />
                Printic
              </td>
              <td>
                87956621
              </td>
              <td className="text-end">
                <span className="dropdown">
                  <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><a href="invoice.html" className="text-reset" tabIndex={-1}>Sales Presentation</a></td>
              <td>
                <span className="flag flag-country-br" />
                Tabdaq
              </td>
              <td>
                87956621
              </td>
              <td className="text-end">
                <span className="dropdown">
                  <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
  
 
}

export default GroupStructure;
