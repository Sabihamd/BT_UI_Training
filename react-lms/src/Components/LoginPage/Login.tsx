import axios from "axios";
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import AppliedLoans from "../Customer_Dashboard/Applied_Loans/AppliedLoans";

type ILoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const userLogin = () => {
    axios
      .get("http://localhost:4000/user")
      .then((response) => {
        let tmp = response.data;
        tmp.map((record: any) => {
          if (
            record.email === loginData.email &&
            record.password === loginData.password
          ) {
            localStorage.setItem('name', record.name);
            localStorage.setItem('email', record.email);
            if (record.role === "CUSTOMER") {
              navigate("/customer");
            }
            if (record.role === "MANAGER") {
              navigate("/manager");
            }
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <div className="outlet-container">
      <div className="login-container">
        <form>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              placeholder="Enter your Email"
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="email">
              Email address
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              placeholder="Enter your Password"
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
          <button
            type="button"
            onClick={userLogin}
            className="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
