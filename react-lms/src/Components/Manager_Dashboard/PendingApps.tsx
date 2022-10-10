import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import '../Customer_Dashboard/All_Loans/AllLoans.css'

type IPending = {
  name: string;
  gender: string;
  age: number;
  salary: string;
  Mincreditscore: string;
  loanAmountToApply: string;
  interestRates: string;
  ProcessingFee: string;
  TermLenghth: string;
  logo: string;
  approved: boolean;
  rejected: boolean;
  id: number;
};

export default function PendingApps() {
  const [pendingApps, setPendingApps] = useState<IPending[]>([]);

  const getPendingApps = () => {
    axios
      .get("http://localhost:4000/appliedNewLoans")
      .then((response) => {
        let tmpArray = response.data.filter((record: any) => {
          return !record.approved && !record.rejected;
        });
        setPendingApps(tmpArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPendingApps();
  },[])
 

  const changeLoanStatus = (record: any, isApproved?: boolean) => {
    isApproved? record.approved=true : record.rejected=true;
    console.log(record)
    axios.put(`http://localhost:4000/appliedNewLoans/${record.id}`, record, {headers: {'content-type': 'application/json'}})
    .then((response) => {
      getPendingApps();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      {pendingApps?.length >0 ? (
        pendingApps?.map((record) => {
          return (
            <div className="apps-card">
              <div className="apps-flex">
                <div className="apps-flexitem">
                  <img src={record.logo} className="apps-img" alt="logo" />
                </div>
                <div className="apps-flexitem">
                  <div className="apps-flex2">
                    <div>
                      <img
                        className="apps-img2"
                        src="https://i.pinimg.com/236x/86/ef/f9/86eff988922f15e294bd794eb949aba5.jpg"
                        alt="profilepic"
                      />
                    </div>
                    <div>
                      <table>
                        <tr>
                          <td>Applicant: </td>&nbsp;
                          <td>{record.name} </td>
                        </tr>
                        <tr>
                          <td>Gender: </td>&nbsp;
                          <td>{record.gender} </td>
                        </tr>
                        <tr>
                          <td>Age: </td>&nbsp;
                          <td>{record.age} </td>
                        </tr>
                        <tr>
                          <td>Salary: </td>&nbsp;
                          <td>{record.salary} </td>
                        </tr>
                        <tr>
                          <td>Credit Score: </td>&nbsp;
                          <td>{record.Mincreditscore} </td>
                        </tr>
                      </table>
                    </div>
                    <div id="apps-div">
                      <table id="table2">
                        <tr>
                          <td>Applied Amount:</td>&nbsp;
                          <td>{record.loanAmountToApply}</td>
                        </tr>
                        <tr>
                          <td>Interest Rates:</td>&nbsp;
                          <td>{record.interestRates}</td>
                        </tr>
                        <tr>
                          <td>Processing Fees:</td>&nbsp;
                          <td>{record.ProcessingFee}</td>
                        </tr>
                        <tr>
                          <td>Term Length:</td>&nbsp;
                          <td>{record.TermLenghth}</td>
                        </tr>
                        <tr>
                          <td>Applied Date:</td>&nbsp;
                          <td>20-20-2020</td>
                        </tr>
                      </table>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="apps-flexitem">
                  <p className="loans-status">Waiting for Manager verification...</p>
                </div>
                <div className="apps-flexitem">
                  <div className="app-flex3">
                  <button className="apps-approve" onClick={() => changeLoanStatus(record, true)}>Approve</button>
                  <button className="apps-reject" onClick={() => changeLoanStatus(record, false)}>Reject</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : 
        <div>
          <h4 className="loans-h4">No Pending Loans</h4>
        </div>
      }
    </>
  );
}
