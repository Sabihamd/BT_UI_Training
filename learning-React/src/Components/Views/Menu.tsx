import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const Menu =() => {
  return (
    <div>
        <Link to='/home'>Home</Link> &nbsp;
        <Link to='/comments'>Comments</Link> &nbsp;
        <Link to='/login'>Login Page</Link>
        <Outlet/>
    </div>
  )
}

export default Menu;