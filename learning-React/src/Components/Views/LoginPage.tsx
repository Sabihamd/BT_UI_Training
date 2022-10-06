import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type IloginForm = {
  email: string;
  password: string;
};

export default function Login() {

  const [loginForm, setloginForm] = useState<IloginForm>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof event.target.value);
    setloginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const login = () => {
    if (loginForm.email === "admin") {
      sessionStorage.setItem("role", "admin");
      navigate("/home");
    } else {
      sessionStorage.setItem("role", "guest");
      navigate("/home");
    }
  };

  

  return (
    <div className="container mt-4">
      <p>
        Email Address :
        <input
          className="form-control"
          name="email"
          type="email"
          onChange={(event) => handleChange(event)}
        />
      </p>
      <p>
        Password :
        <input
          className="form-control"
          name="password"
          type="password"
          onChange={(event) => handleChange(event)}
        />
      </p>

      <p>
        <button onClick={login}>Login</button>
      </p>

    </div>
  );
}
