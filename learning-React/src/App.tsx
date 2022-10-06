import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Components/Message";
import Summary from "./Components/Summary";
import DisplayMovies from "./Components/DisplayMovies";
import data from "./Components/MovieData";
import DisplayTable from "./Components/DisplayTable";
import Login from "./Components/Login";
import UseStateWithObject from "./Components/UseStateWithObject";
import Calci from "./Components/Calculator/Calci";
import ToDoList from "./Components/ToDoList/ToDoList";
import UseEffect from "./Components/UseEffect";
import UseMemoDemo from "./Components/UseMemoDemo";
import Layout from "./Components/Custom Hooks/Layout";
import DocumentTitleOne from "./Components/Custom Hooks/DocumentTitleOne";
import DocumentTitleTwo from "./Components/Custom Hooks/DocumentTitleTwo";
import Start from "./Components/Login Authorisation/Start";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Views/Home";
import Menu from "./Components/Views/Menu";
import ViewNotFound from "./Components/Views/ViewNotFound";
import Comments from "./Components/Views/Comments";
import Header from "./Components/Views/Header";
import LoginPage from "./Components/Views/LoginPage";
import CommentsMenu from "./Components/JSON-Server/CommentsMenu";

// <-- Display Message, Colors and Movies-->

// function App() {
//   return (
//     <div className="App">
//      <Message name="Sab" age={20}/>
//      <Message name="Nivi" age={25}/>
//      <Message name="Sam" age={30}/>
//      <Message name="RK" age={22}/>
//      <Summary colors= {['White', 'Blue', 'Orange', 'Purple']}/>
//      <DisplayMovies data={data}/>
//      {/* {...data} */}

//     </div>
//   );
// }

// <-- Display Table -->

let names = ["Sab", "Sam", "Nivi", "RK"];

function App() {
  const printMyName = (myname: string) => {
    console.log(myname);
  };
  return (
    <>
      {/* <table border={1}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          names.map((el: string, index: number)=>
            <tr key={index}>
              <td>{index}</td>
              <td>{el}</td>
            </tr>
        )}
      </tbody>
      <tbody>
        {
          names.map((n: string,index:number)=>
          <tr key={index}>
              <DisplayTable index={index} 
                       name={n} 
                       printMyNameCallback={printMyName}
                />
          </tr>
        )}
      </tbody>
    </table> */}

      {/* <-- Display user login status --> */}
      {/* <Login/> */}

      {/* <-- implement useState with object --> */}
      {/* <UseStateWithObject/> */}

      {/* <-- Simple Calculator --> */}
      {/* <Calci/> */}

      {/* <-- Simple To-do List --> */}
      {/* <ToDoList/> */}

      {/* <-- UseEffect Demo --> */}
      {/* <UseEffect/> */}

      {/* <-- UseMemo Demo --> */}
      {/* <UseMemoDemo/> */}

      {/* <-- Custom Hook1 --> */}
      {/* <Layout/> */}

      {/* <-- Custom Hook2 --> */}
      {/* <DocumentTitleOne/>
    <DocumentTitleTwo/> */}

      {/* <-- JSON Server --> */}
      {/* <Comments/> */}

      {/* <-- Login Authorisation --> */}
      {/* <Start/> */}

      {/* <-- SPA Views --> */}
      {/* <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comments/*" element={<Comments />} />
          <Route path="login" element={<Start />} />
          <Route path="*" element={<ViewNotFound />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/comment" element={<CommentsMenu/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
