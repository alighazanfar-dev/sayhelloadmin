import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import makeAnimated from "react-select/animated";
import SocialServices from "../../services/SocialServices";
import secureLocalStorage from "react-secure-storage";
import Image from "./imageUpload";

const CreateSocial = () => {
  const navigate = useNavigate();

  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));

  const [platform, setPlatform] = useState("");
  const [url, setURL] = useState("");
  const [logo, setLogo] = useState("");


  //   const animatedComponents = makeAnimated();

  //   const SelectStyle = {
  //     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //       return {
  //         ...styles,
  //         backgroundColor: isFocused ? "#c6a1f8" : null,
  //         color: isFocused ? "#fff" : "#333333",

  //         cursor: isDisabled ? "not-allowed" : "default",
  //         ":active": {
  //           ...styles[":active"],
  //           backgroundColor: !isDisabled
  //             ? isSelected
  //               ? "#c6a1f8"
  //               : "#c6a1f8"
  //             : undefined,
  //         },
  //       };
  //     },
  //   };


  const handelCreatePost = (e) => {
    e.preventDefault();
    const body = {
      platform: platform,
      url: url,
      logo: logo,

      author: adminInfo?.name,
    };
    SocialServices.createSocialLink(body)
      .then((res) => {
        navigate("/dahsboard/socials");
        setPlatform("");
        setURL("");
        setLogo("");

      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Helmet>
        <title>Create Social - Emberace</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">All Socials</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Create Social</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => handelCreatePost(e)}>
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                          value={platform}
                          onChange={(e) => setPlatform(e.target.value)}
                        />

                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          URL
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                          value={url}
                          onChange={(e) => setURL(e.target.value)}
                        />

                        <div className="mb-3">
                          <label
                            className="form-label"
                            for="formrow-firstname-input"
                          >
                            Featured Image
                          </label>
                          <div
                            style={{
                              display: "block",
                              width: "100%",
                            }}
                          >
                            <Image logo={logo} setLogo={setLogo} />
                          </div>
                        </div>

                        <div className="col-md-12 pt-4">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            style={{ width: "100%" }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSocial;
