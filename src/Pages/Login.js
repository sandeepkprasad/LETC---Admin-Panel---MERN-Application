import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [cred, setCred] = useState({ username: "", password: "" });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = "https://www.cwtrust-india.com/user/login";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: cred.username,
        password: cred.password,
      }),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("letctoken", json.jwtData);
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="text-center py-3">
          <h3 className="fs-3 fw-bold">Login Your Account</h3>
        </div>
        <div
          className="col-md-8 border border-primary-subtle p-5 rounded"
          style={{ width: "24rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-bold">
                Username
              </label>
              <input
                type="username"
                className="form-control"
                id="username"
                name="username"
                value={cred.username}
                aria-describedby="emailHelp"
                placeholder="Enter your username"
                onChange={handleChange}
                minLength={6}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={cred.password}
                placeholder="Enter your password"
                onChange={handleChange}
                minLength={8}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
