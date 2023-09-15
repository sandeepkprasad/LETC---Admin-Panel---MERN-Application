import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import letcContext from "../Context/letcContext";

const Enquiry = () => {
  const { getEnquiry, enquiry } = useContext(letcContext);
  let navigate = useNavigate();

  useEffect(() => {
    getEnquiry();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (localStorage.getItem("letctoken")) {
      navigate("/enquiry");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-lg">
      <div className="header py-3">
        <h3 className="fw-bold">Enquiries</h3>
      </div>
      <div className="enquiry-table">
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Full Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Course</th>
            </tr>
          </thead>
          <tbody>
            {enquiry &&
              enquiry
                .slice(0)
                .reverse()
                .map((item) => {
                  return (
                    <tr key={item._id}>
                      <th scope="row">
                        {new Date(item.date).toLocaleDateString("en-GB")}
                      </th>
                      <td>{item.name}</td>
                      <td>{item.number}</td>
                      <td>{item.course}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enquiry;
