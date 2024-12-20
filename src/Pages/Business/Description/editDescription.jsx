import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import CkEditor from "../../../Reuseable/CkEditor";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TermsServices from "../../../services/TermsServices";
import secureLocalStorage from "react-secure-storage";

const EditDescription = () => {
  

  const [description, setDescription] = useState("");
 

  return (
    <>
      <Helmet>
        <title>Edit Business Description - Sayhello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Businesses Description </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Edit Business Description</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form >
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                     
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Description
                        </label>
                        <CkEditor
                          editorContent={description}
                          setEditorContent={setDescription}
                        />
                      </div>
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

export default EditDescription;
