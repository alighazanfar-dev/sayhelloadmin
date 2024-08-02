import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  BsCart,
  BsCartCheck,
  BsWallet,
  BsPeople,
  BsBell,
  BsClockHistory,
} from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - SayHello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-4">
                <div className="card bg-primary cardGradient">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-sm-8">
                        <p className="tracking-in-expand text-white font-size-18">
                          <b className="fontset" style={{ fontSize: 24 }}>
                            Welcome to Embrace Dashboard
                          </b>
                          <br />
                          It shows what's happening in your account today for
                          better outreach
                        </p>
                        <div className="mt-4">
                          <Link
                            to="/product/orders"
                            className="tracking-in-expand btn cardButton waves-effect waves-light"
                          >
                            See All Orders
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="mt-4 mt-sm-0">
                          <img
                            src="/assets/images/cartoon.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsWallet />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            Rs
                            <span data-plugin="counterup">
                              123
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Total Revenue
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsPeople />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                             123
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Total Customers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsBell />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                              123
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Total Subscriptions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsCart />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                             123
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Total Orders
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsClockHistory />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                             123
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Pending Orders
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsCartCheck />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                             123
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Delivered Orders
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
