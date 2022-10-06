import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const [role, setRole] = useState<string | undefined>();
  const navigate = useNavigate();
  const res=useLocation();

  useEffect(() => {
    
    let role1: any = sessionStorage.getItem("role");
    setRole(role1);
  }, [res.pathname]);

  const logout = () => {
    sessionStorage.removeItem("role");
    alert("logout successfully");
    navigate("/login");
  };

  return (
    <div className="container">
      {role == "admin" ? (
        <>
          <Link to="/home">Home</Link> &nbsp; &nbsp; &nbsp;
          <Link to="/comment">Comment</Link> &nbsp;

          <button onClick={logout}>Logout</button>
        </>
      ) : role == "guest" ? (
        <>
          <Link to="/home">Home</Link> &nbsp; &nbsp; &nbsp;
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
