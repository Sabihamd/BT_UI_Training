import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Summary from './Components/Summary';
import DisplayMovies from './Components/DisplayMovies';
import data from './Components/MovieData';
import DisplayTable from './Components/DisplayTable';
import Login from './Components/Login';
import UseStateWithObject from './Components/UseStateWithObject';
import Calci from './Components/Calculator/Calci'


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

let names=['Sab', 'Sam', 'Nivi', 'RK'];

function App() {

  const printMyName = (myname: string)=>{
    console.log(myname)
}
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
    <UseStateWithObject/>

    {/* <-- Simple Calculator --> */}
    {/* <Calci/> */}
    </>
    );
    }

export default App;
