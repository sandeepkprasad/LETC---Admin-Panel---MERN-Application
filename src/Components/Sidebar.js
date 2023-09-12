import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="fixed-top vh-100 bg-dark bg-gradient border border-dark d-none d-sm-block"
      style={{ width: "15%", top: "10.5%" }}
    >
      <div className="sidebar mt-5 ps-3 pe-4">
        <ul className="text-light">
          <li className="sidebar-item mb-4 border border-warning rounded-pill text-center py-1">
            <Link to="/" className="text-decoration-none text-light fs-3">
              Home
            </Link>
          </li>
          <li className="sidebar-item mb-4 border border-warning rounded-pill text-center py-1">
            <Link
              to="/enquiry"
              className="text-decoration-none text-light fs-3"
            >
              Enquiries
            </Link>
          </li>
          <li className="sidebar-item mb-4 border border-warning rounded-pill text-center pt-2 pb-1">
            <Link
              to="/notification"
              className="text-decoration-none text-light fs-4"
            >
              Notification
            </Link>
          </li>
          <li className="sidebar-item mb-4 border border-warning rounded-pill text-center py-1">
            <Link to="/exams" className="text-decoration-none text-light fs-3">
              Exams
            </Link>
          </li>
          <li className="sidebar-item mb-4 border border-warning rounded-pill  text-center py-1">
            <Link to="/banner" className="text-decoration-none text-light fs-3">
              Banner
            </Link>
          </li>
          <li className="sidebar-item mb-4 border border-warning rounded-pill text-center py-1">
            <Link
              to="/gallery"
              className="text-decoration-none text-light fs-3"
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
