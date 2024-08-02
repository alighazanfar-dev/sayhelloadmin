import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import AdminServices from "../../services/AdminServices";
import { notifyError, notifySuccess } from "../../utils/toast";

const LockScreen = () => {
  const [password, setPassword] = useState("");

  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const TimeOut = 0.5;

    AdminServices.loginAdmin({
      email: adminInfo.email,
      password: password,
    })
      .then((res) => {
        if (res) {
          notifySuccess("Welcome Back!");
          secureLocalStorage.setItem("adminInfo", JSON.stringify(res), {
            expires: TimeOut,
          });
          navigate(-1);
        }
      })
      .catch((err) => {
        notifyError(err ? err.response.data.message : err.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Lock-Screen | Say Hello</title>
        <body className="authentication-bg" />
      </Helmet>

      <div className="account-pages my-5  pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div>
                <div className="card">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <div className="text-center">
                        <Link to="/" className="mb-3 d-block auth-logo">
                          <img
                            src="/assets/images/logo-dark.png"
                            alt=""
                            width="120px"
                            height="30.72px"
                            className="logo logo-dark"
                          />
                          <img
                            src="/assets/images/logo-light.png"
                            alt=""
                            width="120px"
                            height="30.72px"
                            className="logo logo-light"
                          />
                        </Link>
                      </div>
                      <p className="text-muted">
                        Enter your password to unlock the screen!
                      </p>
                    </div>

                    <div className="p-2 mt-4">
                      <div className="user-thumb text-center mb-4">
                        <img
                          className="rounded-circle img-thumbnail avatar-lg"
                          src={
                            process.env.REACT_APP_API_BASE_IMAGE_URL +
                            `/` +
                            adminInfo?.image
                          }
                          alt={adminInfo?.image}
                          crossOrigin="anonymous"
                        />
                        <h5 className="font-size-15 mt-3">{adminInfo?.name}</h5>
                      </div>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="userpassword">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="userpassword"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="mt-3 text-end">
                          <button
                            className="btn btn-primary w-sm waves-effect waves-light"
                            type="submit"
                          >
                            Unlock
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
    </>
  );
};

export default LockScreen;
