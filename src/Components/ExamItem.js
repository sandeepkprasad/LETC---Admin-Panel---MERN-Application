import React, { useContext } from "react";
import letcContext from "../Context/letcContext";
import { Link } from "react-router-dom";

const ExamItem = (props) => {
  const { _id, text, link, date } = props.exam;
  const { deleteExam } = useContext(letcContext);

  return (
    <div className="col-10 col-md-5 mb-3 mx-3 shadow border rounded py-3">
      <p className="mb-1 text-black text-break">{text}</p>
      <Link to={link} target="_blank" className="text-decoration-none text-primary">
        Click here
      </Link>
      <p className="text-muted mt-3">{new Date(date).toDateString()}</p>
      <div className="blog-btn text-start mt-3">
        <button
          type="button"
          className="btn btn-danger btn-sm rounded py-0"
          onClick={() => {
            deleteExam(_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExamItem;
