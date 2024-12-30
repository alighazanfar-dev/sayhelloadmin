import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BusinessCategoryServices from "../../../services/BusinessCategoryServices";
import secureLocalStorage from "react-secure-storage";

const SocialLinks = () => {
  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));
  const businessId = adminInfo?.user?.businessId || "N/A";

  const [businessDetails, setBusinessDetails] = useState(null);

  // Define social links state dynamically
  const [socialLinks, setSocialLinks] = useState({
    Facebook: "",
    Instagram: "",
    Twitter: "",
    YouTube: "",
    LinkedIn: "",
    Pinterest: "",
    TikTok: "",
    Website: "",
  });

  const [reviewLinks, setReviewLinks] = useState({
    Yelp: "",
    Google: "",
    BBB: "",
  });

  const mapLinksToState = (linksArray, defaultState) => {
    const updatedState = { ...defaultState };
    linksArray.forEach((link) => {
      if (link.type && link.link) {
        updatedState[link.type] = link.link;
      }
    });
    return updatedState;
  };

  const getBusinessDetails = () => {
    BusinessCategoryServices.GetBusinessDetails(businessId)
      .then((res) => {
        console.log("Business Details: ", JSON.stringify(res));
        setBusinessDetails(res);

        // Map social links from the response to the state
        if (res.socialLinks) {
          setSocialLinks((prevState) =>
            mapLinksToState(res.socialLinks, prevState)
          );
        }

        // Map review links from the response to the state
        if (res.reviewLinks) {
          setReviewLinks((prevState) =>
            mapLinksToState(res.reviewLinks, prevState)
          );
        }
      })
      .catch((err) => {
        console.error("Error fetching business details:", err);
      });
  };

  useEffect(() => {
    getBusinessDetails();
  }, [businessId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert socialLinks state to array format
    const socialLinksArray = Object.entries(socialLinks)
      .map(([type, link]) => ({
        type,
        link,
        logoUrl: `logo-url-${type.toLowerCase()}`, // Dynamically generate logo URL
      }))
      .filter((link) => link.link); // Remove empty links

    // Convert reviewLinks state to array format
    const reviewLinksArray = Object.entries(reviewLinks)
      .map(([type, link]) => ({
        type,
        link,
        logoUrl: `logo-url-${type.toLowerCase()}`, // Dynamically generate logo URL
      }))
      .filter((link) => link.link); // Remove empty links

    const data = {
      socialLinks: socialLinksArray,
      reviewLinks: reviewLinksArray,
    };

    console.log("Updated Links:", data);

    BusinessCategoryServices.BusinessSocial(businessId, data)
      .then((res) => {
        console.log("Response:", res);
        getBusinessDetails(); // Refresh details after successful update
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const handleSocialLinkChange = (type, value) => {
    setSocialLinks((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const handleReviewLinkChange = (type, value) => {
    setReviewLinks((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Social Links - Sayhello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Social Links</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Social Links</li>
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
                      {Object.entries(socialLinks).map(([type, value]) => (
                        <div className="mb-3" key={type}>
                          <label className="col-md-12 col-form-label">
                            {type}
                          </label>
                          <input
                            value={value}
                            onChange={(e) =>
                              handleSocialLinkChange(type, e.target.value)
                            }
                            className="form-control"
                            type="text"
                          />
                        </div>
                      ))}

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

export default SocialLinks;
