import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import InterestServices from "../../services/InterestServices";
import { DatePicker } from "antd";
import moment from "moment";
import Pagination from "../../Reuseable/Pagination";
import { paginate } from "../../utils/Paginate";
import TableLoader from "../../Reuseable/TableLoader";

const Interest = () => {
  const navigate = useNavigate();

  const [getAllInterests, setGetAllIneterests] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { RangePicker } = DatePicker;

  const [startDateClick, setStartDateClick] = useState("");
  const [endDateClick, setEndDateClick] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const interestsData = paginate(getAllInterests, currentPage, pageSize);

  const handelPageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const getData = () => {
    InterestServices.getAllInterests()
      .then((res) => {
        setGetAllIneterests(res?.
          interests);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  useEffect(() => {
    getData();
  }, []);

  const onButtonClick = () => {
    setStartDate(startDateClick);
    setEndDate(endDateClick);
  };

  const handleCalendarChange = (value, dateString) => {
    setStartDateClick(dateString[0]);
    setEndDateClick(dateString[1]);
  };

  const filterDataInDateRange = (data) => {
    if (startDate === "" && endDate === "") {
      return data;
    } else {
      const newData = data.filter(
        (item) =>
          moment(item.createdAt, "YYYY/MM/DD").format("YYYY/MM/DD") >=
          moment(startDate, "YYYY/MM/DD").format("YYYY/MM/DD") &&
          moment(item.createdAt, "YYYY/MM/DD").format("YYYY/MM/DD") <=
          moment(endDate, "YYYY/MM/DD").format("YYYY/MM/DD")
      );
      return newData;
    }
  };

  const handelSearch = (data) => {
    if (searchValue === "") {
      return data;
    } else if (searchValue !== "") {
      if (searchBy === "name") {
        return data.filter((el) =>
          el.title?.toLowerCase().includes(searchValue?.toLowerCase())
        );
      }
      if (searchBy === "author") {
        return data.filter((el) =>
          el.author?.toLowerCase().includes(searchValue?.toLowerCase())
        );
      }
    } else if (searchValue !== "" && searchBy === "") {
      return data;
    }
  };

  const allFilter = (data) => {
    const newData = handelSearch(filterDataInDateRange(data));
    return newData;
  };

  const deleteInterest = (e, id) => {
    e.preventDefault();
    InterestServices.deleteInterest(id).then((res) => getData());
  };

  return (
    <>
      <Helmet>
        <title>Interests - Emberace</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">All Interests</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">All Interests</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <div className="float-end">
                    <div className=" mb-3">
                      <RangePicker
                        allowClear="true"
                        onCalendarChange={handleCalendarChange}
                      />
                      &nbsp;
                      <button
                        type="button"
                        onClick={() => onButtonClick()}
                        className="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          className="mdi mdi-magnify"
                          style={{ marginRight: "5px" }}
                        />
                        Search
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate("/dashboard/create-interest")}
                        className="btn btn-primary btn-sm waves-effect waves-light"
                        style={{ marginLeft: "5px" }}
                      >
                        <i
                          className="mdi mdi-plus"
                          style={{ marginRight: "5px" }}
                        />
                        Add Interest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">

                  {interestsData === undefined ||
                    interestsData === null ||
                    getAllInterests?.length === 0 ? (
                    <>
                      <TableLoader />
                    </>
                  ) : (
                    <>
                      {/*  */}

                      <div className="d-flex" style={{ justifyContent: "end" }}>
                        <div className="row w-30 mb-3">
                          <div
                            className="col-2"
                            style={{
                              justifyContent: "center",
                              alignContent: "center !important",
                            }}
                          >
                            <label
                              style={{
                                fontWeight: "normal",
                                whiteSpace: "nowrap",
                                width: "150px",
                                alignItems: "center",
                              }}
                            >
                              Search:
                            </label>
                          </div>

                          <div className="col-5">
                            <select
                              className="form-select form-select-sm"
                              value={searchBy}
                              onChange={(e) => setSearchBy(e.target.value)}
                            >
                              <option value="">Search By</option>
                              <option value="title">Post Title</option>
                              <option value="author">Author</option>
                            </select>
                          </div>
                          <div className="col-5">
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder=""
                              value={searchValue}
                              onChange={(e) => setSearchValue(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      {allFilter(interestsData && interestsData)?.length === 0 ? (
                        <TableLoader />
                      ) : (
                        <div className="table-responsive">
                          <table className="table table-striped mb-0">
                            <thead>
                              <tr>
                                <th>#</th>

                                <th>Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {allFilter(interestsData && interestsData)?.map(
                                (el, index) => (
                                  <tr key={el._id}>
                                    <th scope="row">
                                      {index + 1 + pageSize * (currentPage - 1)}
                                    </th>
                                    
                                    <td>{el?.name}</td>
                                    <td>{el?.status}</td>


                                    <td className="icondiv">
                                      <i
                                        className="mdi mdi-trash-can-outline iconsize"
                                        onClick={(e) => deleteInterest(e, el._id)}
                                      />
                                      <i
                                        className="mdi mdi-pencil-box-outline iconsize"
                                        onClick={() =>
                                          navigate(`/dashboard/edit-interest/${el._id}`)
                                        }
                                      />
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </>
                  )}
                  <div className="d-flex" style={{ justifyContent: "end" }}>
                    <div className="row w-30 mt-5">
                      <Pagination
                        itemCount={getAllInterests?.length}
                        pageSize={pageSize}
                        onPageChange={handelPageChange}
                        currentPage={currentPage}
                      />
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
