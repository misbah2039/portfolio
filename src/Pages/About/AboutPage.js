import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section id="about-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1>
                About <span>Me</span>
              </h1>
              <p>
                Strong in design and integration with intuitive problem-solving
                skills. Proficient in{" "}
                <span>HTML, CSS, JavaScript, React-JS, UI and UX Design.</span>{" "}
                Passionate about implementing and launching new projects.
              </p>
              <Link className="more" to="/about">
                More Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
