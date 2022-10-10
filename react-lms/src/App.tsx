import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./App.css";
import Home from "./Components/HomePage/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Signup from "./Components/Register/Signup";
import ViewNotFound from "./Components/ViewNotFound";
import Header from "./Components/Header/Header";
import CustHeader from './Components/Customer_Dashboard/CustHeader';
import ManagerHeader from './Components/Manager_Dashboard/ManagerHeader';
import AllLoans from './Components/Customer_Dashboard/All_Loans/AllLoans';
import AppliedLoans from './Components/Customer_Dashboard/Applied_Loans/AppliedLoans';
import AllApps from './Components/Manager_Dashboard/AllApps';
import PendingApps from './Components/Manager_Dashboard/PendingApps';
import ApprovedApps from './Components/Manager_Dashboard/ApprovedApps';
import RejectedApps from './Components/Manager_Dashboard/RejectedApps';
import ApplyNow from './Components/Customer_Dashboard/ApplyNow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path='home' element={<Home/>}/>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path='/customer/' element={<CustHeader/>}>
          <Route index element={<Navigate to="/customer/loans" />} />
          <Route path='loans' element={<AllLoans/>}/>
          <Route path='appliedloans' element={<AppliedLoans/>}/>
          <Route path='applynow' element={<ApplyNow/>}/>
          </Route>
          <Route path='/manager/' element={<ManagerHeader/>}>
            <Route index element={<Navigate to='/manager/apps'/>}/>
            <Route path='apps' element={<AllApps/>}/>
            <Route path='pending' element={<PendingApps/>}/>
            <Route path='approved' element={<ApprovedApps/>}/>
            <Route path='rejected' element={<RejectedApps/>}/>
            </Route>
          <Route path="*" element={<ViewNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
