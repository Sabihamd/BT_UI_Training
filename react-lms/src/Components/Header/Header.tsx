import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Header.css';

export default function Header() {

  const navigate = useNavigate(); 

  const navFunction = () => {
    navigate('./home');
  }

  return (
    <div className='head'>
      <ul className='header-nav'>
        <li className='header-item logo'>
          <span >
            <img className='header-img'
              src="https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
              alt="logo"
            ></img>
            <span className='title' onClick={navFunction}>DS PLMS</span>
          </span>
        </li>
        <ul className='btns-ul'>
        <li className="btns">
          <NavLink to="/login" className={({ isActive }) => "clinks" + (isActive ? " active" : "")} >
            Login
          </NavLink>{" "}
        </li>
        <li className="btns">
          <NavLink to="/signup" className={({ isActive }) => "clinks" + (isActive ? " active" : "")} >
            Sign Up
          </NavLink>
        </li>
        </ul>
      </ul>
      <div className='outlet-container'>
      <Outlet/>
      </div>
    </div>
  )
}
