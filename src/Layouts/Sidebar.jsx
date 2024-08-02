import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Header from "./Header";

const Sidebar = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const [lookUp, setookUp] = useState(false);
  const [reportLookUp, setReportLookUp] = useState(false);

  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));

  const lookUpRef = useRef();
  const lookUpReportRef = useRef();

  const handleChange = () => {
    setSideBarState(!sideBarState);
  };
  useEffect(() => {
    if (sideBarState === true) {
      document.body.classList.add("vertical-collpsed");
    } else {
      document.body.classList.remove("vertical-collpsed");
    }
  }, [sideBarState]);

  const location = useLocation();

  return (
    <>
      <Header handleChange={handleChange} />
      <div className="vertical-menu">
        {/* LOGO */}
        <div className="navbar-brand-box">
          <Link to="/dashboard" className="logo logo-dark">
            <span className="logo-sm">
              <img src="/assets/images/logo-sm.png" alt="" height={30} />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/logo-dark.png" alt="" height={35} />
            </span>
          </Link>
          <Link to="/dashboard" className="logo logo-light">
            <span className="logo-sm">
              <img src="/assets/images/logo-sm.png" alt="" height={30} />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/logo-light.png" alt="" height={35} />
            </span>
          </Link>
        </div>
        {/* <button
          type="button"
          className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
          onClick={handleChange}
        >
          <i className="fa fa-fw fa-bars" />
        </button> */}
        <div data-simplebar="init" className="sidebar-menu-scroll">
          <div className="simplebar-wrapper" style={{ margin: 0 }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{ right: "-17px", bottom: 0 }}
              >
                <div
                  className="simplebar-content-wrapper"
                  style={{ height: "100%", overflow: "hidden scroll" }}
                >
                  <div className="simplebar-content" style={{ padding: 0 }}>
                    {/*- Sidemenu */}
                    <div id="sidebar-menu" className="mm-active">
                      {/* Left Menu Start */}
                      <ul
                        className="metismenu list-unstyled mm-show"
                        id="side-menu"
                      >
                        <li className="menu-title">Menu</li>
                        <li
                          className={
                            location.pathname === "/dashboard"
                              ? "mm-active"
                              : ""
                          }
                        >
                          <Link
                            to="/dashboard"
                            onClick={() =>
                              setookUp(false) && setReportLookUp(false)
                            }
                          >
                            <i className="uil-home-alt" />
                            <span>Dashboard</span>
                          </Link>
                        </li>
                        {adminInfo.role === "Admin" ||
                        adminInfo.role === "Shop Manager" ? (
                          <>
                            <li className="menu-title">Ecommerce</li>
                            <li
                              className={
                                location.pathname === "/all-products"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/all-products">
                                <span>Products</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/product/categories"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/product/categories">
                                <span>Categories</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/product/orders"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/product/orders">
                                <span>Orders</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/subscriptions"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/subscriptions">
                                <span>Subscriptions</span>
                              </Link>
                            </li>
                            {/* <li
                              className={
                                location.pathname === "/all-customers"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/all-customers">
                                <span>Customers</span>
                              </Link>
                            </li> */}

                            <li
                              className={
                                location.pathname === "/all-customers-orders"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/all-customers-orders">
                                <span>Customers</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/all-customers"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/all-customers">
                                <span>Signups Only</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/reviews"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/reviews">
                                <span>Reviews</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/coupons"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/coupons">
                                <span>Coupons</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/cities"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/cities">
                                <span>Cities</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/product/rejection"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/product/rejection">
                                <span>Rejection Reasons</span>
                              </Link>
                            </li>
                          </>
                        ) : null}

                        {adminInfo.role === "Admin" ||
                        adminInfo.role === "Content Writter" ? (
                          <>
                            <li className="menu-title">Blog Management</li>
                            <li
                              className={
                                location.pathname === "/post/all-posts"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link
                                to="/post/all-posts"
                                onClick={() =>
                                  setookUp(false) && setReportLookUp(false)
                                }
                              >
                                <i className="uil-home-alt" />
                                <span>Posts/Articles</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/post/categories"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link
                                to="/post/categories"
                                onClick={() =>
                                  setookUp(false) && setReportLookUp(false)
                                }
                              >
                                <i className="uil-dropbox" />
                                <span>Categories</span>
                              </Link>
                            </li>
                            <li className="menu-title">Health & Wellness</li>
                            <li
                              className={
                                location.pathname === "/symptoms"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link
                                to="/symptoms"
                                onClick={() =>
                                  setookUp(false) && setReportLookUp(false)
                                }
                              >
                                <i className="mdi mdi-stethoscope" />
                                <span>Symptoms</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/symptoms/categories"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link
                                to="/symptoms/categories"
                                onClick={() =>
                                  setookUp(false) && setReportLookUp(false)
                                }
                              >
                                <i className="uil-dropbox" />
                                <span>Categories</span>
                              </Link>
                            </li>
                          </>
                        ) : null}

                        {adminInfo.role === "Admin" ? (
                          <>
                            <li className="menu-title">Reports</li>
                            <li
                              className={
                                location.pathname === "/report/dashboard"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/dashboard">
                                <span>Reports Dashboard</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/report/montly"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/montly">
                                <span>Montly Orders Trend</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/report/currentMonth"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/currentMonth">
                                <span>Current Month Orders</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname ===
                                "/report/montlySubscription"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/montlySubscription">
                                <span>Montly Subscriptions</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/report/totalOrders"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/totalOrders">
                                <span>Total Orders With Statuses</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/report/skuTrends"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/skuTrends">
                                <span>SKUs Trend</span>
                              </Link>
                            </li>
                            {/* <li
                              className={
                                location.pathname === "/report/newReoccuring"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/newReoccuring">
                                <span>New Reoccuring Orders</span>
                              </Link>
                            </li> */}
                            {/* <li
                              className={
                                location.pathname ===
                                "/report/totalCitiesOrders"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/totalCitiesOrders">
                                <span>Top 10 Cities</span>
                              </Link>
                            </li> */}
                            <li
                              className={
                                location.pathname === "/report/topUsedSymtoms"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/topUsedSymtoms">
                                <span>Top Used Symptoms</span>
                              </Link>
                            </li>
                            {/* <li
                              className={
                                location.pathname === "/report/promocode"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/promocode">
                                <span>Promo Code Report</span>
                              </Link>
                            </li> */}
                            <li
                              className={
                                location.pathname === "/report/dau"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/dau">
                                <span>Daily Active Users</span>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname ===
                                "/report/customer-retention-and-acquisition-report"
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <Link to="/report/customer-retention-and-acquisition-report">
                                <span>Customer Retention And Acquisition</span>
                              </Link>
                            </li>
                          </>
                        ) : null}
                        <li className="menu-title">App Splasher</li>
                        <li
                          className={
                            location.pathname === "/promotion"
                              ? "mm-active"
                              : ""
                          }
                        >
                          <Link
                            to="/promotion"
                            onClick={() =>
                              setookUp(false) && setReportLookUp(false)
                            }
                          >
                            <i className="mdi mdi-bullhorn" />
                            <span>App Splasher</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Sidebar */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: 1668 }}
            />
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                display: "none",
              }}
            />
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: 41,
                transform: "translate3d(0px, 150px, 0px)",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
