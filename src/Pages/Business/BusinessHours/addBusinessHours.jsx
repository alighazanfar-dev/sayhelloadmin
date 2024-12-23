import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../../../index.css"; // Add this for custom styling

const AddBusinessHours = () => {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const [businessHours, setBusinessHours] = useState(
        daysOfWeek.map((day) => ({
            day,
            enabled: day !== "Sat" && day !== "Sun", // Enable weekdays by default
            timeRanges: [{ id: 1, start: "", end: "" }],
        }))
    );

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

    const addTimeRange = (day) => {
        setBusinessHours((prev) =>
            prev.map((entry) =>
                entry.day === day
                    ? {
                          ...entry,
                          timeRanges: [
                              ...entry.timeRanges,
                              { id: entry.timeRanges.length + 1, start: "", end: "" },
                          ],
                      }
                    : entry
            )
        );
    };

    const removeTimeRange = (day, id) => {
        setBusinessHours((prev) =>
            prev.map((entry) =>
                entry.day === day
                    ? {
                          ...entry,
                          timeRanges: entry.timeRanges.filter((range) => range.id !== id),
                      }
                    : entry
            )
        );
    };

    const handleSubmit = () => {
        console.log("Submitted Business Hours:", businessHours);
        // Send businessHours to your API or process them further
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
                                                className={`toggle-switch ${entry.enabled ? "enabled" : ""}`}
                                                onClick={() => toggleDay(entry.day)}
                                            >
                                                <span className="slider"></span>
                                            </div>
                                            {!entry.enabled && (
                                                <div className="ms-3 d-flex align-items-center">
                                                    <span className="badge bg-secondary me-2">Closed</span>
                                                    <span role="img" aria-label="icon">🕒</span>
                                                </div>
                                            )}
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
                                                    <button
                                                        className="btn btn-outline-primary mx-2"
                                                        onClick={() => addTimeRange(entry.day)}
                                                    >
                                                        +
                                                    </button>
                                                    {entry.timeRanges.length > 1 && (
                                                        <button
                                                            className="btn btn-outline-danger"
                                                            onClick={() =>
                                                                removeTimeRange(entry.day, range.id)
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success mt-3" onClick={handleSubmit}>
                                Add Business Hours
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBusinessHours;
