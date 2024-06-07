import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Breadcrumbs from "../../../common/components/bread_crumbs";
import TopContainer from "../../../common/components/overview";
import TabNavbar from "../../../common/components/tab/nav-tab";
import { managementTabItem } from "../../../common/components/tabsNav";
import Button from "../../../common/components/button"
import CSelect from "../../../common/components/c_select";
import InvoiceFilterForm from "./invoice-filter-form";
import FilterArea from "../../../common/components/filter_area";
import { useFormik } from "formik";
import CTable from "../../../common/components/table";
import ImageBreadcrumb from "common/components/breadcrumb/breadcrumb";
import FollowUs from "common/components/store_footer/store_footer";
import ContactUs from "common/components/contact_us/contactus";
import ContactInfo from "common/components/contact_us/contactus";
import ContactForm from "common/components/contact_form/contactform";


const init_headers = [
    { label: "Sr No.", accessor: "id", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
    { label: "Client Name", accessor: "name", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
    { label: "Invoice Amount", accessor: "name", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
    { label: "Invoice date", accessor: "name", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
    { label: "Invoice Status", accessor: "name", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
    // { label: "Actions", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
];
function Invoice_form() {
    const [active, setActive] = useState(1);
    const [headers, setHeaders] = useState(init_headers);
    const handleToggle = (index) => {
        setActive(index);
    };

    const formik = useFormik({
        initialValues: {
            "pageNo": 1,
            "pageSize": 55,
            "userId": 0,
        },

    })

    const changePage = (e, page) => {
        e.preventDefault();
        formik.setFieldValue('pageNo', page);
    };

    const handelSortChange = (i) => {
        let obj = headers[i];
        let final = { ...obj, sort: !obj.sort }
        let headerList = headers;
        headerList[i] = final;
        formik.setFieldValue('orderBy', final.accessor);
        formik.setFieldValue('order', final.sort ? "ASC" : "DESC");
        setHeaders([...headerList]);
    };

    const handleSubmit = (vals) => {
        let values = formik.values
        formik.setValues({ ...values, ...vals })

    }

    return (
        <>
            
            <div className="page-body pt-5 mb-0 overflow-hidden">
                <div className="container-xxxl">
                    <div className="row">
                        <div className="col-md-12">
                        <ImageBreadcrumb imageUrl="../assets/img/banner4.jpg" pageName="Appointment" />
                        </div>
                    </div>
           
                {/* <FilterArea form={<InvoiceFilterForm handleSubmit={handleSubmit} />} title="Invoice Search" /> */}

                </div>
                <div className="container-xl">
                <div className="row g-2 align-items-center">
                  <div className="col-md-4 pt-5">
                    <h1 className="">
                        Contact Us
                    </h1>
                    <div className="text-muted mt-1"></div>
                  </div>
                  <div className="col-md-8 pt-5 d-flex justify-content-center">
                    <h1 className="">
                        Schedule an appointment
                    </h1>
                    <div className="text-muted mt-1"></div>
                  </div>
                </div>
              </div>
                <div className="container-xl">
                <div className="row">
                <ContactInfo/>
                <ContactForm/>
                </div>
                </div>
                {/* <div className="container-xl">
                    <div className="col-12 ">
                        <CTable
                            headers={headers}
                            // rows={getServicesStatus && getServicesStatus.data}
                            changePage={changePage}
                            filterProps={false}
                            handelSortChange={handelSortChange}
                            // setActionLinks={setActionLinks}
                            searchable={false}
                        />
                    </div>
                </div> */}
                <FollowUs/>
            </div>
        </>
    );
}

export default Invoice_form;
