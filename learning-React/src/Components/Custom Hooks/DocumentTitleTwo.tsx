import React,{useState,useEffect} from 'react'
import UseDocumentTitle from './UseDocumentTitle';

export default function DocTitleTwo() {
    const [count, setCount] = useState<number>(0) 

     UseDocumentTitle(count)
     
    return (
      <div>
          <button onClick={()=>setCount(prevCount=>prevCount+1)}>Count - {count}</button>
      </div>
    )
}