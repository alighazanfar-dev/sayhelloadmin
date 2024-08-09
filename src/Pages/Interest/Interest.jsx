import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import InterestServices from "../../services/InterestServices";
import { Pagination } from "antd";
import { paginate } from "../../utils/Paginate";

const Interest = () => {
  const [interestName, setInterestName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);
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
    InterestServices.addInterest({
      name: interestName,
    })
      .then((res) => {
        console.log("response is: ", res);
        setInterestName("");
        getAllInterests();
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const getAllInterests = () => {
    setIsLoading(true);
    InterestServices.getAllInterests()
      .then((res) => {
        setIsLoading(false);
        setResults(res?.interests);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const changeStatus = (id) => {
    InterestServices.updateStatus(id).then((res) => getAllInterests());
  };

  const deleteInterest = (e, id) => {
    e.preventDefault();
    InterestServices.deleteInterest(id).then((res) => getAllInterests());
  };

  useEffect(() => {
    getAllInterests();
  }, []);

  return (
    <>
      <Helmet>
        <title>Interest - SayHello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Interest</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Interest</li>
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
                          Interest Name
                        </label>
                        <div className="col-md-12">
                          <input
                            value={interestName}
                            onChange={(e) => setInterestName(e.target.value)}
                            required
                            className="form-control"
                            type="text"
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
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {filteredData &&
                            filteredData?.map((el, index) => (
                              <tr key={index}>
                                <td>{el?.name}</td>
                                <td>
                                  <div className="form-check form-switch form-switch-md mb-3">
                                    <input
                                      onChange={() =>
                                        changeStatus(el._id, el.status)
                                      }
                                      type="checkbox"
                                      className="form-check-input"
                                      id="customSwitchsizemd"
                                      checked={el.status}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <i
                                    className="mdi mdi-trash-can-outline iconsize"
                                    onClick={(e) => deleteInterest(e, el?._id)}
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

export default Interest;
