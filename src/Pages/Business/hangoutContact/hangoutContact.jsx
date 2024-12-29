import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import BusinessCategoryServices from "../../../services/BusinessCategoryServices";

const HangoutContact = () => {
  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));
  const businessId = adminInfo?.user?.businessId || "N/A";

  const [businessDetails, setBusinessDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getBusinessDetails = () => {
    BusinessCategoryServices.GetBusinessDetails(businessId)
      .then((res) => {
        console.log("Business details: ", res);
        // If contacts are not provided, initialize with two empty contacts
        const contacts = res?.contacts?.length
          ? res.contacts
          : [
              { firstname: "", lastname: "", title: "", email: "" },
              { firstname: "", lastname: "", title: "", email: "" },
            ];
        setBusinessDetails({ ...res, contacts });
      })
      .catch((err) => {
        console.error("Error fetching business details:", err);
        setErrorMessage("Failed to load business details.");
        // Initialize with empty contacts in case of an error
        setBusinessDetails({
          contacts: [
            { firstname: "", lastname: "", title: "", email: "" },
            { firstname: "", lastname: "", title: "", email: "" },
          ],
        });
      });
  };

  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...businessDetails.contacts];
    updatedContacts[index][field] = value;
    setBusinessDetails({
      ...businessDetails,
      contacts: updatedContacts,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages
  
    setIsLoading(true);
    const body = {
      contacts: businessDetails.contacts.map(({ firstname, lastname, title, email, _id }) => ({
        _id,
        firstname,
        lastname,
        title,
        email,
      })),
    };
  
    BusinessCategoryServices.updateBussinessContacts(businessId, body)
      .then((res) => {
        console.log("Contacts updated successfully!");
        getBusinessDetails();
      })
      .catch((err) => {
        console.error("Error updating contacts:", err);
        setErrorMessage("Failed to update contacts.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getBusinessDetails();
  }, [businessId]);

  return (
    <>
      <Helmet>
        <title>Hangout Contacts | Say Hello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Hangout Contacts</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Hangout Contacts</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleUpdate}>
              <div className="row">
                <div className="">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="mt-3 mb-3">Hangout Contacts</h4>
                      {businessDetails?.contacts?.map((contact, index) => (
                        <div className="row" key={index}>
                          <div className="mb-3 col-md-3">
                            <label className="col-form-label">First Name</label>
                            <input
                              value={contact.firstname || ""}
                              onChange={(e) =>
                                handleContactChange(index, "firstname", e.target.value)
                              }
                              className="form-control"
                              type="text"
                              placeholder="Enter first name"
                              required
                            />
                          </div>

                          <div className="mb-3 col-md-3">
                            <label className="col-form-label">Last Name</label>
                            <input
                              value={contact.lastname || ""}
                              onChange={(e) =>
                                handleContactChange(index, "lastname", e.target.value)
                              }
                              className="form-control"
                              type="text"
                              placeholder="Enter last name"
                            />
                          </div>

                          <div className="mb-3 col-md-3">
                            <label className="col-form-label">Title</label>
                            <input
                              value={contact.title || ""}
                              onChange={(e) =>
                                handleContactChange(index, "title", e.target.value)
                              }
                              className="form-control"
                              type="text"
                              placeholder="Enter title"
                            />
                          </div>

                          <div className="mb-3 col-md-3">
                            <label className="col-form-label">Email</label>
                            <input
                              value={contact.email || ""}
                              onChange={(e) =>
                                handleContactChange(index, "email", e.target.value)
                              }
                              className="form-control"
                              type="email"
                              placeholder="Enter email"
                              required
                            />
                          </div>
                        </div>
                      ))}

                      <div className="col-md-12">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{ width: "100%" }}
                          disabled={isLoading}
                        >
                          {isLoading ? "Updating..." : "Update Contacts"}
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

export default HangoutContact;