import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Customer_Dashboard/All_Loans/AllLoans.css";

type IRejected = {
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
  rejected: boolean;
};

export default function RejectedApps() {
  const [rejectedApps, setRejectedApps] = useState<IRejected[]>([]);

  useEffect(() => {
    getRejectedApps();
  }, []);

  const getRejectedApps = () => {
    axios
      .get("http://localhost:4000/appliedNewLoans")
      .then((response) => {
        let tmpArray = response.data.filter((record: any) => {
          return record.rejected === true;
        });
        setRejectedApps(tmpArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {rejectedApps?.length >0
        ? rejectedApps?.map((record) => {
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
                          src="https://storage.googleapis.com/ares-profile-pictures/hd/rachel__green___-d8502d201b7e67009aa38904a10ee659_hd.jpg"
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
                    <p className="apps-reject">Application Rejected</p>
                  </div>
                </div>
              </div>
            );
          })
        : <div><h4 className='loans-h4'>No Rejected Loans</h4>
        </div>}
    </>
  );
}
