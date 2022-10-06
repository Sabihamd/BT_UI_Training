import React from 'react'
import {Link,Route, Routes} from 'react-router-dom'
import CommentsMenu from '../JSON-Server/CommentsMenu';
import AddComment from './AddComment';
import EditComment from './EditComment';

export default function Comments() {
  return (
    <>
     <div className='container mt-4  text-center pt-2 pb-2'>
        <Link to='/comments/addcomment'>Add Comment</Link> &nbsp; &nbsp; &nbsp;
        <Link to='/comments/viewlist'>List</Link>
    </div>
     <div className='container'>
     <Routes>
            <Route path='viewlist' element={<CommentsMenu/>}/>
            <Route path='addcomment' element={<AddComment/>}/>
            <Route path='edit/:id' element={<EditComment/>}/>
         </Routes>
     </div>
    </>
    
  )
}

     
      