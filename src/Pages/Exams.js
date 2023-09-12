import React, { useContext, useState, useEffect } from "react";
import letcContext from "../Context/letcContext";
import { useNavigate } from "react-router-dom";
import ExamItem from "../Components/ExamItem";

const Exams = () => {
  let navigate = useNavigate();
  const { getExams, exam, addexam } = useContext(letcContext);
  const [examm, setExamm] = useState({ text: "", link: "" });

  useEffect(() => {
    getExams();
  });

  useEffect(() => {
    if (localStorage.getItem("letctoken")) {
      navigate("/exams");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setExamm({ ...examm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addexam(examm.text, examm.link);
    setExamm({ text: "", link: "" });
  };
  return (
    <div className="container-lg pb-5">
      <div className="header py-3">
        <h3 className="fw-bold">Exam Notification</h3>
      </div>
      <div
        className="exams d-flex justify-content-center mb-5"
        style={{ marginTop: "25px" }}
      >
        <div className="col-6">
          <h4 className="text-danger mb-3">ADD EXAM NOTIFICATION</h4>
          <div className="exams">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="text"
                  rows="3"
                  placeholder="Enter Notification Text"
                  name="text"
                  value={examm.text}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    URL Link
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="link"
                    name="link"
                    value={examm.link}
                    aria-describedby="inputGroupPrepend"
                    placeholder="Enter URL Link"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-warning rounded-pill">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="exam">
        <h4 className="text-dark mb-3 text-center">ADDED EXAM NOTIFICATION</h4>
        <div className="row d-flex justify-content-center">
          {exam &&
            exam
              .slice(0)
              .reverse()
              .map((item) => {
                return <ExamItem exam={item} key={item._id} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Exams;
