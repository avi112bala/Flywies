import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="sidebar bg-light vh-100 p-3">
      <img src="/assets/images/Logo.png" alt="Logo" className="mb-4 w-25" />
      <ul className="list-unstyled">
        <li className="mb-3">
          <NavLink href="/" className="text-decoration-none text-dark">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink href="/users" className="text-decoration-none text-dark">
            <i className="bi bi-people me-2"></i> Users List
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink href="/users" className="text-decoration-none text-dark">
            <i className="bi bi-people me-2"></i> Users List
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink href="/users" className="text-decoration-none text-dark">
            <i className="bi bi-people me-2"></i> Users List
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink href="/users" className="text-decoration-none text-dark">
            <i className="bi bi-people me-2"></i> Users List
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink href="/users" className="text-decoration-none text-dark">
            <i className="bi bi-people me-2"></i> Users List
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink href="/users" className="text-decoration-none text-dark">
            <i className="bi bi-people me-2"></i> Users List
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink href="/users" className="text-decoration-none text-dark">
            <i className="bi bi-people me-2"></i> Users List
          </NavLink>
        </li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
