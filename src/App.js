import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LetcState from "./Context/LetcState";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Enquiry from "./Pages/Enquiry";
import Notification from "./Pages/Notification";
import Banner from "./Pages/Banner";
import Gallery from "./Pages/Gallery";
import Exams from "./Pages/Exams";

const App = () => {
  return (
    <LetcState>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/enquiry" element={<Enquiry />} />
          <Route exact path="/notification" element={<Notification />} />
          <Route exact path="/banner" element={<Banner />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/exams" element={<Exams />} />
        </Routes>
      </Router>
    </LetcState>
  );
};

export default App;
