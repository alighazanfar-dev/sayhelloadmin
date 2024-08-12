import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { paginate } from "../../utils/Paginate";
import SocialServices from "../../services/SocialServices";
import DataFunction from "../../Functions/AllFunctions";
import axios from "axios";
import LanguageServices from "../../services/LanguageServices";

const Payments = () => {
  const [langaugeName, setLanguageName] = useState("");
  const [languageUrl, setLanguageUrl] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);
  const [Uploading, setUploading] = useState(false);
  const interestData = paginate(results, currentPage, pageSize);

  const handleSearch = (data, searchValue, completeData) => {
    if (searchValue === "") {
      return data;
    } else {
      return completeData.filter((el) => {
        for (let key in el) {
          if (
            typeof el[key] === "string" &&
            el[key].toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });
    }
  };

  const filteredData = handleSearch(interestData, searchValue, results);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    LanguageServices.createLanguage({
      name: langaugeName,
      image: languageUrl,
      jsonFilePath: "/path/to/spanish.json",
      status: "active",
    })
      .then((res) => {
        console.log("response is: ", res);
        setLanguageName("");
        setImage(null);
        setLanguageUrl("");
        getAllLanguage();
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const getAllLanguage = () => {
    setIsLoading(true);
    LanguageServices.getLanguages()
      .then((res) => {
        setIsLoading(false);
        setResults(res);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const deleteLanguage = (e, id) => {
    e.preventDefault();
    LanguageServices.deleteLanguage(id).then((res) => getAllLanguage());
  };

  useEffect(() => {
    getAllLanguage();
  }, []);

  const handelUploadImage = (e) => {
    setImage(e.target.files[0]);
    console.log("e.target.files[0]: ", e.target.files[0]);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post(process.env.REACT_APP_API_BASE_URL + `/upload`, formData)
      .then((res) => {
        setLanguageUrl(res?.data?.response_body?.Location);
      })
      .then(() => {
        setUploading(false);
      })
      .catch(() => {
        setUploading(false);
      })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Langauges - SayHello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Langauges</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Langauges</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleUpdate}>
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Langauge Name
                        </label>
                        <div className="col-md-12">
                          <input
                            value={langaugeName}
                            onChange={(e) => setLanguageName(e.target.value)}
                            required
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Language Logo
                        </label>
                        <div className="col-md-12">
                          <input
                            type="file"
                            className="form-control"
                            id="symptonIcon"
                            onChange={(e) => handelUploadImage(e)}
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
                            <th>Logo</th>
                            <th>Name</th>

                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {filteredData &&
                            filteredData?.map((el, index) => (
                              <tr key={index}>
                                <td>{DataFunction.imageCheck(el?.logo)}</td>
                                <td>{el?.name}</td>

                                <td>
                                  <i
                                    className="mdi mdi-trash-can-outline iconsize"
                                    onClick={(e) => deleteLanguage(e, el?._id)}
                                  />
                                  {/* <i className="mdi mdi-pencil-box-outline iconsize" /> */}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex" style={{ justifyContent: "end" }}>
                      <div className="row w-30 mt-5">
                        <Pagination
                          total={results?.length}
                          pageSize={pageSize}
                          onChange={handlePageChange}
                          current={currentPage}
                        />
                      </div>
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

export default Payments;
