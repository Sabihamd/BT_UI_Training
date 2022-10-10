import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../All_Loans/AllLoans.css';

type IApplied = {
  email: string,
  title: string,
  logo: string,
  loanAmountToApply: string,
  interestRates: string,
  ProcessingFee: string,
  TermLenghth: string,
  approved: boolean,
  rejected: boolean
}

export default function AppliedLoans() {

  const [appliedloans, setAppliedLoans] = useState<IApplied[]>([]);

  useEffect(() => {
    getAppliedLoansData();
  }, [])

  const getAppliedLoansData = () => {
    axios.get('http://localhost:4000/appliedNewLoans')
    .then((response) => {
      let tmpArray= response.data?.filter((record: any) => {
      return record.email== localStorage.getItem('email')
      })
      setAppliedLoans(tmpArray);
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  const checkStatus = (record: any) => {
    if (!record.approved && !record.rejected) {
      return "Pending";
    }
    if (record.approved === true) {
      return "Approved";
    }
    if (record.rejected === true) {
      return "Rejected";
    }
  };

  return (
    <>
    {
      (appliedloans?.length >0) ? appliedloans?.map((record) => {
        return (
        <div className='loans-card'>
        <div className='loans-title'>
          <h3>{record.title}</h3>
        <p>Applied Date: 20-08-2020</p>
        </div>
        <div className='loans-flex'>
          <div className='loans-flex-item'>
            <img className='bank-img' src={record.logo} />
          </div>
          <div  className='loans-flex-item'>
            <table>
              <tr>
                <td>Applied Amount: </td>
                <td>{record.loanAmountToApply}</td>
                </tr>
                <tr>
                <td>Interest Rates: </td>
                <td>{record.interestRates}</td>
                </tr>
                <tr>
                <td>Processing Fee: </td>
                <td>{record.ProcessingFee}</td>
                </tr>
                <tr>
                <td>Term Length: </td>
                <td>{record.TermLenghth}</td>
                </tr>
            </table>
          </div>
        </div>
        <p className={(!record.approved && !record.rejected) ? "apps-pending " : (record.approved) ? "apps-approve" : "apps-reject"}>Application {checkStatus(record)}</p>
      </div>
        )
      }) : <div><h4 className='loans-h4'>No Applied Loans</h4>
      </div>
    }
      
      </>
  )
}
