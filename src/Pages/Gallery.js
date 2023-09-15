import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Gallery = () => {
  let navigate = useNavigate();
  const [file, setFile] = useState();
  const [gallery, setGallery] = useState();

  useEffect(() => {
    if (localStorage.getItem("letctoken")) {
      navigate("/gallery");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let url = "https://www.cwtrust-india.com/gallery/getgallery";
    axios
      .get(url)
      .then((res) => setGallery(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const handleUpload = () => {
    let url = "https://www.cwtrust-india.com/gallery/upload";
    const formdata = new FormData();
    formdata.append("file", file);

    axios
      .post(url, formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const deleteGallery = async (id) => {
    let url = `https://www.cwtrust-india.com/gallery/deletegallery/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    const newGallery = gallery.filter((item) => {
      return item._id !== id;
    });
    setGallery(newGallery);
  };
  return (
    <div className="container-lg">
      <div className="header py-3">
        <h3 className="fw-bold">Gallery Images</h3>
      </div>
      <div
        className="img-upload d-flex justify-content-center mb-5"
        style={{ marginTop: "25px" }}
      >
        <div className="col-6 mb-3">
          <h4 className="text-danger mb-3">UPLOAD IMAGE</h4>
          <div>
            <label htmlFor="formFile" className="form-label text-muted">
              Upload an image.
            </label>
            <input
              className="form-control mb-3"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button
              className="btn btn-warning rounded-pill"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <h4 className="text-dark mb-4 text-center">UPLOADED PHOTOS</h4>
        {gallery &&
          gallery.map((item) => {
            return (
              <div className="col-3 mb-5" key={item._id}>
                <img
                  width={250}
                  height={250}
                  src={item.image}
                  alt="..."
                  className="rounded-5 mb-2"
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm rounded py-0"
                  onClick={() => {
                    deleteGallery(item._id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
