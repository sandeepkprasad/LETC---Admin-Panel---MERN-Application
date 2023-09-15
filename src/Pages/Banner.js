import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Banner = () => {
  let navigate = useNavigate();
  const [file, setFile] = useState();
  const [banner, setBanner] = useState();

  useEffect(() => {
    if (localStorage.getItem("letctoken")) {
      navigate("/banner");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let url = "https://www.cwtrust-india.com/banner/getbanner";
    axios
      .get(url)
      .then((res) => setBanner(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const handleUpload = () => {
    let url = "https://www.cwtrust-india.com/banner/upload";
    const formdata = new FormData();
    formdata.append("file", file);

    axios
      .post(url, formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const deleteBanner = async (id) => {
    let url = `https://www.cwtrust-india.com/banner/deletebanner/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // eslint-disable-next-line
    const json = await response.json();

    const newBanner = banner.filter((item) => {
      return item._id !== id;
    });
    setBanner(newBanner);
  };
  return (
    <div className="container-lg">
      <div className="header py-3">
        <h3 className="fw-bold">Banner Images</h3>
      </div>
      <div
        className="img-upload d-flex justify-content-center mb-5"
        style={{ marginTop: "25px" }}
      >
        <div className="col-6 mb-3">
          <h4 className="text-danger mb-3">UPLOAD BANNER</h4>
          <div>
            <label htmlFor="formFile" className="form-label text-muted">
              (Only first 4 images will be shown to client side. Max size 1400 X
              350 pixels.)
            </label>
            <input
              className="form-control mb-3"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button
              type="submit"
              className="btn btn-warning rounded-pill"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <h4 className="text-dark mb-4 text-center">UPLOADED BANNERS</h4>
        {banner &&
          banner.map((item) => {
            return (
              <div className="col-6 mb-5" key={item._id}>
                <img
                  width={500}
                  height={250}
                  src={item.image}
                  alt="..."
                  className="rounded-5 mb-2"
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm rounded py-0"
                  onClick={() => {
                    deleteBanner(item._id);
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

export default Banner;
