import React from 'react'

type IDetails ={
    name: string;
    age: number;
    union?: number | boolean;
}

export default function Message(details: IDetails) {
  let {name, age}=details
  return (
    <div>
      <p>Hi {name}, Age {age}</p>
    </div>
  )
}
