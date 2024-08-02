import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import CkEditor from "../../../Reuseable/CkEditor";
import ImageUpload from "./imageUpload";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PostCategoryServices from "../../../services/PostCategoryServices";
import PostServices from "../../../services/PostServices";
import secureLocalStorage from "react-secure-storage";

const EditPost = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const adminInfo = JSON.parse(secureLocalStorage.getItem("adminInfo"));

  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [image, setImage] = useState("");

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

  const handleCategory = (e) => {
    let newData = [];
    for (let i = 0; i < e?.length; i++) {
      const element = e[i].label;
      newData.push(element);
    }
    setCategory(newData);
  };

  const getData = useCallback(() => {
    let newData = [];
    PostCategoryServices.getAllCategories().then((res) => {
      const Data = res.data;

      for (let i = 0; i < Data.length; i++) {
        let obj = { value: Data[i]._id, label: Data[i].title };
        newData.push(obj);
      }
      setCategoryList(newData);
    });

    PostServices.getPostsById(id).then((res) => {
      setTitle(res.title);
      setMetaTitle(res.meta_title);
      setDescription(res.description);
      setMetaDescription(res.meta_description);
      setCategory(res.category);
      setImage(res.image);
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handelEditPost = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      meta_title: metaTitle,
      description: description,
      meta_description: metaDescription,
      category: category,
      image: image,
      author: adminInfo?.name,
    };
    PostServices.updatePosts(id, body)
      .then((res) => navigate("/post/all-posts"))
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Helmet>
        <title>Edit Posts - Emberace</title>
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
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Category
                        </label>
                        <Select
                          options={categoryList}
                          value={categoryList.filter((categories) =>
                            category.includes(categories.label)
                          )}
                          isMulti
                          components={animatedComponents}
                          styles={SelectStyle}
                          onChange={(e) => handleCategory(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="formrow-firstname-input"
                        >
                          Featured Image
                        </label>
                        <div
                          style={{
                            display: "block",
                            width: "100%",
                          }}
                        >
                          <ImageUpload image={image} setImage={setImage} />
                        </div>
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

export default EditPost;
