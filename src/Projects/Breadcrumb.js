// src/Breadcrumb.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames);
  return (
    <nav>
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          console.log(to);

          if (index == 1) {
            return null;
          }
          if (index == 2) {
            return (
              <li className="me-2" key={to}>
                <Link to={to}>Begineer{value}</Link>
              </li>
            );
          }
          if (index == 0) {
            return (
              <li className="m2-4 me-2" key={to}>
                <Link to={to}>Project</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
