import axios from "axios";
import React, { useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./CustHeader.css";

export default function CustHeader() {
  const removeSession = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  return (
    <div className="cust-head">
      <ul className="nav-customer">
        <ul className="cust-ul2">
        <li className="cbtns">
          <NavLink
            to="loans"
            className={({ isActive }) => "clinks" + (isActive ? " active" : "")}
          >
            All Loans
          </NavLink>
        </li>
        <li className="cbtns">
          <NavLink
            to="appliedloans"
            className={({ isActive }) => "clinks" + (isActive ? " active" : "")}
          >
            Applied Loans
          </NavLink>
        </li>
        </ul>
        <ul className="cust-ul">
          <li>
            <p className="custp">Hello, {localStorage.getItem("name")}</p>
          </li>
          <li className="lchild">
            <NavLink to="/login" className="clinks" onClick={removeSession}>
              Sign Out
            </NavLink>
          </li>
        </ul>
      </ul>
      <div className="outlet-container-scroll">
        <Outlet />
      </div>
    </div>
  );
}
