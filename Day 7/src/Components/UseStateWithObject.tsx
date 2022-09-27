import { type } from '@testing-library/user-event/dist/type'
import React, {useState} from 'react'

type loginForm={
    email: string,
    password: string,
    mobile: number
}

const UseStateWithObject =()=> {

  const [loginData, setLoginData]=useState<loginForm>({email: '', password: '', mobile: 0});
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setLoginData({...loginData, [e.target.id]:e.target.value})
  }
  return (
    <div>
        <form>
            {/* <p>Email Address: 
                <input type="email" onChange={(event)=>setLoginData({...loginData, email: event.target.value})}></input>
            </p>
            <p>Password: 
                <input type="password" onChange={(event)=>setLoginData({...loginData, password: event.target.value})}></input>
            </p>
            <p>Mobile Number: 
                <input type="text" onChange={(event)=>setLoginData({...loginData, mobile: parseInt(event.target.value)})}></input>
            </p> */}
            <p>Email Address: 
                <input type="email" onChange={handleChange} id="email" placeholder='Enter email'/>
            </p>
            <p>Password: 
                <input type="password" onChange={handleChange} id="password" placeholder='Enter Password'/>
            </p>
            <p>Mobile Number: 
                <input type="text" onChange={handleChange} id="mobile" placeholder='Enter mobile number'/>
            </p>
        </form>
        <h3>{JSON.stringify(loginData)}</h3>
        
    </div>
  )
}

export default UseStateWithObject;
//tsr