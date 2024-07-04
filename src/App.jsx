import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import All from "./Components/All";
import Fullstack from "./Components/Fullstack";
import Datascience from "./Components/Datascience";
import Artificial from "./Components/Artificial";
import Cyber from "./Components/Cyber";
import DevOps from "./Components/DevOps";
import "./App.css";
import Notfound from "./Components/Notfound";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/data science" element={<Datascience />} />
          <Route path="/artificial intelligence" element={<Artificial />} />
          <Route path="/cyber security" element={<Cyber />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/*" element={<Notfound/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
