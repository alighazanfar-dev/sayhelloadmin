import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

const UploadBusinessImages = () => {
    const [images, setImages] = useState([{ id: 1, file: null }]);

    const handleImageChange = (e, id) => {
        const file = e.target.files[0];
        setImages((prev) =>
            prev.map((img) =>
                img.id === id ? { ...img, file: file } : img
            )
        );
    };

    const addImageField = () => {
        if (images.length < 6) {
            setImages((prev) => [
                ...prev,
                { id: prev.length + 1, file: null },
            ]);
        }
    };

    const removeImageField = (id) => {
        setImages((prev) => prev.filter((img) => img.id !== id));
    };

    const handleSubmit = () => {
        const formData = new FormData();
        images.forEach((img, index) => {
            if (img.file) {
                formData.append(`image_${index + 1}`, img.file);
            }
        });

        fetch("your-upload-endpoint", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Upload Success:", data);
            })
            .catch((error) => {
                console.error("Upload Error:", error);
            });
    };

    return (
        <><Helmet>
            <title>Upload Business Images - Sayhello</title>
        </Helmet>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Upload Business Images</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <Link to="/dashboard">Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item active">
                                                Upload Business Images
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {images.map((img, index) => (
                                <div className="col-md-4 mb-3" key={img.id}>
                                    <div className="input-group">
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) => handleImageChange(e, img.id)} />
                                        {index < 5 && (
                                            <button
                                                className="btn btn-outline-primary"
                                                type="button"
                                                onClick={addImageField}
                                            >
                                                +
                                            </button>
                                        )}
                                        {images.length > 1 && (
                                            <button
                                                className="btn btn-outline-danger"
                                                type="button"
                                                onClick={() => removeImageField(img.id)}
                                            >
                                                -
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button
                                className="btn btn-success mt-3"
                                onClick={handleSubmit}
                            >
                                Upload Images
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadBusinessImages;
