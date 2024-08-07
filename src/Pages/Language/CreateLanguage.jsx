import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import makeAnimated from "react-select/animated";
import LanguageServices from "../../services/LanguageServices";
import secureLocalStorage from "react-secure-storage";
import Image from "./imageUpload";

const CreatePayment = () => {
  const navigate = useNavigate();

  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));

  const [name, setName] = useState("");
  const [jsonFilePath, setjsonFilePath] = useState("");
  const [image, setImage] = useState("");


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
      name: name,
      jsonFilePath: jsonFilePath,
      image: image,
      author: adminInfo?.name,
    };
    LanguageServices.createLanguage(body)
      .then((res) => {
        navigate("/dahsboard/languages");
        setName("");
        setjsonFilePath("");
        setImage("");

      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Helmet>
        <title>Create Language - Emberace</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Languages</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Create Language</li>
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          File Path
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                          value={jsonFilePath}
                          onChange={(e) => setjsonFilePath(e.target.value)}
                        />
                      </div>

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
                          <Image image={image} setImage={setImage} />
                        </div>
                      </div>

                      <div className="col-md-12 pt-3 ">
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePayment;
