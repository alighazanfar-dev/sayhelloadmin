import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Select from "react-select";
import BusinessCategoryServices from "../../../services/BusinessCategoryServices";

const BusinessCategory = () => {
  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));
  const businessId = adminInfo?.user?.businessId || "N/A";

  const [businesscategory, setBusinessCategory] = useState("");
  const [results, setResults] = useState([]);
  const [bussinessDetails, setBusinessDetails] = useState(null);

  const getBussinessDetails = () => {
    const businessIds = adminInfo?.user?.businessId || "N/A";
    BusinessCategoryServices.GetBusinessDetails(businessIds)
      .then((res) => {
        setBusinessDetails(res);
        setBusinessCategory(res?.businessCategory || ""); // Set initial category
      })
      .catch((err) => {
        console.error("Error fetching business details:", err);
      });
  };

  const getAllCategories = () => {
    BusinessCategoryServices.getAllBusinessCategories()
      .then((res) => {
        const transformedCategories = res?.categories.map((category) => ({
          value: category.name,
          label: category.name,
        }));
        setResults(transformedCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  useEffect(() => {
    getBussinessDetails();
    getAllCategories();
  }, [businessId]);

  const SelectStyle = {
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isFocused ? "#c6a1f8" : null,
      color: isFocused ? "#fff" : "#333333",
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: isSelected ? "#c6a1f8" : null,
      },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Business Category:", businesscategory);
    const businessIds = adminInfo?.user?.businessId || "N/A";
    let data = {
      businessCategory: businesscategory,
      subCategory: "",
    };
    BusinessCategoryServices.updateBusinessCat(businessIds, data)
      .then((res) => {
        console.log("Business Category updated successfully");
        getBussinessDetails();
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Business Category - Sayhello</title>
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
                        Business Category
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="">
                  <div className="card">
                    <div className="card-body">
                      <p>
                        Your business category is:{" "}
                        <b>{bussinessDetails?.businessCategory}</b>
                      </p>
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Select Business Category
                        </label>
                        <div className="col-md-12">
                          <Select
                            options={results}
                            styles={SelectStyle}
                            value={results.find(
                              (option) => option.value === businesscategory
                            )}
                            onChange={(e) => setBusinessCategory(e.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{ width: "100%" }}
                        >
                          Update
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

export default BusinessCategory;
