import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import CkEditor from "../../Reuseable/CkEditor";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PostServices from "../../services/httpService";
import secureLocalStorage from "react-secure-storage";

const EditGender = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));

  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");


  const animatedComponents = makeAnimated();

  const SelectStyle = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#c6a1f8" : null,
        color: isFocused ? "#fff" : "#333333",

        cursor: isDisabled ? "not-allowed" : "default",
        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? "#c6a1f8"
              : "#c6a1f8"
            : undefined,
        },
      };
    },
  };

  const handelEditPost = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      meta_title: metaTitle,
      description: description,
      meta_description: metaDescription,
      author: adminInfo?.name,
    };
    PostServices.updatePosts(id, body)
      .then((res) => navigate("/dashboard/interests"))
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Helmet>
        <title>Edit Posts - Sayhello</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">All Posts</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Edit Posts</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => handelEditPost(e)}>
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Description
                        </label>
                        {/* <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                        /> */}

                        <CkEditor
                          editorContent={description}
                          setEditorContent={setDescription}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Meta Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-input"
                          onChange={(e) => setMetaTitle(e.target.value)}
                          value={metaTitle}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Meta Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={metaDescription}
                          id="formrow-firstname-input"
                          onChange={(e) => setMetaDescription(e.target.value)}
                        />
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

export default EditGender;
