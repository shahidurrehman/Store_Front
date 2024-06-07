import React, { useEffect, useState } from "react";
import MainMenu from "./mainMenu";
import { ROUTES } from "../../../routes/routes";
import { Link } from "react-router-dom";
import { getProfileAction, logOutAction } from "../../../app-redux/auth/authActions";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import CLoader from "../loader";
import { selectStatus } from "../../../app-redux/auth/authSlice";
import { selectUser } from "../../../app-redux/auth/authSlice";
import { selectStaffStatus } from "../../../app-redux/staff/staffSlice";
import { bodyHasClass, toggleBodyClass } from "../../utils/app.util";
import { IconHeart, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import ListItem from "../shop_cart_list/shopcartlist";

const Header = ({ className }) => {


  const dispatch = useAppDispatch();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loader, showLoader] = useState(false)

  const authStatus = useAppSelector(selectStatus);
  const staffStatus = useAppSelector(selectStaffStatus);
  const currentUser = useAppSelector(selectUser);

  useEffect(() => {
    if (authStatus === "loading") {
      showLoader(true)
    } else if (staffStatus === "loading") {
      showLoader(true)
    } else {
      showLoader(false)
    }
  }, [authStatus, staffStatus]);

  const logout = () => {
    dispatch(logOutAction());
  }

  useEffect(() => {
    dispatch(getProfileAction())
  }, [])

  const changeTheme = (className) => {
    toggleBodyClass(className);
    const s = bodyHasClass(className);
    if (s === true) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  };
  return (
    <header className="navbar navbar-expand-md navbar-light d-print-none fixed-top">
      <div className="container-fluid px-5 py-3">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href=".">
            <img
              src="/assets\img\logo4.png"
              width={110}
              height={32}
              alt="AIC"
              className="navbar-brand-image rounded"
            />
          </a>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
        <span
                className="nav-link px-0 cursor-pointer"
                title="Enable light mode"
                // data-bs-toggle="tooltip"
                // data-bs-placement="bottom"
                onClick={() => changeTheme("theme-dark")}
              >
                {isDarkMode ?  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>}
              </span>
          <div className="d-none d-md-flex">
            <div className="nav-item dropdown d-none d-md-flex me-2">
              <a
                href="#"
                className="nav-link px-0"
                data-bs-toggle="dropdown"
                tabIndex={-1}
                aria-label="Show notifications"
              >
                <IconSearch/>
                {/* <svg xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                  <path d="M21 21l-6 -6"></path>
                </svg> */}
                {/* <span className="badge bg-red" /> */}
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Last updates</h3>
                  </div>
                  <div className="list-group list-group-flush list-group-hoverable">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot status-dot-animated bg-red d-block" />
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 1
                          </a>
                          <div className="d-block text-muted text-truncate mt-n1">
                            Change deprecated html tags to text decoration
                            classes (#29604)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot d-block" />
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 2
                          </a>
                          <div className="d-block text-muted text-truncate mt-n1">
                            justify-content:between ⇒
                            justify-content:space-between (#29734)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions show">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-yellow"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot d-block" />
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 3
                          </a>
                          <div className="d-block text-muted text-truncate mt-n1">
                            Update change-version.js (#29736)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-muted"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot status-dot-animated bg-green d-block" />
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 4
                          </a>
                          <div className="d-block text-muted text-truncate mt-n1">
                            Regenerate package-lock.json (#29730)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-muted"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-flex">
            <span
              // href="#" 
              className="cursor-pointer nav-link d-flex lh-1 p-0 text-decoration-none"
              // className="nav-link d-flex lh-1 p-0 text-decoration-none "
              // data-bs-toggle="dropdown"
              // aria-label="Open user menu"
            >
              {/* <span
                className="avatar avatar-sm"
                style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
              /> */}

              {/* <img
                className="avatar avatar-sm  avatar-rounded text-muted"
                src={` https://ui-avatars.com/api/?name=${currentUser.name}`}
              /> */}
              <Link to="/whishlist">
              <span className="bge-icn bge-icn-sm bg-red">0</span>
              <IconHeart/>
              </Link>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart me-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg> */}
              </span>
              </div>
              
              <div className="d-none d-md-flex">
              <a
              href="#"
              className="nav-link d-flex lh-1 p-0"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
                {/* <div>{currentUser.name}</div> */}
                {/* <div className="mt-1 small text-muted">{currentUser.designation}</div> */}
                <span className="bge-icn bge-icn-sm bg-red">0</span>
                <IconShoppingCart/>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 17h-11v-14h-2"></path>
                  <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
                  <path d="M15 6h6m-3 -3v6"></path>
                </svg> */}
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
           <ListItem/>
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center justify-content-center">
            <ul className="navbar-nav">
              {ROUTES.filter((route) => route.guard).map((route, i) => (
                <MainMenu route={route} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <CLoader show={loader} />
    </header >
  );
};

export default Header;
