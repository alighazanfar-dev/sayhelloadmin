import { useState, useCallback } from "react";

function ImageUploadAdapter(loader) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const upload = useCallback(() => {
    setUploading(true);
    const url = `${process.env.REACT_APP_API_BASE_URL}/upload`;

    const formData = new FormData();
    formData.append("image", file);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setError(response.error);
        } else {
          setFile(response.url);
        }
        setUploading(false);
      })
      .catch((error) => {
        setError(error);
        setUploading(false);
      });
  }, [file]);

  const abort = useCallback(() => {
    setFile(null);
    setError(null);
    setUploading(false);
  }, []);

  return {
    file,
    uploading,
    error,
    upload,
    abort,
  };
}

export default ImageUploadAdapter;
