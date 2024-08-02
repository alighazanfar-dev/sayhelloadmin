import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import DataFunction from "../../../Functions/AllFunctions";
import PostCategoryServices from "../../../services/PostCategoryServices";
import UploadServices from "../../../services/UploadServices";
import { notifySuccess } from "../../../utils/toast";
import TableLoader from "../../../Reuseable/TableLoader";

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);

  // Create Category States
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [image, setImage] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const getData = useCallback(() => {
    PostCategoryServices.getAllCategories()
      .then((res) => setAllCategories(res?.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const addImage = () => {
    var formdata = new FormData();
    formdata.append("file", image);
    UploadServices.UploadSingle(formdata)
      .then((res) => {
        console.log("Image Uploaded");
      })
      .catch((err) => console.log(err.message));
  };

  const postData = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      meta_title: metaTitle,
      description: description,
      meta_description: metaDescription,
      image: image.name,
    };
    PostCategoryServices.createCategory(body).then((res) => {
      getData();
      setTitle("");
      setMetaTitle("");
      setDescription("");
      setMetaDescription("");
      setImage(null);
    });
    addImage();
  };

  const deleteCategory = (e, id) => {
    e.preventDefault();
    PostCategoryServices.deleteCategory(id).then((res) => {
      notifySuccess("Category deleted");
      getData();
    });
  };

  const editCategory = (e, id) => {
    e.preventDefault();
    const body = {
      title: title,
      meta_title: metaTitle,
      description: description,
      meta_description: metaDescription,
      image: image.name,
    };
    PostCategoryServices.updateCategory(id, body).then((res) => {
      notifySuccess("Category Updated");
      getData();
      setIsEditing(true);
      setEditId("");
      setTitle("");
      setMetaTitle("");
      setDescription("");
      setMetaDescription("");
      setImage(null);
    });
    addImage();
  };

  const handelEditClick = (e, item) => {
    setIsEditing(true);
    setEditId(item?._id);
    setTitle(item?.title);
    setMetaTitle(item?.meta_title);
    setDescription(item?.description);
    setMetaDescription(item?.meta_description);
  };

  return (
    <>
      <Helmet>
        <title>Blog Categories - Emberace</title>
      </Helmet>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">All Categories</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">All Categories</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <form
                      onSubmit={
                        isEditing === true
                          ? (e) => editCategory(e, editId)
                          : (e) => postData(e)
                      }
                    >
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Title
                        </label>
                        <div className="col-md-12">
                          <input
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
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
                          Description
                        </label>
                        <div className="col-md-12">
                          <textarea
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                          Image
                        </label>
                        <div className="col-md-12">
                          <input
                            required
                            onChange={(e) => setImage(e.target.files[0])}
                            className="form-control"
                            type="file"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Meta Title
                        </label>
                        <div className="col-md-12">
                          <input
                            required
                            value={metaTitle}
                            onChange={(e) => setMetaTitle(e.target.value)}
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
                          Meta Description
                        </label>
                        <div className="col-md-12">
                          <textarea
                            required
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                            rows={3}
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
              <div className="col-8">
                <div className="card">
                  <div className="card-body">
                    {allCategories === undefined ||
                    allCategories === null ||
                    allCategories?.length === 0 ? (
                      <>
                        <TableLoader />
                      </>
                    ) : (
                      <div className="table-responsive">
                        <table className="table table-striped mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                            {allCategories &&
                              allCategories?.map((el, index) => (
                                <tr key={el?._id}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{DataFunction.imageCheck(el?.image)}</td>
                                  <td>{el?.title}</td>
                                  <td>
                                    <i
                                      className="mdi mdi-trash-can-outline iconsize"
                                      onClick={(e) => deleteCategory(e, el._id)}
                                    />
                                    <i
                                      className="mdi mdi-pencil-box-outline iconsize"
                                      onClick={(e) => handelEditClick(e, el)}
                                    />
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    )}
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

export default Categories;
