import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-lg d-none d-sm-block">
        <div className="header py-3">
          <h3 className="fw-bold">Home</h3>
        </div>
        <div
          className="admin d-flex justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div className="col-10">
            <h4 className="text-danger">ADMIN PANEL</h4>
            <h1>Luminous Educational Training Centre Pvt. Ltd.</h1>
          </div>
        </div>
      </div>
      <div className="container-lg d-block d-sm-none">
        <div className="text-center">
          <h4 className="text-danger mb-4">Does't Support Small Screen</h4>
          <h4>Please Open on Large Screen</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
