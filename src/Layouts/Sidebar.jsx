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
                        <>
                          <li className="menu-title">Ecommerce</li>
                          <li
                            className={
                              location.pathname === "/interests"
                                ? "mm-active"
                                : ""
                            }
                          >
                            <Link to="/interests">
                              <span>Intrests</span>
                            </Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/socials"
                                ? "mm-active"
                                : ""
                            }
                          >
                            <Link to="/socials">
                              <span>Social</span>
                            </Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/businesscategories"
                                ? "mm-active"
                                : ""
                            }
                          >
                            <Link to="/businesscategories">
                              <span>Business Categories</span>
                            </Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/payments"
                                ? "mm-active"
                                : ""
                            }
                          >
                            <Link to="/payments">
                              <span>Payments</span>
                            </Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/languages"
                                ? "mm-active"
                                : ""
                            }
                          >
                            <Link to="/languages">
                              <span>Languages</span>
                            </Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/terms" ? "mm-active" : ""
                            }
                          >
                            <Link to="/terms">
                              <span>Terms & Conditions</span>
                            </Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/privacy-policy"
                                ? "mm-active"
                                : ""
                            }
                          >
                            <Link to="/privacy-policy">
                              <span>Privacy Policy</span>
                            </Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/cookie-policy"
                                ? "mm-active"
                                : ""
                            }
                          >
                            <Link to="/cookie-policy">
                              <span>Cookie Policy</span>
                            </Link>
                          </li>
                        </>
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
