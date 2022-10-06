import axios, { AxiosRequestConfig } from "axios";
import React from "react";
import { useState } from "react";

type ILogin = {
  email: string;
  password: string;
};

type IRegister = {
  name: string;
  email: string;
  password: string;
  admin: boolean 
};

export default function Start() {
  const [displayLogin, setDisplayLogin] = useState<boolean>(false);
  const [displayRegister, setDisplayRegister] = useState<boolean>(false);
//   const [isChecked, setIsChecked] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<string>();
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    admin: false
  });
  const [displayLogOut, setDisplayLogOut] = useState<boolean>(false);
  const [loginButton, setLoginButton] = useState<string>("Login");

  // const [token, setToken] = useState<AxiosRequestConfig>()

  const handleRegisterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    // console.log(registerData)
    axios
      .post(
        "https://angularjwtauthentication.herokuapp.com/api/user/register",
        registerData
      )
      .then((response) => {
        console.log(response);
        window.alert("User Registered Successfully");
      })
      .catch((error) => console.log(error));
  };

  const userLogin = () => {
    axios
      .post(
        "https://angularjwtauthentication.herokuapp.com/api/user/login",
        loginData
      )
      .then((response) => {
        console.log(response.data);
        window.alert("User Logged In");
        // setToken(response.data.token)
        localStorage.setItem("token", response.data.token);
        setLoginButton("Log Out");
      })
      .catch((error) => console.log(error));
  };

  const sendToken = () => {
    setDisplayRegister(false);
    setDisplayLogin(false);
    axios
      .get("https://angularjwtauthentication.herokuapp.com/api/user/list", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setStatusMsg(response.data.text);
      })
      .catch((error) => console.log(error));
  };

  const deleteToken = () => {
    localStorage.removeItem("token");

    setDisplayLogin(false);
    setDisplayRegister(false);
    setLoginButton("Login");
  };

  return (
    <div>
      <>
        <button
          onClick={
            loginButton === "Login"
              ? () => {
                  setDisplayLogin(!displayLogin);
                  setDisplayRegister(false);
                  setStatusMsg("");
                }
              : deleteToken
          }
        >
          {loginButton}
        </button>
        <button
          onClick={() => {
            setDisplayRegister(!displayRegister);
            setDisplayLogin(false);
            setStatusMsg("");
          }}
        >
          Register
        </button>
        <button onClick={sendToken}>List</button>
        <h3>{statusMsg}</h3>
        {!!displayLogin ? (
          <>
            <title>Login Page</title>
            <p>
              Enter Your Email:
              <input type="email" onChange={handleLoginInput} name="email" />
            </p>
            <p>
              Enter Your Password:
              <input
                type="password"
                onChange={handleLoginInput}
                name="password"
              />
            </p>
            <button onClick={userLogin}>Login</button>
          </>
        ) : null}
        {!!displayRegister ? (
          <>
            <title>Register Page</title>
            <p>
              Enter Your Name:
              <input type="text" onChange={handleRegisterInput} name="name" />
            </p>
            <p>
              Enter Your Email:
              <input type="email" onChange={handleRegisterInput} name="email" />
            </p>
            <p>
              Enter Your Password:
              <input
                type="password"
                onChange={handleRegisterInput}
                name="password"
              />
            </p>
            <p>Are you an Admin? 
            <input type='checkbox' name='admin' onChange={(e) => { handleRegisterInput(e)}} />
            </p>
            <button onClick={registerUser}>Register</button>
          </>
        ) : null}
      </>
    </div>
  );
}
