import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import makeAnimated from "react-select/animated";
import TermsServices from "../../../services/TermsServices";
import secureLocalStorage from "react-secure-storage";
import CkEditor from "../../../Reuseable/CkEditor";
import Select from "react-select";

const createHangoutContact = () => {



    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [title, setTitle] = useState("");



    return (
        <>
            <Helmet>
                <title>Create Hangout Contacts - Sayhello</title>
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
                                            <li className="breadcrumb-item active">
                                                Create Hangout Contacts
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
                                            <div className=" row">

                                                <div className="mb-3 col-md-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className=" col-form-label"
                                                    >
                                                        First Name
                                                    </label>
                                                    <div className="">
                                                        <input
                                                            value={firstname}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            required
                                                            className="form-control"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mb-3 col-md-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className=" col-form-label"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <div className="">
                                                        <input
                                                            value={lastname}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            required
                                                            className="form-control"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-12 col-form-label"
                                                    >
                                                        Title
                                                    </label>
                                                    <div className="col-md-12">
                                                        <input
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                            required
                                                            className="form-control"
                                                            type="text"
                                                        />
                                                    </div>
                                            </div>

                                            <div className=" row">

                                            <h4 className="mt-3 mb-3">Hangout Contacts</h4>

                                                <div className="mb-3 col-md-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className=" col-form-label"
                                                    >
                                                        First Name
                                                    </label>
                                                    <div className="">
                                                        <input
                                                            value={firstname}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            required
                                                            className="form-control"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mb-3 col-md-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className=" col-form-label"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <div className="">
                                                        <input
                                                            value={lastname}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            required
                                                            className="form-control"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-12 col-form-label"
                                                    >
                                                        Title
                                                    </label>
                                                    <div className="col-md-12">
                                                        <input
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                            required
                                                            className="form-control"
                                                            type="text"
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

export default createHangoutContact;
