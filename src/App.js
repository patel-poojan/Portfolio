import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import MySkills from "./Pages/Home/MySkills";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import AboutMe from "./Pages/Home/AboutMe";
import ContactMe from "./Pages/Home/ContactMe";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<MySkills />}></Route>
            <Route path="/portfolio" element={<MyPortfolio />}></Route>
            <Route path="/aboutme" element={<AboutMe />}></Route>
            <Route path="/contactme" element={<ContactMe />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
