import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Interest = () => {
  return (
    <>
      <Helmet>
        <title>Intreset - SayHello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Intreset</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Intreset</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Coupon Code
                        </label>
                        <div
                          className="col-md-12"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <input
                            required
                            style={{ marginRight: "20px" }}
                            className="form-control"
                            type="text"
                          />
                          <span>
                            <i
                              className="mdi mdi-wallet-giftcard iconsize"
                              title="Auto-Generate Coupon"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="endtimedate"
                          className="col-md-12 col-form-label"
                        >
                          End Time
                        </label>
                        <div className="col-md-12">
                          <input
                            id="endtimedate"
                            type="date"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Discount In
                        </label>
                        <div className="col-md-12">
                          <div>
                            <div className="form-check mb-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="formRadios"
                                id="percentage"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="percentage"
                              >
                                Percentage
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="formRadios"
                                id="fixedvalue"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="fixedvalue"
                              >
                                Fixed Value
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Discount Value (in{" "}
                        </label>
                        <div className="col-md-12">
                          <input
                            required
                            className="form-control"
                            type="number"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Maximum Usage
                        </label>
                        <div className="col-md-12">
                          <input
                            required
                            className="form-control"
                            type="number"
                            min={0}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Minimum Amount
                        </label>
                        <div className="col-md-12">
                          <input
                            required
                            className="form-control"
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{ width: "100%" }}
                        >
                          Submit form
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped mb-0">
                        <thead>
                          <tr>
                            <th>Code</th>
                            <th>End Time</th>
                            <th>Max Usage</th>
                            <th>Min Amount</th>
                            <th>Coupons Used</th>
                            <th>Discount</th>
                            <th>Multi-Use</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1111</td>
                            <td>1111</td>
                            <td>1111</td>
                            <td>1111</td>
                            <td>1111</td>
                            <td>1111</td>
                            <td>
                              {" "}
                              <div className="form-check form-switch form-switch-md mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customSwitchsizemd"
                                />
                              </div>
                            </td>
                            <th>
                              <div className="form-check form-switch form-switch-md mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customSwitchsizemd"
                                />
                              </div>
                            </th>
                            <td>
                              <i className="mdi mdi-trash-can-outline iconsize" />
                              <i className="mdi mdi-pencil-box-outline iconsize" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default Interest;
