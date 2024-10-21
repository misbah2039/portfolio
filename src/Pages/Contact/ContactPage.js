import React from "react";
import "./ContactPage.css";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      <section id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col mb-5">
              <h4>
                <Link to="/contact" className="contact">
                  Contact Me
                </Link>
              </h4>
            </div>
          </div>
          <div className="row-1">
            <div className="email">
              <i className="fa-regular fa-envelope me-3 text-white"></i>
              <span>2800misbahuddin@gmail.com</span>
            </div>
            <div className="mobile">
              <i className="fa-brands fa-whatsapp me-3 text-white"></i>
              <span>7836892039</span>
            </div>
          </div>
          <div className="row-2">
            <div className="jamia">
              <i className="fa-solid fa-building-columns me-3 text-white"></i>
              <span>Jamia Millia Islamia</span>
            </div>
            <div className="mdu">
              <i className="fa-solid fa-building-columns me-3 text-white"></i>
              <span>Maharashi Dayanand University</span>
            </div>
          </div>
          <div className="row-3">
            <span>
              <i class="fa-brands fa-linkedin-in"></i>
            </span>
            <span>
              <i class="fa-brands fa-github"></i>
            </span>
            <span>
              <i class="fa-brands fa-whatsapp"></i>
            </span>
            <span>
              <i class="fa-brands fa-x-twitter"></i>
            </span>
          </div>
          <div className="row-4 mt-4">
            <span>@2024 All Right Reserved</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
