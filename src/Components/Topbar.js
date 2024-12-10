import React from "react";

const Topbar = () => {
  return (
    <div className="topbar bg-white py-2 px-4 d-flex align-items-center justify-content-between shadow-sm">
      <input
        type="text"
        placeholder="Search here..."
        className="form-control w-50"
      />
      <div className="d-flex align-items-center">
        <img
          src="/assets/images/user-avatar.png"
          alt="User"
          className="rounded-circle"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default Topbar;
