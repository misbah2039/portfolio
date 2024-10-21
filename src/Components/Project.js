import React from "react";
import "./Project.css";
import advance from "../Assets/advance.jpg";
import intermediate from "../Assets/intermediate.jpg";
import begineer from "../Assets/beginner.jpg";
import ContactPage from "../Pages/Contact/ContactPage";
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

const Project = () => {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  // const params = useParams();
  console.log(params.get("age"));
  console.log(location.search.split("=")[1]);
  console.log("misbah", location);
  const isChildRoute =
    location.pathname.includes("/project/begineer") ||
    location.pathname.includes("/project/intermediate") ||
    location.pathname.includes("/project/advance");
  console.log(isChildRoute);
  return (
    <>
      {!isChildRoute && (
        <>
          <div id="more-project">
            <h1 className="text-center pt-5">
              My <span className="text-white">Projects</span>
            </h1>
            <h1 className="advance text-md-start">
              Advance
              <span className="text-white"> Projects</span>
            </h1>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={advance} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/advance/1" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={advance} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/advance/2" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={advance} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/advance/3" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="advance text-md-start">
              Intermediate
              <span className="text-white"> Projects</span>
            </h1>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={intermediate} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/intermediate/1" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={intermediate} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/intermediate/2" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={intermediate} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/intermediate/3" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="begineer text-md-start">
              Begineer
              <span className="text-white"> Projects</span>
            </h1>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={begineer} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/begineer/1" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={begineer} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/begineer/2" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card">
                  <img src={begineer} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/project/begineer/3" className="button">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactPage />
        </>
      )}
      <Outlet />
    </>
  );
};

export default Project;
