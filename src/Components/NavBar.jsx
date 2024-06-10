import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      {/* <!-- Navigation  --> */}
      <nav className="navbar navbar-expand-lg navbar-white bg-white static-top">
        <div className="container">
          <Link to="guvi-home" className="navbar-brand">
            <img src=".\src\assets\guvi.jpg" alt="..." height="36" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link  text-success fs-4 fw-semibold"
                  to="guvi-all"
                >
                  ALL
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link text-success fs-4 fw-semibold"
                  to="guvi-ds"
                >
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link text-success fs-4 fw-semibold"
                  to="guvi-ns"
                >
                  NETWORK SECURITY
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link text-success fs-4 fw-semibold"
                  to="guvi-wd"
                >
                  WEB DEVELOPMENT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
