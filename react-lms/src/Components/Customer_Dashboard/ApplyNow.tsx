import axios from "axios";
import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ApplyNow.css";

type ILoanApply = {
    currentemployer: string,
    designation: string,
    salary: string,
    loanAmountToApply: string,
    approved: boolean,
    rejected: boolean
}

type IUser = {
  email: string,
  gender: string,
  name: string,
  password: string,
  role: string,
  id?: number
}

export default function ApplyNow() {

    const [loanData, setLoanData] = useState<ILoanApply>(
        {
            currentemployer: '', designation: '', salary: '', loanAmountToApply: '', approved: false, rejected: false
        }
    );

    const [userData, setUserData] = useState<IUser>({
      email: '', gender: '', name: '', password: '', role: ''
        });

    const getUserInfo = () => {
      axios.get('http://localhost:4000/user')
      .then((response) => {
        let userinfo=response.data.filter((obj1: any) => {
          return (obj1.email === localStorage.getItem('email'))
        })
        setUserData(userinfo[0])
        setUserData((prevState) => {
          const {id, ...rest} = prevState
          return rest
        })
      })
      .catch((error: any) => {
        console.log(error)
      })
    }

    useEffect(() => {
        getUserInfo();
    },[])

    const { state } = useLocation();
    const { record } = state;
    
    const handleChange = (e: any) => {
        setLoanData({...loanData, [e.target.name]: e.target.value})
    }

    const calRate = () => {
       return (parseInt(loanData.loanAmountToApply))/1000;
    }

    const sendData = () => {
      axios.post('http://localhost:4000/appliedNewLoans', {...record, ...loanData, ...userData}, {headers: {'content-type': 'application/json'}})
      .then((response) => {
        // console.log(response)
        alert('applied')
      })
      .catch((error) => {
        console.log(error)
      })
    }

  return (
    <>
    <h3 className="applyloans-h3">Hi, {localStorage.getItem('email')}</h3>
    <p className="applyloans-p">Welcome to DS Finance 3-step Loan Application System</p>
    <div className="applyloans-card">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              (1) First, Let's make sure your profile is up to date.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
                <form >
                    <label htmlFor='curr_empr' className="applyloans-label">Current Employer
                    <input type='text'id='curr_empr' name='currentemployer' className="form-control" onChange={handleChange} />
                    </label>
                    <label htmlFor='des' className="applyloans-label" >Designation
                    <input type='text'id='des' name='designation' className="form-control" onChange={handleChange} />
                    </label>
                    <label htmlFor='sal' className="applyloans-label" >Monthly Salary
                    <input type='text'id='sal' name='salary' className="form-control" onChange={handleChange} />
                    </label>
                </form>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              (2) Get your rate!
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="applyloans-ul">
                <li>Loan Provider: {record.title}</li>
                <li>Term Length: {record.TermLenghth} </li>
                <li>Required Minimum Credit Score: {record.Mincreditscore} </li>
                <li>Available Loan Amount Range: {record.loanAmount}</li>
              </ul>
              <label htmlFor="amt" className="applyloans-label"> Please enter the amount you are applying for: &nbsp;
                <input type='text' id="amt" className="form-control" name='loanAmountToApply' onChange={handleChange} />
              </label>
              <p className="applyloans-p2">Interest rate based on your profile is: </p>
              <p className="applyloans-p3" >{calRate()}%</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             (3) Submit
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <button type="submit" className="btn btn-primary" onClick={sendData} >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
