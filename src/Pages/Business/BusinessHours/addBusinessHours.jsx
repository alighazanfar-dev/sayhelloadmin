import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../../../index.css";
import secureLocalStorage from "react-secure-storage";
import BusinessCategoryServices from "../../../services/BusinessCategoryServices";

const AddBusinessHours = () => {
  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));
  const businessId = adminInfo?.user?.businessId || "N/A";

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [bussinessDetails, setBusinessDetails] = useState(null);
  const [businessHours, setBusinessHours] = useState(
    daysOfWeek.map((day) => ({
      day,
      enabled: true,
      timeRanges: [{ id: 1, start: "", end: "" }],
    }))
  );

  const getBussinessDetails = () => {
    const businessIds = adminInfo?.user?.businessId || "N/A";
    BusinessCategoryServices.GetBusinessDetails(businessIds)
      .then((res) => {
        console.log("Business details: ", JSON.stringify(res));
        setBusinessDetails(res);

        // Parse business hours from the backend response
        const parsedHours = daysOfWeek.map((day) => {
          const dayHours = res.businessHours.find((entry) =>
            entry.startsWith(day)
          );

          if (!dayHours) {
            // If no entry for the day, assume closed
            return {
              day,
              enabled: false,
              timeRanges: [{ id: 1, start: "", end: "" }],
            };
          }

          const [_, timeRange] = dayHours.split(":"); // Split into "Monday" and "9am - 5pm"
          if (timeRange.trim().toLowerCase() === "closed") {
            return {
              day,
              enabled: false,
              timeRanges: [{ id: 1, start: "", end: "" }],
            };
          }

          const [start, end] = timeRange.split("-").map((t) => t.trim());
          return {
            day,
            enabled: true,
            timeRanges: [
              {
                id: 1,
                start: convertTo24HourFormat(start),
                end: convertTo24HourFormat(end),
              },
            ],
          };
        });

        setBusinessHours(parsedHours);
      })
      .catch((err) => {
        console.error("Error fetching business details:", err);
      });
  };

  const convertTo24HourFormat = (time) => {
    if (!time) return "";
    const [hourMinute, period] = time.split(/(am|pm)/i).map((s) => s.trim());
    if (!hourMinute || !period) return ""; // Ensure valid format
    let [hours, minutes] = hourMinute.split(":").map(Number);
    if (period.toLowerCase() === "pm" && hours < 12) hours += 12;
    if (period.toLowerCase() === "am" && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, "0")}:${minutes || "00"}`;
  };
  const toggleDay = (day) => {
    setBusinessHours((prev) =>
      prev.map((entry) =>
        entry.day === day ? { ...entry, enabled: !entry.enabled } : entry
      )
    );
  };

  const handleTimeChange = (day, id, field, value) => {
    setBusinessHours((prev) =>
      prev.map((entry) =>
        entry.day === day
          ? {
              ...entry,
              timeRanges: entry.timeRanges.map((range) =>
                range.id === id ? { ...range, [field]: value } : range
              ),
            }
          : entry
      )
    );
  };

  useEffect(() => {
    getBussinessDetails();
  }, [businessId]);

  const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12 || 12;
    return `${adjustedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  const handleSubmit = () => {
    const businesssId = adminInfo?.user?.businessId || "N/A";
    const formattedHours = businessHours.map((entry) => {
      if (!entry.enabled) {
        return `${entry.day}: Closed`;
      }
      const timeRange = entry.timeRanges
        .map(
          (range) =>
            `${convertTo12HourFormat(range.start)} - ${convertTo12HourFormat(
              range.end
            )}`
        )
        .join(", ");
      return `${entry.day}: ${timeRange}`;
    });

    const requestBody = {
      businessHours: formattedHours,
    };

    BusinessCategoryServices.UpdateBusinessHours(businesssId, requestBody)
      .then((res) => {
        getBussinessDetails();
      })
      .catch((err) => {
        console.log("errror: ", err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Business Hours</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Business Hours</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Business Hours</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {businessHours.map((entry) => (
                <div className="col-12 mb-4" key={entry.day}>
                  <div className="card p-3">
                    <div className="d-flex align-items-center mb-2">
                      <h5 className="me-3">{entry.day}</h5>
                      <div
                        className={`toggle-switch ${
                          entry.enabled ? "enabled" : ""
                        }`}
                        onClick={() => toggleDay(entry.day)}
                      >
                        <span className="slider"></span>
                      </div>
                    </div>
                    {entry.enabled &&
                      entry.timeRanges.map((range) => (
                        <div
                          className="d-flex align-items-center time-range mb-2"
                          key={range.id}
                        >
                          <input
                            type="time"
                            className="form-control"
                            value={range.start}
                            onChange={(e) =>
                              handleTimeChange(
                                entry.day,
                                range.id,
                                "start",
                                e.target.value
                              )
                            }
                          />
                          <span className="mx-2">to</span>
                          <input
                            type="time"
                            className="form-control"
                            value={range.end}
                            onChange={(e) =>
                              handleTimeChange(
                                entry.day,
                                range.id,
                                "end",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="btn btn-success mt-3" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBusinessHours;
