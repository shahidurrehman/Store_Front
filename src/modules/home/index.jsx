import ImageBreadcrumb from "common/components/breadcrumb/breadcrumb";
import ProductCard from "common/components/c_product/ProductCard";
import ProductList from "common/components/c_product/ProductCard";
import FeatureProduct from "common/components/feature_products/feature_products";
import ProfileCard from "common/components/profile_card";
import Example from "common/components/slider/slider";
import FollowUs from "common/components/store_footer/store_footer";
import React from "react";
import Breadcrumbs from "../../common/components/bread_crumbs";
import TopContainer from "../../common/components/overview";
// import car1 from './imag1.jpg';
import './style.css';

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

function Home() {
  return (
    <>

      <TopContainer pretitle="Overview" component={<Breadcrumbs />} title="Dashboard" />
      <div className="page-body mt-0 mb-0">
        <Example />
        <div className="container-xl pt-3">
          <div class="row g-2 g-md-3 mb-3">
            <div class="col-lg-8">
              <div class="row g-2 g-md-3">
                <div class="col-12">
                  <a data-fslightbox="gallery"
                    href="./static/photos/finances-us-dollars-and-bitcoins-currency-money-3.jpg">

                    <div class="img-responsive img-responsive-4x1 border div-bg-8"
                    >
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="row g-2 g-md-3">
                <div class="col-12">
                  <a data-fslightbox="gallery" href="#">

                    <div class="img-responsive img-responsive-1x1 border div-bg-8"
                    ></div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-12 pt-3">
              {/* <div class="card card bg-transparent border-0 shadow-0"> */}
                <ul class="nav nav-tabs card-header-tabs d-flex justify-content-center bg-transparent mb-3" data-bs-toggle="tabs">
                  <li class="nav-item">
                    <a href="#tabs-home-14" class="nav-link border-0 active h2" data-bs-toggle="tab"><strong>New Arrivals</strong></a>
                  </li>
                  <li class="nav-item">
                    <a href="#tabs-profile-14" class="nav-link border-0 h2" data-bs-toggle="tab"><strong>Best Sellers</strong></a>
                  </li>
                  <li class="nav-item">
                    <a href="#tabs-activity-14" class="nav-link border-0 h2" data-bs-toggle="tab"><strong>Sale</strong></a>
                  </li>
                </ul>

                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane fade active show" id="tabs-home-14">

                      <div>
                        <div className="row">
                          {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-profile-14">

                      <div><div className="row">
                        {products.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div></div>
                    </div>
                    <div class="tab-pane fade" id="tabs-activity-14">
                      {/* <h4>Activity tab</h4> */}
                      <div><div className="row">
                        {products.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div></div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>

            {/* <div class="col-md-3 mb-2">
                <div class="card card-sm">
                  <div class="ribbon ribbon-top ribbon-bookmark bg-yellow">
                    Sale
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">Center tables</h3>
                    <div class="box">
                      <div class="img-responsive img-responsive-1x1 rounded border div-bg">
                      </div>
                      <div class="box-overlay"></div>
                      <div class="box-content">
                        <div class="inner-content">
                          <span class="post">
                            <ul class="icon position-absolute top-0 px-5">
                              <li class="text-center">
                                <div class="align-items-center dve">
                                  <button class="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">


                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                      viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                      <path
                                        d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>

                                    <span class="switch-icon-b text-red">

                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-filled" width="24"
                                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                          d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </li>
                              <li class="pt-3 text-center"><a href="./shop/product-view.html">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye"
                                  width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                  stroke="currentColor" fill="none" stroke-linecap="round"
                                  stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0">
                                  </path>
                                  <path
                                    d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6">
                                  </path>
                                </svg></a>
                              </li>
                            </ul>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 px-1">
                      <div class="row">
                        <div class="mt-2">
                          <div class="row">
                            <div class="col">
                              <div class="avatar-list avatar-list-stacked">
                                <a href="#" class="text-decoration-none undrlne text-reset">
                                  <h4>Add to Cart</h4>
                                </a>


                              </div>
                            </div>
                            <div class="col-auto">
                              <h4 class="mb-0">Rs:1000</h4>
                              <small><strike>Rs:1200</strike></small>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
          <div class="d-flex justify-content-center">
            <ul>
              <li class="d-inline-flex p-2">
                <h2 class="text-secondary">Featured Products</h2>
              </li>
              <div class="row px-3 bg-green">
                <hr class="pt-0 m-0 p-0 text-green"></hr>
              </div>
            </ul>
          </div>
          <div className="row mb-4">
            {products.slice(0, 4).map((product) => (
              <FeatureProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
        <FollowUs/>
        {/* <div className="container-xl">
          <div className="row row-deck row-cards pt-3">
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">Sales</div>
                    <div className="ms-auto lh-1">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle text-muted"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Last 7 days
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item active" href="#">
                            Last 7 days
                          </a>
                          <a className="dropdown-item" href="#">
                            Last 30 days
                          </a>
                          <a className="dropdown-item" href="#">
                            Last 3 months
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h1 mb-3">75%</div>
                  <div className="d-flex mb-2">
                    <div>Conversion rate</div>
                    <div className="ms-auto">
                      <span className="text-green d-inline-flex align-items-center lh-1">
                        7%{" "}
                       
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon ms-1"
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
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "75%" }}
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="75% Complete"
                    >
                      <span className="visually-hidden">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">Revenue</div>
                    <div className="ms-auto lh-1">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle text-muted"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Last 7 days
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item active" href="#">
                            Last 7 days
                          </a>
                          <a className="dropdown-item" href="#">
                            Last 30 days
                          </a>
                          <a className="dropdown-item" href="#">
                            Last 3 months
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <div className="h1 mb-0 me-2">$4,300</div>
                    <div className="me-auto">
                      <span className="text-green d-inline-flex align-items-center lh-1">
                        8%{" "}
                       
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon ms-1"
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
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div id="chart-revenue-bg" className="chart-sm" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">New clients</div>
                    <div className="ms-auto lh-1">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle text-muted"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Last 7 days
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item active" href="#">
                            Last 7 days
                          </a>
                          <a className="dropdown-item" href="#">
                            Last 30 days
                          </a>
                          <a className="dropdown-item" href="#">
                            Last 3 months
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <div className="h1 mb-3 me-2">6,782</div>
                    <div className="me-auto">
                      <span className="text-yellow d-inline-flex align-items-center lh-1">
                        0%{" "}
                     
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon ms-1"
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
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div id="chart-new-clients" className="chart-sm" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">Active users</div>
                    <div className="ms-auto lh-1">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle text-muted"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Last 7 days
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item active" href="#">
                            Last 7 days
                          </a>
                          <a className="dropdown-item" href="#">
                            Last 30 days
                          </a>
                          <a className="dropdown-item" href="#">
                            Last 3 months
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <div className="h1 mb-3 me-2">2,986</div>
                    <div className="me-auto">
                      <span className="text-green d-inline-flex align-items-center lh-1">
                        4%{" "}
                       
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon ms-1"
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
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div id="chart-active-users" className="chart-sm" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row row-cards">
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-primary text-white avatar">
                     
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
                              <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                              <path d="M12 3v3m0 12v3" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">132 Sales</div>
                          <div className="text-muted">12 waiting payments</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-green text-white avatar">
                            
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
                              <circle cx={6} cy={19} r={2} />
                              <circle cx={17} cy={19} r={2} />
                              <path d="M17 17h-11v-14h-2" />
                              <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">78 Orders</div>
                          <div className="text-muted">32 shipped</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-twitter text-white avatar">
                          
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
                              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">623 Shares</div>
                          <div className="text-muted">16 today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-facebook text-white avatar">
                           
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
                              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">132 Likes</div>
                          <div className="text-muted">21 today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           
            <div className="col-lg-6">
              <div className="row row-cards">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <p className="mb-3">
                        Using Storage <strong>6854.45 MB </strong>of 8 GB
                      </p>
                      <div className="progress progress-separated mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "44%" }}
                          aria-label="Regular"
                        />
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "19%" }}
                          aria-label="System"
                        />
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "9%" }}
                          aria-label="Shared"
                        />
                      </div>
                      <div className="row">
                        <div className="col-auto d-flex align-items-center pe-2">
                          <span className="legend me-2 bg-primary" />
                          <span>Regular</span>
                          <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                            915MB
                          </span>
                        </div>
                        <div className="col-auto d-flex align-items-center px-2">
                          <span className="legend me-2 bg-info" />
                          <span>System</span>
                          <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                            415MB
                          </span>
                        </div>
                        <div className="col-auto d-flex align-items-center px-2">
                          <span className="legend me-2 bg-success" />
                          <span>Shared</span>
                          <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                            201MB
                          </span>
                        </div>
                        <div className="col-auto d-flex align-items-center ps-2">
                          <span className="legend me-2" />
                          <span>Free</span>
                          <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                            612MB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card" style={{ height: "28rem" }}>
                    <div className="card-body card-body-scrollable card-body-scrollable-shadow">
                      <div className="divide-y">
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span className="avatar">JL</span>
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Jeffie Lewzey</strong> commented on your{" "}
                                <strong>"I'm not a witch."</strong> post.
                              </div>
                              <div className="text-muted">yesterday</div>
                            </div>
                            <div className="col-auto align-self-center">
                              <div className="badge bg-primary" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/002m.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                It's <strong>Mallory Hulme</strong>'s birthday.
                                Wish him well!
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                            <div className="col-auto align-self-center">
                              <div className="badge bg-primary" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/003m.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Dunn Slane</strong> posted{" "}
                                <strong>"Well, what do you want?"</strong>.
                              </div>
                              <div className="text-muted">today</div>
                            </div>
                            <div className="col-auto align-self-center">
                              <div className="badge bg-primary" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/000f.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Emmy Levet</strong> created a new
                                project <strong>Morning alarm clock</strong>.
                              </div>
                              <div className="text-muted">4 days ago</div>
                            </div>
                            <div className="col-auto align-self-center">
                              <div className="badge bg-primary" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/001f.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Maryjo Lebarree</strong> liked your
                                photo.
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span className="avatar">EP</span>
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Egan Poetz</strong> registered new
                                client as <strong>Trilia</strong>.
                              </div>
                              <div className="text-muted">yesterday</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/002f.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Kellie Skingley</strong> closed a new
                                deal on project{" "}
                                <strong>Pen Pineapple Apple Pen</strong>.
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/003f.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Christabel Charlwood</strong> created a
                                new project for <strong>Wikibox</strong>.
                              </div>
                              <div className="text-muted">4 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span className="avatar">HS</span>
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Haskel Shelper</strong> change status of{" "}
                                <strong>Tabler Icons</strong> from{" "}
                                <strong>open</strong> to <strong>closed</strong>
                                .
                              </div>
                              <div className="text-muted">today</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/006m.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Lorry Mion</strong> liked{" "}
                                <strong>Tabler UI Kit</strong>.
                              </div>
                              <div className="text-muted">yesterday</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/004f.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Leesa Beaty</strong> posted new video.
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/007m.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Perren Keemar</strong> and 3 others
                                followed you.
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span className="avatar">SA</span>
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Sunny Airey</strong> upload 3 new photos
                                to category <strong>Inspirations</strong>.
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/009m.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Geoffry Flaunders</strong> made a{" "}
                                <strong>$10</strong> donation.
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/010m.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Thatcher Keel</strong> created a
                                profile.
                              </div>
                              <div className="text-muted">3 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/005f.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Dyann Escala</strong> hosted the event{" "}
                                <strong>Tabler UI Birthday</strong>.
                              </div>
                              <div className="text-muted">4 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./static/avatars/006f.jpg)",
                                }}
                              />
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Avivah Mugleston</strong> mentioned you
                                on <strong>Best of 2020</strong>.
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-auto">
                              <span className="avatar">AA</span>
                            </div>
                            <div className="col">
                              <div className="text-truncate">
                                <strong>Arlie Armstead</strong> sent a Review
                                Request to <strong>Amanda Blake</strong>.
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="card-title">Development activity</div>
                </div>
                <div className="position-relative">
                  <div className="position-absolute top-0 left-0 px-3 mt-1 w-75">
                    <div className="row g-2">
                      <div className="col-auto">
                        <div
                          className="chart-sparkline chart-sparkline-square"
                          id="sparkline-activity"
                        />
                      </div>
                      <div className="col">
                        <div>Today's Earning: $4,262.40</div>
                        <div className="text-muted">
                         
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-inline text-green"
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
                            <polyline points="3 17 9 11 13 15 21 7" />
                            <polyline points="14 7 21 7 21 14" />
                          </svg>
                          +5% more than yesterday
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="chart-development-activity" />
                </div>
                <div className="card-table table-responsive">
                  <table className="table table-vcenter">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Commit</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1">
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/000m.jpg)",
                            }}
                          />
                        </td>
                        <td className="td-truncate">
                          <div className="text-truncate">
                            Fix dart Sass compatibility (#29755)
                          </div>
                        </td>
                        <td className="text-nowrap text-muted">28 Nov 2019</td>
                      </tr>
                      <tr>
                        <td className="w-1">
                          <span className="avatar avatar-sm">JL</span>
                        </td>
                        <td className="td-truncate">
                          <div className="text-truncate">
                            Change deprecated html tags to text decoration
                            classes (#29604)
                          </div>
                        </td>
                        <td className="text-nowrap text-muted">27 Nov 2019</td>
                      </tr>
                      <tr>
                        <td className="w-1">
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/002m.jpg)",
                            }}
                          />
                        </td>
                        <td className="td-truncate">
                          <div className="text-truncate">
                            justify-content:between ⇒
                            justify-content:space-between (#29734)
                          </div>
                        </td>
                        <td className="text-nowrap text-muted">26 Nov 2019</td>
                      </tr>
                      <tr>
                        <td className="w-1">
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/003m.jpg)",
                            }}
                          />
                        </td>
                        <td className="td-truncate">
                          <div className="text-truncate">
                            Update change-version.js (#29736)
                          </div>
                        </td>
                        <td className="text-nowrap text-muted">26 Nov 2019</td>
                      </tr>
                      <tr>
                        <td className="w-1">
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/000f.jpg)",
                            }}
                          />
                        </td>
                        <td className="td-truncate">
                          <div className="text-truncate">
                            Regenerate package-lock.json (#29730)
                          </div>
                        </td>
                        <td className="text-nowrap text-muted">25 Nov 2019</td>
                      </tr>
                      <tr>
                        <td className="w-1">
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/001f.jpg)",
                            }}
                          />
                        </td>
                        <td className="td-truncate">
                          <div className="text-truncate">
                            Some minor text tweaks
                          </div>
                        </td>
                        <td className="text-nowrap text-muted">24 Nov 2019</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card card-md">
                <div className="card-stamp card-stamp-lg">
                  <div className="card-stamp-icon bg-primary">
                   
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
                      <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                      <line x1={10} y1={10} x2="10.01" y2={10} />
                      <line x1={14} y1={10} x2="14.01" y2={10} />
                      <path d="M10 14a3.5 3.5 0 0 0 4 0" />
                    </svg>
                  </div>
                </div>
             
              </div>
            </div>
            

           
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Social Media Traffic</h3>
                </div>
                <table className="table card-table table-vcenter">
                  <thead>
                    <tr>
                      <th>Network</th>
                      <th colSpan={2}>Visitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Instagram</td>
                      <td>3,550</td>
                      <td className="w-50">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "71.0%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Twitter</td>
                      <td>1,798</td>
                      <td className="w-50">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "35.96%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Facebook</td>
                      <td>1,245</td>
                      <td className="w-50">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "24.9%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>TikTok</td>
                      <td>986</td>
                      <td className="w-50">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "19.72%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Pinterest</td>
                      <td>854</td>
                      <td className="w-50">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "17.08%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>VK</td>
                      <td>650</td>
                      <td className="w-50">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "13.0%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Pinterest</td>
                      <td>420</td>
                      <td className="w-50">
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "8.4%" }}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Tasks</h3>
                </div>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter">
                    <tbody>
                      <tr>
                        <td className="w-1 pe-0">
                          <input
                            type="checkbox"
                            className="form-check-input m-0 align-middle"
                            aria-label="Select task"
                            defaultChecked
                          />
                        </td>
                        <td className="w-100">
                          <a href="#" className="text-reset">
                            Extend the data model.
                          </a>
                        </td>
                        <td className="text-nowrap text-muted">
                         
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
                            <rect x={4} y={5} width={16} height={16} rx={2} />
                            <line x1={16} y1={3} x2={16} y2={7} />
                            <line x1={8} y1={3} x2={8} y2={7} />
                            <line x1={4} y1={11} x2={20} y2={11} />
                            <line x1={11} y1={15} x2={12} y2={15} />
                            <line x1={12} y1={15} x2={12} y2={18} />
                          </svg>
                          August 04, 2021
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                         
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
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                            2/7
                          </a>
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                           
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
                              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                              <line x1={8} y1={9} x2={16} y2={9} />
                              <line x1={8} y1={13} x2={14} y2={13} />
                            </svg>
                            3
                          </a>
                        </td>
                        <td>
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/000m.jpg)",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1 pe-0">
                          <input
                            type="checkbox"
                            className="form-check-input m-0 align-middle"
                            aria-label="Select task"
                          />
                        </td>
                        <td className="w-100">
                          <a href="#" className="text-reset">
                            Verify the event flow.
                          </a>
                        </td>
                        <td className="text-nowrap text-muted">
                         
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
                            <rect x={4} y={5} width={16} height={16} rx={2} />
                            <line x1={16} y1={3} x2={16} y2={7} />
                            <line x1={8} y1={3} x2={8} y2={7} />
                            <line x1={4} y1={11} x2={20} y2={11} />
                            <line x1={11} y1={15} x2={12} y2={15} />
                            <line x1={12} y1={15} x2={12} y2={18} />
                          </svg>
                          January 03, 2019
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                            
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
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                            3/10
                          </a>
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                           
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
                              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                              <line x1={8} y1={9} x2={16} y2={9} />
                              <line x1={8} y1={13} x2={14} y2={13} />
                            </svg>
                            6
                          </a>
                        </td>
                        <td>
                          <span className="avatar avatar-sm">JL</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1 pe-0">
                          <input
                            type="checkbox"
                            className="form-check-input m-0 align-middle"
                            aria-label="Select task"
                          />
                        </td>
                        <td className="w-100">
                          <a href="#" className="text-reset">
                            Database backup and maintenance
                          </a>
                        </td>
                        <td className="text-nowrap text-muted">
                         
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
                            <rect x={4} y={5} width={16} height={16} rx={2} />
                            <line x1={16} y1={3} x2={16} y2={7} />
                            <line x1={8} y1={3} x2={8} y2={7} />
                            <line x1={4} y1={11} x2={20} y2={11} />
                            <line x1={11} y1={15} x2={12} y2={15} />
                            <line x1={12} y1={15} x2={12} y2={18} />
                          </svg>
                          December 28, 2018
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                            
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
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                            0/6
                          </a>
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                           
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
                              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                              <line x1={8} y1={9} x2={16} y2={9} />
                              <line x1={8} y1={13} x2={14} y2={13} />
                            </svg>
                            1
                          </a>
                        </td>
                        <td>
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/002m.jpg)",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1 pe-0">
                          <input
                            type="checkbox"
                            className="form-check-input m-0 align-middle"
                            aria-label="Select task"
                            defaultChecked
                          />
                        </td>
                        <td className="w-100">
                          <a href="#" className="text-reset">
                            Identify the implementation team.
                          </a>
                        </td>
                        <td className="text-nowrap text-muted">
                         
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
                            <rect x={4} y={5} width={16} height={16} rx={2} />
                            <line x1={16} y1={3} x2={16} y2={7} />
                            <line x1={8} y1={3} x2={8} y2={7} />
                            <line x1={4} y1={11} x2={20} y2={11} />
                            <line x1={11} y1={15} x2={12} y2={15} />
                            <line x1={12} y1={15} x2={12} y2={18} />
                          </svg>
                          November 07, 2020
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                           
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
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                            6/10
                          </a>
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                           
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
                              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                              <line x1={8} y1={9} x2={16} y2={9} />
                              <line x1={8} y1={13} x2={14} y2={13} />
                            </svg>
                            12
                          </a>
                        </td>
                        <td>
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/003m.jpg)",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1 pe-0">
                          <input
                            type="checkbox"
                            className="form-check-input m-0 align-middle"
                            aria-label="Select task"
                          />
                        </td>
                        <td className="w-100">
                          <a href="#" className="text-reset">
                            Define users and workflow
                          </a>
                        </td>
                        <td className="text-nowrap text-muted">
                        
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
                            <rect x={4} y={5} width={16} height={16} rx={2} />
                            <line x1={16} y1={3} x2={16} y2={7} />
                            <line x1={8} y1={3} x2={8} y2={7} />
                            <line x1={4} y1={11} x2={20} y2={11} />
                            <line x1={11} y1={15} x2={12} y2={15} />
                            <line x1={12} y1={15} x2={12} y2={18} />
                          </svg>
                          November 23, 2021
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                            
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
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                            3/7
                          </a>
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                           
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
                              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                              <line x1={8} y1={9} x2={16} y2={9} />
                              <line x1={8} y1={13} x2={14} y2={13} />
                            </svg>
                            5
                          </a>
                        </td>
                        <td>
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/000f.jpg)",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1 pe-0">
                          <input
                            type="checkbox"
                            className="form-check-input m-0 align-middle"
                            aria-label="Select task"
                            defaultChecked
                          />
                        </td>
                        <td className="w-100">
                          <a href="#" className="text-reset">
                            Check Pull Requests
                          </a>
                        </td>
                        <td className="text-nowrap text-muted">
                          
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
                            <rect x={4} y={5} width={16} height={16} rx={2} />
                            <line x1={16} y1={3} x2={16} y2={7} />
                            <line x1={8} y1={3} x2={8} y2={7} />
                            <line x1={4} y1={11} x2={20} y2={11} />
                            <line x1={11} y1={15} x2={12} y2={15} />
                            <line x1={12} y1={15} x2={12} y2={18} />
                          </svg>
                          January 14, 2021
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                          
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
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                            2/9
                          </a>
                        </td>
                        <td className="text-nowrap">
                          <a href="#" className="text-muted">
                           
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
                              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                              <line x1={8} y1={9} x2={16} y2={9} />
                              <line x1={8} y1={13} x2={14} y2={13} />
                            </svg>
                            3
                          </a>
                        </td>
                        <td>
                          <span
                            className="avatar avatar-sm"
                            style={{
                              backgroundImage: "url(./static/avatars/001f.jpg)",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Invoices</h3>
                </div>
                <div className="card-body border-bottom py-3">
                  <div className="d-flex">
                    <div className="text-muted">
                      Show
                      <div className="mx-2 d-inline-block">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          defaultValue={8}
                          size={3}
                          aria-label="Invoices count"
                        />
                      </div>
                      entries
                    </div>
                    <div className="ms-auto text-muted">
                      Search:
                      <div className="ms-2 d-inline-block">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          aria-label="Search invoice"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap datatable">
                    <thead>
                      <tr>
                        <th className="w-1">
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select all invoices"
                          />
                        </th>
                        <th className="w-1">
                          No.{" "}
                       
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-sm text-dark icon-thick"
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
                            <polyline points="6 15 12 9 18 15" />
                          </svg>
                        </th>
                        <th>Invoice Subject</th>
                        <th>Client</th>
                        <th>VAT No.</th>
                        <th>Created</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-muted">001401</span>
                        </td>
                        <td>
                          <a
                            href="invoice.html"
                            className="text-reset"
                            tabIndex={-1}
                          >
                            Design Works
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-country-us" />
                          Carlson Limited
                        </td>
                        <td>87956621</td>
                        <td>15 Dec 2017</td>
                        <td>
                          <span className="badge bg-success me-1" /> Paid
                        </td>
                        <td>$887</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
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
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-muted">001402</span>
                        </td>
                        <td>
                          <a
                            href="invoice.html"
                            className="text-reset"
                            tabIndex={-1}
                          >
                            UX Wireframes
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-country-gb" />
                          Adobe
                        </td>
                        <td>87956421</td>
                        <td>12 Apr 2017</td>
                        <td>
                          <span className="badge bg-warning me-1" /> Pending
                        </td>
                        <td>$1200</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
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
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-muted">001403</span>
                        </td>
                        <td>
                          <a
                            href="invoice.html"
                            className="text-reset"
                            tabIndex={-1}
                          >
                            New Dashboard
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-country-de" />
                          Bluewolf
                        </td>
                        <td>87952621</td>
                        <td>23 Oct 2017</td>
                        <td>
                          <span className="badge bg-warning me-1" /> Pending
                        </td>
                        <td>$534</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
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
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-muted">001404</span>
                        </td>
                        <td>
                          <a
                            href="invoice.html"
                            className="text-reset"
                            tabIndex={-1}
                          >
                            Landing Page
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-country-br" />
                          Salesforce
                        </td>
                        <td>87953421</td>
                        <td>2 Sep 2017</td>
                        <td>
                          <span className="badge bg-secondary me-1" /> Due in 2
                          Weeks
                        </td>
                        <td>$1500</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
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
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-muted">001405</span>
                        </td>
                        <td>
                          <a
                            href="invoice.html"
                            className="text-reset"
                            tabIndex={-1}
                          >
                            Marketing Templates
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-country-pl" />
                          Printic
                        </td>
                        <td>87956621</td>
                        <td>29 Jan 2018</td>
                        <td>
                          <span className="badge bg-danger me-1" /> Paid Today
                        </td>
                        <td>$648</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
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
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-muted">001406</span>
                        </td>
                        <td>
                          <a
                            href="invoice.html"
                            className="text-reset"
                            tabIndex={-1}
                          >
                            Sales Presentation
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-country-br" />
                          Tabdaq
                        </td>
                        <td>87956621</td>
                        <td>4 Feb 2018</td>
                        <td>
                          <span className="badge bg-secondary me-1" /> Due in 3
                          Weeks
                        </td>
                        <td>$300</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
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
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-muted">001407</span>
                        </td>
                        <td>
                          <a
                            href="invoice.html"
                            className="text-reset"
                            tabIndex={-1}
                          >
                            Logo &amp; Print
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-country-us" />
                          Apple
                        </td>
                        <td>87956621</td>
                        <td>22 Mar 2018</td>
                        <td>
                          <span className="badge bg-success me-1" /> Paid Today
                        </td>
                        <td>$2500</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
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
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-muted">001408</span>
                        </td>
                        <td>
                          <a
                            href="invoice.html"
                            className="text-reset"
                            tabIndex={-1}
                          >
                            Icons
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-country-pl" />
                          Tookapic
                        </td>
                        <td>87956621</td>
                        <td>13 May 2018</td>
                        <td>
                          <span className="badge bg-success me-1" /> Paid Today
                        </td>
                        <td>$940</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
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
                </div>
                <div className="card-footer d-flex align-items-center">
                  <p className="m-0 text-muted">
                    Showing <span>1</span> to <span>8</span> of <span>16</span>{" "}
                    entries
                  </p>
                  <ul className="pagination m-0 ms-auto">
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
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
