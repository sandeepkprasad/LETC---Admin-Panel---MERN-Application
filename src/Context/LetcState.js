import { useState } from "react";
import letcContext from "./letcContext";

const LetcState = (props) => {
  const [enquiry, setEnquiry] = useState([]);
  const [noti, setNoti] = useState([]);
  const [exam, setExam] = useState([]);

  const getEnquiry = async () => {
    let url = "https://www.cwtrust-india.com/enquiry/getenquiry";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setEnquiry(json);
  };

  const getNotification = async () => {
    let url = "https://www.cwtrust-india.com/notification/usernotification";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("letctoken"),
      },
    });

    const json = await response.json();
    setNoti(json);
  };

  const addNotification = async (notification) => {
    let url = "https://www.cwtrust-india.com/notification/addnotification";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("letctoken"),
      },
      body: JSON.stringify({
        notification,
      }),
    });

    const json = await response.json();
    setNoti(noti.concat(json));
  };

  const deleteNotification = async (id) => {
    let url = `https://www.cwtrust-india.com/notification/deletenotification/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("letctoken"),
      },
    });

    const json = await response.json();

    const newNotification = noti.filter((item) => {
      return item._id !== id;
    });
    setNoti(newNotification);
  };

  const getExams = async () => {
    let url = "https://www.cwtrust-india.com/exams/allexams";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setExam(json);
  };

  const addexam = async (text, link) => {
    let url = "https://www.cwtrust-india.com/exams/addexam";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        link,
      }),
    });

    const json = await response.json();
    setExam(exam.concat(json));
  };

  const deleteExam = async (id) => {
    let url = `https://www.cwtrust-india.com/exams/deleteexam/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);

    const newExam = exam.filter((item) => {
      return item._id !== id;
    });
    setExam(newExam);
  };

  return (
    <letcContext.Provider
      value={{
        getEnquiry,
        enquiry,
        getNotification,
        noti,
        addNotification,
        deleteNotification,
        getExams,
        exam,
        addexam,
        deleteExam,
      }}
    >
      {props.children}
    </letcContext.Provider>
  );
};

export default LetcState;
