import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Link, NavLink } from "react-router-dom";
import { getAllClientsAction } from '../../../app-redux/client/clientActions';
import { selectClientStatus, selectgetAllClientsStatus } from '../../../app-redux/client/clientSlice';
import { useAppDispatch, useAppSelector } from '../../../app-redux/hooks';
import Breadcrumbs from '../../../common/components/bread_crumbs';
import TopContainer from '../../../common/components/overview';
import CTable from '../../../common/components/table';
import IconEdit from '../../../assets/icons/edit';
import FilterArea from '../../../common/components/filter_area';
import ClientFilterForm from './components/client-filter-form';
import EditClient from '../edit';
import CLoader from '../../../common/components/loader';
import ProductCard from 'common/components/c_product/ProductCard';
import CategoryFilter from 'common/components/sidebar/sidebar';
import ImageBreadcrumb from 'common/components/breadcrumb/breadcrumb';
import ProductShop from 'common/components/shop_products/shopproduct';
import FollowUs from 'common/components/store_footer/store_footer';

const init_headers = [
  { label: "ID.", accessor: "clientId", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Client Name", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
  { label: "Phone Number", accessor: "phoneNumber", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Industry", accessor: "industry", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Legal Status", accessor: "legalStatus", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Website", accessor: "website", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Contact Name", accessor: "clientContact", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Contact Email", accessor: "contactEmail", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
  { label: "Actions", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: true, hide: true },
];
const products = [
  { id: 1, name: 'Center tables', price: 1000, discountPrice: 1200, image: 'path/to/image' },
  { id: 1, name: 'Center tables', price: 1000, discountPrice: 1200, image: 'path/to/image' },
  { id: 1, name: 'Center tables', price: 1000, discountPrice: 1200, image: 'path/to/image' },
  { id: 1, name: 'Center tables', price: 1000, discountPrice: 1200, image: 'path/to/image' },
  { id: 1, name: 'Center tables', price: 1000, discountPrice: 1200, image: 'path/to/image' },
  { id: 1, name: 'Center tables', price: 1000, discountPrice: 1200, image: 'path/to/image' },
  { id: 1, name: 'Center tables', price: 1000, discountPrice: 1200, image: 'path/to/image' },
  { id: 1, name: 'Center tables', price: 1000, discountPrice: 1200, image: 'path/to/image' },

  // Add more products here

];
function Client() {

  const dispatch = useAppDispatch();

  const getAllClientsStatus = useAppSelector(selectgetAllClientsStatus)

  const [headers, setHeaders] = useState(init_headers);
  const [loader, showLoader] = useState(false)
  const clientStatus = useAppSelector(selectClientStatus)

  const formik = useFormik({
    initialValues: {
      pageNo: 1,
      pageSize: 5,
      userId: 0,
      search: "",
      orderBy: "clientName",
      order: "DESC",
    },
  })

  useEffect(() => {
    showLoader(true);
    dispatch(getAllClientsAction(formik.values));
    showLoader(false);
  }, [formik.values]);

  const handleSubmit = (vals) => {
    let values = formik.values
    formik.setValues({ ...values, ...vals })
  }

  useEffect(() => {
    if (clientStatus === "loading") showLoader(true)
    else showLoader(false)
  }, [clientStatus]);



  useEffect(() => {
    const { total } = formik.values
    if (getAllClientsStatus && getAllClientsStatus.pagination && getAllClientsStatus.pagination.totalRecords) {

      formik.setFieldValue("total", getAllClientsStatus.pagination.totalRecords);
    }
  }, [getAllClientsStatus]);

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
        {/* <Link to={`/client/edit/${obj.clientId}`} className="me-2"> */}
        <Link to={`/client/edit/${obj.clientId}`}>{obj.clientName}</Link>
        {/* <IconEdit /> */}
        {/* </Link> */}
      </>
    )
  }

  return (
    <>
      <TopContainer pretitle="Overview" component={<Breadcrumbs />} to="/client/add" title="Client" btntxt="Add Client" />
      <div className="page-body mb-0">
      <ImageBreadcrumb imageUrl="../assets/img/banner2.jpg" pageName="Shop" />
        {/* <FilterArea form={<ClientFilterForm handleSubmit={handleSubmit} />} title="Client Search" /> */}
        <div className="container-xl">
          <div className='row'>
            <CategoryFilter/>
            {/* <CTable
              headers={headers}
              rows={getAllClientsStatus && getAllClientsStatus.data}
              changePage={changePage}
              filterProps={formik}
              handelSortChange={handelSortChange}
              setActionLinks={setActionLinks}
              searchable={false}
              total={formik.values.total}
              
            /> */}
          
          <div className='col-9 pt-4'>
          <div className="row mb-4">
            {products.slice(0, 6).map((product) => (
              <ProductShop key={product.id} product={product} />
            ))}
          </div>
          </div>
        </div>
        </div>
        <FollowUs/>
      </div>
      <CLoader show={loader} />
    </>
  )
}

export default Client;