import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import makeAnimated from "react-select/animated";
import TermsServices from "../../../services/TermsServices";
import secureLocalStorage from "react-secure-storage";
import CkEditor from "../../../Reuseable/CkEditor";
import Select from "react-select";

const SelectBusinessCategory = () => {
  

  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));

  const [businesscategory, setBusinessCategory] = useState("");
  

  
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
 

  const category = [
    {
      value: "individual",
      label: "Individual",
    },
    {
      value: "business",
      label: "Business",
    },
    {
      value: "organization",
      label: "Organization",
    },
    {
      value: "group",
      label: "Group",
    },
    {
      value: "influencer",
      label: "Influencer",
    },
  ];

 

  return (
    <>
      <Helmet>
        <title>Select Business Category - Sayhello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Business Categories</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                      Select Business Category
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form >
              <div className="row">
                <div className="">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Select Business Category
                        </label>
                        <div className="col-md-12">
                          <Select
                            options={category}
                            styles={SelectStyle}
                            onChange={(e) => setBusinessCategory(e.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-12 ">
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

export default SelectBusinessCategory;
