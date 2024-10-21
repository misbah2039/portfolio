import React from "react";
import ContactPage from "../Pages/Contact/ContactPage";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact-me">
        <div className="container">
          <h1 className="text-white pt-5 pb-5 text-center">
            Contact <span>Me</span>{" "}
          </h1>
          <div className="row">
            <div className=" offset-md-2 offset-1 col-md-8 col-10 mb-4">
              <input
                type="text"
                className="form-control p-2"
                placeholder="Name"
              />
            </div>
            <div className="offset-md-2 offset-1 col-md-8 col-10 mb-4">
              <input
                type="text"
                className="form-control p-2"
                placeholder="Email"
              />
            </div>
            <div className="offset-md-2 offset-1 col-md-8 col-10 mb-4">
              <input
                type="text"
                className="form-control p-2"
                placeholder="Subject"
              />
            </div>
            <div className="offset-md-2 offset-1 col-md-8 col-10 mb-4">
              <textarea
                className="form-control"
                placeholder="Messages"
                rows="7"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="offset-4 col-4 mb-5 mt-3">
              <button className="form-control" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactPage />
    </>
  );
};

export default Contact;
