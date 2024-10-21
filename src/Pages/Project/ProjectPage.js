import React from "react";
import beginner from "../../Assets/beginner.jpg";
import advance from "../../Assets/advance.jpg";
import intermediate from "../../Assets/intermediate.jpg";
import { Link } from "react-router-dom";
import "./ProjectPage.css";
const ProjectPage = () => {
  return (
    <>
      <section id="project-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col mb-5">
              <h1>My Projects</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 ">
              <div class="card">
                <img src={beginner} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Begineer</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/project" className="button">
                    View More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div class="card">
                <img src={intermediate} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Intermediate</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/project" className="button">
                    View More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div class="card">
                <img src={advance} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Advance</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/project" className="button">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
