import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const ImageUpload = (props) => {
  const { image, setImage } = props;
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState();

  const [loading, setLoading] = useState(false);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setImage(info.file.name);
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Upload
      name="file"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action={process.env.REACT_APP_API_BASE_URL + "/upload"}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          crossOrigin="anonymous"
          alt="avatar"
          style={{
            width: "100%",
          }}
        />
      ) : location.pathname.includes("/post/edit/") === true ? (
        <img
          src={process.env.REACT_APP_API_BASE_IMAGE_URL + image}
          crossOrigin="anonymous"
          alt="avatar"
          style={{
            width: "100%",
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};
export default ImageUpload;
