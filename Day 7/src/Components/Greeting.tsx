import { off } from "process";
import React from "react";

type IProps = {
  isLoggedIn: boolean,
};

export default function Greeting(props: IProps) {
    return (
        <>
        {
        props.isLoggedIn?<h1>Welcome Sab</h1>:<h1>Welcome Guest</h1>
         }
        </>
    
    );

  
}


