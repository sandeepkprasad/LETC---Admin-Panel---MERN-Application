import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import letcContext from "../Context/letcContext";

const Notification = () => {
  let navigate = useNavigate();
  const { getNotification, noti, addNotification, deleteNotification } =
    useContext(letcContext);
  const [notify, setNotify] = useState({ addnotify: "" });

  useEffect(() => {
    getNotification();
  });

  useEffect(() => {
    if (localStorage.getItem("letctoken")) {
      navigate("/notification");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setNotify({ ...notify, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNotification(notify.addnotify);
    setNotify({ addnotify: "" });
  };

  return (
    <div className="container-lg pb-5">
      <div className="header py-3">
        <h3 className="fw-bold">Notifications</h3>
      </div>
      <div
        className="notification d-flex justify-content-center mb-5"
        style={{ marginTop: "25px" }}
      >
        <div className="col-6">
          <h4 className="text-danger mb-3">ADD NOTIFICATION</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="notification" className="mb-2">
                (Only first 1 notification will be shown to client side.)
              </label>
              <textarea
                className="form-control mb-3"
                id="notification"
                name="addnotify"
                placeholder="Enter Notification Text"
                value={notify.addnotify}
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning rounded-pill">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="notification">
        <h4 className="text-dark mb-3 text-center">ADDED NOTIFICATIONS</h4>
        <div className="row d-flex justify-content-center">
          {noti &&
            noti.map((item) => {
              return (
                <div
                  className="col-10 mb-4 shadow border rounded py-3"
                  key={item._id}
                >
                  <p>{item.notification}</p>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm rounded py-0"
                    onClick={() => {
                      deleteNotification(item._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Notification;
