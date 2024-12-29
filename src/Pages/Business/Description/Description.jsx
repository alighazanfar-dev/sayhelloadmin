import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import BusinessCategoryServices from "../../../services/BusinessCategoryServices";

const Description = () => {
  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));
  const businessId = adminInfo?.user?.businessId || "N/A";

  const [description, setDescription] = useState("");
  const [bussinessDetails, setBusinessDetails] = useState(null);

  const getBussinessDetails = () => {
    const businessIds = adminInfo?.user?.businessId || "N/A";
    BusinessCategoryServices.GetBusinessDetails(businessIds)
      .then((res) => {
        setBusinessDetails(res);
        setDescription(res?.description || ""); // Populate the description
      })
      .catch((err) => {
        console.error("Error fetching business details:", err);
      });
  };

  useEffect(() => {
    getBussinessDetails();
  }, [businessId]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let body = {
      ...bussinessDetails,
      description,
    };

    // Call update service (example)
    BusinessCategoryServices.updateBusinessDescription(businessId, body)
      .then(() => {
        getBussinessDetails();
      })
      .catch((err) => {
        console.error("Error updating business description:", err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Business Description - Sayhello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Businesses Description</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Business Description
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
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="business-description"
                        >
                          Business Description
                        </label>
                        <textarea
                          id="business-description"
                          className="form-control"
                          rows="6"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
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

export default Description;