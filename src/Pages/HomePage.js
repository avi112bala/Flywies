import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center vh-100">
        {/* Left Section */}
        <div className="mt-1 ms-4">
          <img
            src="/assets/images/Logo.png"
            alt="Veocab Logo"
            style={{ width: "20rem" }}
          />
        </div>
        <div className="col-md-6 text-center">
          {/* Logo */}

          {/* Buttons */}
          <div className="mb-4 ms-5">
            <Link
              to="/login"
              className="btn btn-warning text-white w-50 mb-2 d-block"
              style={{ fontWeight: "bold" }}
            >
              Admin Login
            </Link>
            <Link
              to="/subadmin"
              className="btn btn-outline-warning w-50 d-block"
              style={{ fontWeight: "bold" }}
            >
              Sub admin login
            </Link>
          </div>
          {/* Tagline */}
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <img
            src="/assets/images/Group3.png"
            alt="Illustration"
            className="img-fluid"
          />
        </div>
        <p className="mb-5 w-25" style={{ fontSize: "20px" }}>
          <strong> Move with</strong>
          <br />
          <span className="text-warning">Safely</span>{" "}
          <strong>to your destination.</strong>
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
