import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assests/logo.jpg";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("letctoken");
    navigate("/login");
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient fixed-top d-none d-sm-block">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img width={30} src={logo} alt="logo" className="rounded" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Luminous Educational Training Centre Pvt. Ltd.
              </Link>
            </li>
          </ul>
          <div className="login-btn">
            {localStorage.getItem("letctoken") ? (
              <Link
                className="btn btn-warning rounded-pill"
                to="/"
                role="button"
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <Link
                className="btn btn-warning rounded-pill"
                to="/login"
                role="button"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
