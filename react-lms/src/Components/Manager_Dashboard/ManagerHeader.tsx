import React from 'react';
import {Link, NavLink, Outlet } from 'react-router-dom';
import '../Customer_Dashboard/CustHeader.css'

export default function ManagerHeader() {

  return (
    <div>
      <div className="cust-head">
        <ul className="nav-manager">
          <li className="cbtns">
          <NavLink to='apps' className={({ isActive }) => "clinks" + (isActive ? " active" : "")}  >All Applications</NavLink>
          </li>
          <li className="cbtns">
          <NavLink to='pending' className={({ isActive }) => "clinks" + (isActive ? " active" : "")}  >Pending Applications</NavLink>
          </li>
          <li className='cbtns'>
          <NavLink to='approved' className={({ isActive }) => "clinks" + (isActive ? " active" : "")}  >Approved Applications</NavLink>
          </li>
          <li className="cbtns">
          <NavLink to='rejected' className={({ isActive }) => "clinks" + (isActive ? " active" : "")}  >Rejected Applications</NavLink>
            </li>
            <ul className='cust-ul'>
            <li >
            <p className="custp">Hello, {localStorage.getItem("name")}</p>
          </li>
            <li className="lchild">
          <NavLink to='/login' className='clinks'>Sign Out</NavLink>
            </li>
            </ul>
        </ul>
        <div className="outlet-container-scroll">
          <Outlet/>
        </div>
    </div>
    </div>
  )
}
