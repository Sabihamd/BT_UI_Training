import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AllLoans.css";
import {Navigate, useNavigate} from 'react-router-dom';

type ILoan = {
  logo: string;
  title: string;
  loanAmount: string;
  interestRates: string;
  Mincreditscore: string;
  TermLenghth: string;
  ProcessingFee: string;
};

export default function AllLoans() {
  const [loansData, setLoansData] = useState<ILoan[]>();

  useEffect(() => {
    getLoansData();
  }, []);

  const getLoansData = () => {
    axios
      .get("http://localhost:4000/loans")
      .then((response) => {
        setLoansData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate()

  const checkEligibility= (record: any) => {
      axios.get("http://localhost:4000/appliedNewLoans")
      .then((response) => {
        let tmpArray=response.data.filter((obj: any) => {
          return (
            obj.email === localStorage.getItem('email') && obj.title === record.title
          );
        })
        if(tmpArray.length > 0) alert('You have already applied this loan.')
        else{
        navigate('/customer/applynow', { state: {record}})
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {loansData &&
        loansData.map((record: ILoan, index) => {
          return (
            <div className="loans-card" key={index} >
              <div className="loans-title">
                <h3>{record.title}</h3>
                <p>Rating: 4.9</p>
              </div>
              <div className="loans-flex">
                <div className="loans-flex-item">
                  <img className="bank-img" src={record.logo} />
                </div>
                <div className="loans-flex-item">
                  <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                      <td>Loan Amount: </td>
                      <td>{record.loanAmount}</td>
                    </tr>
                    <tr>
                      <td>Interest Rates: </td>
                      <td>{record.interestRates}</td>
                    </tr>
                    <tr>
                      <td>Min Credit Score: </td>
                      <td>{record.Mincreditscore}</td>
                    </tr>
                    <tr>
                      <td>Term Length: </td>
                      <td>{record.TermLenghth}</td>
                    </tr>
                    <tr>
                      <td>Processing Fee: </td>
                      <td>{record.ProcessingFee}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button className="loans-button" onClick={() => checkEligibility(record)}>Apply Now</button>
            </div>
          );
        })}
    </>
  );
}
