import React from "react";
import "./Skill.css";
import ContactPage from "../Pages/Contact/ContactPage";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import react from "../Assets/react.png";
import bootstrap from "../Assets/bootstrap.png";
import nodejs from "../Assets/nodejs.png";
import express from "../Assets/express.png";
import mongodb from "../Assets/mongodb.png";
import mongoose from "../Assets/right.jpeg";
import sql from "../Assets/sql.png";
import php from "../Assets/php.png";
import restapi from "../Assets/restapi.png";
import postman from "../Assets/postman.png";
import git from "../Assets/git.png";
import github from "../Assets/github.png";
import laravel from "../Assets/laravel.png";
import oops from "../Assets/oops.png";
import communication from "../Assets/communication.jpeg";
import solver from "../Assets/solver.jpeg";
import collaboration from "../Assets/collaboration.jpg";
import teamwork from "../Assets/teamwork.avif";
import word from "../Assets/word.jpeg";
import excel from "../Assets/excel.png";
import ppt from "../Assets/ppt.png";
import photoshop from "../Assets/photoshop.png";
const Skill = () => {
  return (
    <>
      <div id="more-skill">
        <h1 className="text-center pt-5 pb-4">
          My <span className="text-white">Skills</span>
        </h1>
        <h1 className="technical text-md-start">
          <span className="text-white ">Technical</span> Skills
        </h1>
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
        <h1 className="technical text-md-start">
          <span className="text-white ">Power</span> Skills
        </h1>
        <div className="row  skills">
          <div className="col-md-3 col-3">
            <div class="card">
              <img src={communication} className="img-fluid" alt="HTML" />
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div class="card">
              <img src={solver} className="img-fluid" alt="CSS" />
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div class="card">
              <img src={collaboration} className="img-fluid" alt="JS" />
            </div>
          </div>
          <div className="col-md-3  col-3">
            <div class="card">
              <img src={teamwork} className="img-fluid" alt="HTML" />
            </div>
          </div>
        </div>
        <h1 className="technical text-md-start">
          <span className="text-white ">Software's</span> Skill
        </h1>
        <div className="row  skills">
          <div className="col-md-3 col-3">
            <div class="card">
              <img src={word} className="img-fluid" alt="HTML" />
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div class="card">
              <img src={excel} className="img-fluid" alt="CSS" />
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div class="card">
              <img src={ppt} className="img-fluid" alt="JS" />
            </div>
          </div>
          <div className="col-md-3  col-3">
            <div class="card">
              <img src={photoshop} className="img-fluid" alt="HTML" />
            </div>
          </div>
        </div>
        <h1 className="technical text-md-start">
          <span className="text-white ">My</span> Hobbies
        </h1>
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
        </div>
      </div>
      <ContactPage />
    </>
  );
};

export default Skill;
