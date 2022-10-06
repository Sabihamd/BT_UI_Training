import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios';


type IComment = {
    postId?: number
    id: number
    email: string
    name: string
    body: string
}
export default function EditComment() {

   const {id} =  useParams() 
   const navigate = useNavigate()

   const [record, setRecord] = useState<IComment>({
        name:'',email:'',body:'',id:0, postId:0
   })
   
   useEffect(()=>{
     axios.get(`http://localhost:4000/comments/${id}`)
          .then((response:any)=>{
                setRecord(response.data)
          })

   },[])
   
   const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setRecord({...record, [event.target.name]:event.target.value})
   }

   
   const updateRecord = ()=>{
    axios.put(
        `http://localhost:4000/comments/${record.id}`,
        record,
        {
            headers:{'content-type':'application/json'}
        })
        .then((response) => {
            alert(`Updated Record id:${record.id} Successfully`)
            navigate('/comments/viewlist')
         
        })
        .catch((error) => {
            console.log(error)
        })
}
  return (
    <div className='mt-4'>
         <h1>Edit Record No : {id}</h1>
         <p>
                    Enter Name : <input onChange={(e)=>handleChange(e)} className="form-control" value={record.name} 
                                        name='name' type="text"  />
                  </p>
                  <p>
                    Enter Email : <input onChange={(e)=>handleChange(e)} className="form-control" value={record.email} 
                                    name='email' type="text"  />
                  </p>
                  <p>
                    Enter Body : <textarea name="body" onChange={(e)=>handleChange(e)} className="form-control"  value={record.body}
                                           cols={30} rows={10}></textarea>
                  </p>
                  <p>
                     <button onClick={updateRecord}>Update</button>
                  </p>
    </div>
  )
}