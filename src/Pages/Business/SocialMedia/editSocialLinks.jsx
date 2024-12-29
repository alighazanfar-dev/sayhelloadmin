import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import makeAnimated from "react-select/animated";
import TermsServices from "../../../services/TermsServices";
import secureLocalStorage from "react-secure-storage";
import CkEditor from "../../../Reuseable/CkEditor";
import Select from "react-select";

const EditSocialLinks = () => {

    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [youtube, setYoutube] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [pinterest, setPinterest] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [website, setWebsite] = useState("");

    const [yelp, setYelp] = useState("");
    const [google, setGoogle] = useState("");
    const [bbb, setBBB] = useState("");


    return (
        <>
            <Helmet>
                <title>Edit Social Links - Sayhello</title>
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
                                            <li className="breadcrumb-item active">
                                                Edit Social Links
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
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="example-text-input"
                                                    className="col-md-12 col-form-label"
                                                >
                                                    Facebook
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={facebook}
                                                        onChange={(e) => setFacebook(e.target.value)}
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
                                                    Instagram
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={instagram}
                                                        onChange={(e) => setInstagram(e.target.value)}
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
                                                    X
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={twitter}
                                                        onChange={(e) => setTwitter(e.target.value)}
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
                                                    Youtube
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={youtube}
                                                        onChange={(e) => setYoutube(e.target.value)}
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
                                                    Linkedin
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={linkedin}
                                                        onChange={(e) => setLinkedin(e.target.value)}
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
                                                    Pinterest
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={pinterest}
                                                        onChange={(e) => setPinterest(e.target.value)}
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
                                                    Tiktok
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={tiktok}
                                                        onChange={(e) => setTiktok(e.target.value)}
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
                                                    Website
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={website}
                                                        onChange={(e) => setWebsite(e.target.value)}
                                                        required
                                                        className="form-control"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-3 mt-3">
                                                <h3>Reviews</h3>
                                            </div>

                                            <div className="mb-3">
                                                <label
                                                    htmlFor="example-text-input"
                                                    className="col-md-12 col-form-label"
                                                >
                                                    Yelp
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={yelp}
                                                        onChange={(e) => setYelp(e.target.value)}
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
                                                    Google
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={google}
                                                        onChange={(e) => setGoogle(e.target.value)}
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
                                                    BBB
                                                </label>
                                                <div className="col-md-12">
                                                    <input
                                                        value={bbb}
                                                        onChange={(e) => setBBB(e.target.value)}
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

export default EditSocialLinks;
