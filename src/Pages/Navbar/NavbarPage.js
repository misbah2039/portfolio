import React from "react";
// import { Link } from "react-router-dom";
import "./NavbarPage.css";
import { Link } from "react-router-dom";
const NavbarPage = () => {
  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (
      navbarCollapse &&
      navbarToggler &&
      navbarCollapse.classList.contains("show")
    ) {
      navbarToggler.click();
    }
  };
  return (
    <>
      <section className="navbar-section" id="navbar-section">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" to="#">
              <h1>MM</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  MM
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/"
                      data-scroll-to="/home-section"
                      onClick={handleNavLinkClick}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/about"
                      data-scroll-to="about-section"
                      onClick={handleNavLinkClick}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/skill"
                      onClick={handleNavLinkClick}
                    >
                      Skill
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/project"
                      onClick={handleNavLinkClick}
                    >
                      Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/contact"
                      onClick={handleNavLinkClick}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavbarPage;
