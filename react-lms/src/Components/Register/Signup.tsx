import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Signup.css";
import { useNavigate } from 'react-router-dom'; 

type IRegister = {
  name: string,
  email: string,
  password: string,
  gender: string,
  salary: string,
  role: string
}
export default function Signup() {

  const [registerData, setRegisterData] = useState<IRegister>(
    {
      name: '', email: '', password: '', gender: '', salary: '', role: 'CUSTOMER'
    }
  );

  const navigate= useNavigate();

  const handlechange = (e: any) => {
      setRegisterData({...registerData, [e.target.name]:e.target.value})
  }

  const isNewUser = () => {
    axios.get('http://localhost:4000/user')
    .then((response) => {
      let found=response.data.find((record: any) => {
        return record.email === registerData.email
      })  
      if(found?.email)
      {
        window.alert('User already exists');    
      }
      else{
       registerUser();
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const registerUser = () => {
    console.log(registerData)
    axios.post('http://localhost:4000/user', registerData, {
      headers:{
      'content-type': 'application/json'
    }
    }
    )
    .then((response) => {
      navigate('/login')  
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="outlet-container">
      <div className="signup-container">
        <form>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              name='name'
              onChange={handlechange}
            />
            <label className="form-label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              name='email'
              onChange={handlechange}
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
              placeholder="Enter your password"
              name='password'
              onChange={handlechange}
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="flex-container">
            <div>
              <p className="gender">Choose your gender: </p>
            </div> &nbsp; &nbsp;
            <div>
              <label className="radio-inline">
                <input type="radio" name="gender" checked onChange={handlechange} value='male'/> Male
              </label> &nbsp; &nbsp;
              <label className="radio-inline">
                <input type="radio" name="gender" onChange={handlechange} value='female'/>
                Female
              </label>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example5"
              className="form-control"
              placeholder="Enter your Salary"
              name='salary'
              onChange={handlechange}
            />
            <label className="form-label" htmlFor="form2Example5">
              Salary
            </label>
          </div>
          <button type="button" onClick={isNewUser} className="btn btn-primary btn-block mb-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
