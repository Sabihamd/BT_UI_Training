import React, { useEffect ,useState} from 'react'

export default function UseEffectDemo() {
    const [name,setName] = useState<string>('')
    const [count,setCount] = useState<number>(0)

    useEffect(()=>{
      console.log('Inside UseEffect')  
    },[count])  
  
    return (
      <div>
             <input type="text" onChange={(e)=>setName(e.target.value)}/> 
             <p>
                Count:{count}
             </p>
             <button onClick={()=> setCount(prevState=> prevState+1)}>increment</button>
      </div>
    )
}

