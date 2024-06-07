import React, { useEffect } from "react";
import Breadcrumbs from "../../../common/components/bread_crumbs";
import TopContainer from "../../../common/components/overview";
import ProfileCard from "../../../common/components/profile_card";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { getAllUsersAction } from "../../../app-redux/staff/staffActions";
import { selectgetAllUsersStatus } from "../../../app-redux/staff/staffSlice";
import StaffFilterForm from "./Components/staff-filter-form";
import FilterArea from "../../../common/components/filter_area";
import ImageBreadcrumb from "common/components/breadcrumb/breadcrumb";
import FollowUs from "common/components/store_footer/store_footer";

function Staff() {
  const dispatch = useAppDispatch();

  const getAllUserStatus = useAppSelector(selectgetAllUsersStatus)

  const formik = useFormik({
    initialValues: {
      "pageNo": 1,
      "pageSize": 55,
      "userId": 0,
    },

  })

  useEffect(() => {
    // if (!(getAllUserStatus && getAllUserStatus.data)) {
    dispatch(getAllUsersAction(formik.values));
    // }
  }, []);

  useEffect(() => {
    // if (!(getAllUserStatus && getAllUserStatus.data)) {
    console.log("getAllUserStatus", getAllUserStatus);
    // 
    // }
  }, [getAllUserStatus]);

  const handleSubmit = (vals) => {
    let values = formik.values
    formik.setValues({ ...values, ...vals })

  }

  useEffect(() => {
    // if (!(getAllUserStatus && getAllUserStatus.data)) {
      dispatch(getAllUsersAction(formik.values));

    // 
    // }
  }, [formik.values]);


  return (
    <>
      <TopContainer
        title="Staff"
        component={<Breadcrumbs />}
        btntxt="Add Staff"
        to="/staff/add"
      />
      <div className="page-body mb-0">
      <ImageBreadcrumb imageUrl="../assets/img/banner5.jpg" pageName="Furnit Care" />
        {/* <FilterArea form={<StaffFilterForm handleSubmit={handleSubmit} />} title="Staff Search" /> */}
        <div className="container-xl">
          {/* <div className="row row-cards">
            {getAllUserStatus && getAllUserStatus.data.map((user) => (
              < div className="col-md-6 col-lg-3" >
                <ProfileCard user={user} />

              </div>
            ))}
          </div> */}
          {/* <div className="d-flex mt-4">
            <ul className="pagination ms-auto">
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  next{" "}
                 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>  */}
          
        </div>
        <FollowUs/>
      </div>

    </>
  );
}

export default Staff;
