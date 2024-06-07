import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../bread_crumbs";

function TopContainer({ title = "", btntxt = "", to = "" }) {
  return (
    <div className="container-xl">
      <div className="page-header d-print-none text-white">
        <div className="row g-2 align-items-center">
          {/* <div className="col">
            <div className="page-pretitle">
              <Breadcrumbs />
            </div>
            <h2 className="page-title">{title}</h2>
          </div> */}

          {btntxt !== "" && (
            <div className="col-12 col-md-auto ms-auto d-print-none">
              <div className="btn-list">
                <Link to={to} className="btn btn-primary ">
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
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                  {btntxt}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
