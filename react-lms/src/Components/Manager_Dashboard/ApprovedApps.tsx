import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Customer_Dashboard/All_Loans/AllLoans.css'

type IApproved = {
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
};

export default function ApprovedApps() {

  const [approvedApps, setApprovedApps] = useState<IApproved[]>([]);

  useEffect(() => {
    getApprovedApps();
  }, []);

  const getApprovedApps= () => {
    axios
      .get("http://localhost:4000/appliedNewLoans")
      .then((response) => {
        let tmpArray=response.data.filter((record: any)=>{
          return record.approved === true;
        })
        setApprovedApps(tmpArray)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
    {
      approvedApps?.length > 0 ? approvedApps?.map((record)=> {
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
                          src="https://i.pinimg.com/222x/2a/30/58/2a305844cb932d6d9b57722d1272efe4.jpg"
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
                    <p className="apps-approve">
                      Application Approved
                    </p>
                  </div>
                </div>
              </div>
          
        );
      }) : <div><h4 className='loans-h4'>No Approved Loans</h4>
      </div>
    }
    </>
  )
}
