
import { useEffect } from "react"

const UseDocumentTitle = (count:number)=>{

    useEffect(()=>{
        document.title = `You have clicked ${count} times`
    },[count])
}

export default UseDocumentTitle