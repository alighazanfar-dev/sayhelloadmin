import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import CkEditor from "../../Reuseable/CkEditor";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TermsServices from "../../services/TermsServices";
import secureLocalStorage from "react-secure-storage";

const EditTerms = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));

  const [terms, setTerms] = useState("");
  const [userType, setUserType] = useState("");



  const animatedComponents = makeAnimated();

  const SelectStyle = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#c6a1f8" : null,
        color: isFocused ? "#fff" : "#333333",

        cursor: isDisabled ? "not-allowed" : "default",
        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? "#c6a1f8"
              : "#c6a1f8"
            : undefined,
        },
      };
    },
  };

  const users = [
    {
      value: "Administrator",
      label: "Administrator",
    },
    {
      value: "Editor",
      label: "Editor",
    },
  ];

  const handelEditPost = (e) => {
    e.preventDefault();
    const body = {
      userType: userType,
      terms: terms,

    };
    TermsServices.updateTermsCondition(id, body)
      .then((res) => navigate("/dashboard/terms"))
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Helmet>
        <title>Edit Terms & Condition - Emberace</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">All Terms & Conditions </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Edit Terms & Condition</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => handelEditPost(e)}>
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          User Type
                        </label>
                        <div className="col-md-12">
                          <Select
                            value={users.filter(
                              (user) => user.value == userType
                            )}
                            options={users}
                            styles={SelectStyle}
                            onChange={(e) => setUserType(e.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Terms
                        </label>
                        <CkEditor
                          editorContent={terms}
                          setEditorContent={setTerms}
                        />
                      </div>
                      <div className="col-md-12">
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

export default EditTerms;
