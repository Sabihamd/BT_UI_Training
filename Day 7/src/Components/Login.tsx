import React, {useState} from 'react'
import Greeting from './Greeting';

export default function Login() {

const [isLoggedIn, setIsLoggedIn] =useState(false);

  return (
    <div>
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
        <Greeting isLoggedIn={isLoggedIn}/>
    </div>
  )
}
