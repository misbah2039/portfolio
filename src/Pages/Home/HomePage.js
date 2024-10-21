import React, { useEffect } from "react";
import "./HomePage.css";
import misbah from "../../Assets/misbah.jpeg";
import { Link } from "react-router-dom";
// import right from "../../Assets/right.jpeg";

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/nav.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      {/* /////////////////////// Home Section Start /////////////////////// */}
      <section id="home-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 left">
              <div>
                <h1>
                  Hello,{" "}
                  <span>
                    I'm <br />
                    Mohd Misbahuddin
                  </span>
                </h1>
                <h6>Full Stack Web Developer (Mern & Laravel)</h6>
                <div className="button">
                  <Link to="/contact" className="contact-me">
                    Contact Me
                  </Link>

                  <Link className="resume">Resume</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6  right">
              <img
                className="img-fluid d-block mx-auto"
                src={misbah}
                alt="Misbah"
              />
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////// Home Section End /////////////////////// */}
    </>
  );
};

export default HomePage;
