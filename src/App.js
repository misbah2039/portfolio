import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import FormA from "./Components/FormA.js";
import About from "./Components/About.js";
import Skill from "./Components/Skill.js";
import Project from "./Components/Project.js";
import Contact from "./Components/Contact.js";
import Begineer1 from "./Projects/Begineer/Begineer1.js";
import Begineer2 from "./Projects/Begineer/Begineer2.js";
import Begineer3 from "./Projects/Begineer/Begineer3.js";
import Intermediate1 from "./Projects/Intermediate/Intermediate1.js";
import Intermediate2 from "./Projects/Intermediate/Intermediate2.js";
import Intermediate3 from "./Projects/Intermediate/Intermediate3.js";
import Advance1 from "./Projects/Advance/Advance1.js";
import Advance2 from "./Projects/Advance/Advance2.js";
import Advance3 from "./Projects/Advance/Advance3.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/skill" Component={Skill}></Route>
          <Route path="/project" Component={Project}>
            <Route exact path="begineer/1" Component={Begineer1}></Route>
            <Route exact path="begineer/2" Component={Begineer2}></Route>
            <Route exact path="begineer/3" Component={Begineer3}></Route>
            <Route
              exact
              path="intermediate/1"
              Component={Intermediate1}
            ></Route>
            <Route
              exact
              path="intermediate/2"
              Component={Intermediate2}
            ></Route>
            <Route
              exact
              path="intermediate/3"
              Component={Intermediate3}
            ></Route>
            <Route exact path="advance/1" Component={Advance1}></Route>
            <Route exact path="advance/2" Component={Advance2}></Route>
            <Route exact path="advance/3" Component={Advance3}></Route>
          </Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/form" Component={FormA}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
