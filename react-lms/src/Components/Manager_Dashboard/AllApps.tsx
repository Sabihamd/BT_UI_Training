import axios from "axios";
import React, { Children, useEffect, useState } from "react";
import "../Customer_Dashboard/All_Loans/AllLoans.css";

type IAllApps = {
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
};

export default function AllApps() {
  const [appsData, setAppsData] = useState<IAllApps[]>();

  useEffect(() => {
    getAllApplications();
  }, []);

  const getAllApplications = () => {
    axios
      .get("http://localhost:4000/appliedNewLoans")
      .then((response) => {
        setAppsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    <React.Fragment>
      {
        Children.toArray(
          appsData?.map((record, index) => {
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
                          src="https://i.pinimg.com/236x/53/d0/92/53d092e8305a2c0e6840c417e533b07f.jpg"
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
                    <p className={(!record.approved && !record.rejected) ? "apps-pending " : (record.approved) ? "apps-approve" : "apps-reject"} >
                      Application {checkStatus(record)}
                    </p>
                  </div>
                </div>
              </div>
            );
      })
        )
    }
    </React.Fragment>
  );
}
