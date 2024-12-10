import React, { useState } from "react";
import { loginAdmin } from "../Routes";
import { useNavigate } from "react-router";

const LoginAdmin = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAdmin(formData);
      console.log("Admin Logged In:", response);
      localStorage.setItem('Token',response.accessToken)
      navigate("/dashboard")
    } catch (error) {
      console.error("Error Logging In:", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {/* Centering the content */}
        <div
          className="col-md-6 d-flex align-items-center justify-content-center"
          style={{
            height: "600px",
            background: "linear-gradient(180deg, #121744 0%, #2D3AAA 100%)",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <h3 className="text-center mb-4">Admin Login</h3>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 h-0"
                style={{ backgroundColor: "#121744" }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div
          className="col-md-6 d-flex align-items-center justify-content-center"
          style={{
            height: "600px",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <div className="col-md-3 w-100 d-block">
              <img src="/assets/images/Logo.png" />
            </div>
            <div className="col-md-3 w-100 d-block mt-5" style={{ height: "245px" }}>
              <img
                src="/assets/images/Group.png"
                className="w-100 h-100"
                style={{ height: "245px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
