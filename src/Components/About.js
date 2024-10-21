import React from "react";
import ContactPage from "../Pages/Contact/ContactPage";
import "./About.css";

const About = () => {
  return (
    <>
      <div id="more-about">
        <h1 className="text-center pt-5 pb-4">
          Let's Talk About <span className="text-white">Myself</span>
        </h1>
        <p className="myself">
          Hello, I'm Saquib Jawed, a passionate and aspiring UI/UX designer with
          a flair for creating visually stunning and user-friendly digital
          experiences. I believe that good design is not just about aesthetics;
          it's about making technology more intuitive and accessible for
          everyone.
        </p>
        <p className="">
          My journey into the world of design began with a deep appreciation for
          art and a curiosity about how things work. Over the years, I've honed
          my skills and developed a keen eye for detail, striving to create
          designs that resonate with users and leave a lasting impact.
        </p>
        <p className="">
          I'm excited to embark on this creative adventure, using my knowledge
          and creativity to craft delightful user experiences. I'm a firm
          believer in the power of user-centered design, and I'm always eager to
          dive into the minds of users to understand their needs and
          preferences.
        </p>
        <p className="">
          I'm well-versed in industry-standard design tools like Adobe Creative
          Suite, Figma, and Sketch, and I'm constantly expanding my skill set to
          stay up-to-date with the latest design trends and technologies. I also
          have a strong foundation in HTML and CSS, which allows me to bridge
          the gap between design and development.
        </p>
        <p className="">
          In my spare time, you'll find me exploring new design trends,
          sketching new ideas, or even experimenting with code. I love a good
          challenge, and I'm always on the lookout for projects that push my
          creative boundaries and help me grow as a designer.I'm thrilled to be
          on this journey, and I can't wait to collaborate with like-minded
          individuals and businesses that share my passion for design.
        </p>
        <p className="">
          If you have a project in mind, or if you'd simply like to connect and
          chat about design, feel free to reach out. Let's create something
          amazing together! Thank you for visiting my portfolio, and I look
          forward to connecting with you.
        </p>
        <h1 className="education text-md-start text-center">
          <span className="text-white ">My</span> Education
        </h1>
        <div className="row btech">
          <div className="col-md-6 text-start">
            B.tech (Computer Engineering)
          </div>
          <div className="col-md-6 text-md-end">(June-2022)</div>
          <div className="col-md-6 text-start">
            Maharashi Dayanand University, Hariyana
          </div>
          <div className="col-md-6 text-md-end">CGPA - 7.9 CGPA</div>
        </div>
        <div className="row diploma">
          <div className="col-md-6 text-start">
            Diploma (Computer Engineering)
          </div>
          <div className="col-md-6 text-md-end">(June-2019)</div>
          <div className="col-md-6 text-start">
            Jamia Millia Islamia, New Delhi
          </div>
          <div className="col-md-6 text-md-end">Percentage - 65%</div>
        </div>
        <div className="row inter">
          <div className="col-md-6 text-start">Intermediate (PCM)</div>
          <div className="col-md-6 text-md-end">(June-2016)</div>
          <div className="col-md-6 text-start">U.P Board, Uttar Pradesh</div>
          <div className="col-md-6 text-md-end">Percentage - 80.5%</div>
        </div>
        <div className="row high">
          <div className="col-md-6 text-start">High School</div>
          <div className="col-md-6 text-md-end">(June-2014)</div>
          <div className="col-md-6 text-start">U.P Board, Uttar Pradesh</div>
          <div className="col-md-6 text-md-end">Percentage - 84.15%</div>
        </div>
      </div>
      <ContactPage />
    </>
  );
};

export default About;
