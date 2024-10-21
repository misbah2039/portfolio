import React from "react";
import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import js from "../../Assets/js.png";
import react from "../../Assets/react.png";
import bootstrap from "../../Assets/bootstrap.png";
import nodejs from "../../Assets/nodejs.png";
import express from "../../Assets/express.png";
import mongodb from "../../Assets/mongodb.png";
import mongoose from "../../Assets/right.jpeg";
import sql from "../../Assets/sql.png";
import php from "../../Assets/php.png";
import restapi from "../../Assets/restapi.png";
import postman from "../../Assets/postman.png";
import git from "../../Assets/git.png";
import github from "../../Assets/github.png";
import laravel from "../../Assets/laravel.png";
import oops from "../../Assets/oops.png";
import "./SkillPage.css";
import { Link } from "react-router-dom";
const SkillPage = () => {
  return (
    <>
      <section id="skill-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col mb-5">
              <h1>My Skills</h1>
            </div>
          </div>
          <div className="row  skills">
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={html} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={css} className="img-fluid" alt="CSS" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={js} className="img-fluid" alt="JS" />
              </div>
            </div>
            <div className="col-md-3  col-3">
              <div class="card">
                <img src={react} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={bootstrap} className="img-fluid" alt="BOOTSTRAP" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={nodejs} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={express} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={mongodb} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={mongoose} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={sql} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={php} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={laravel} className="img-fluid" alt="HTML" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={restapi} className="img-fluid" alt="RESTAPI" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={postman} className="img-fluid" alt="POSTMAN" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={git} className="img-fluid" alt="GIT" />
              </div>
            </div>
            <div className="col-md-3 col-3">
              <div class="card">
                <img src={github} className="img-fluid" alt="GITHUB" />
              </div>
            </div>
            <div className="col-md-3 col-3 last">
              <div class="card">
                <img src={oops} className="img-fluid" alt="OOPS" />
              </div>
            </div>
          </div>
          <Link className="more" to="/skill">
            More Skills
          </Link>
        </div>
      </section>
    </>
  );
};

export default SkillPage;
