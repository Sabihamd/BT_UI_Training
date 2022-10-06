import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type IComment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function CommentsMenu() {
  const [comments, setComments] = useState<IComment[]>([]);
  // const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [commentsForm, setCommentsForm] = useState<IComment>({
    name: "",
    email: "",
    body: "",
    id: 0,
  });

  useEffect(() => {
    getCommentData();
  }, []);

  const getCommentData = () => {
    axios
      .get("http://localhost:4000/comments")
      .then((response) => {
        // console.log(response.data)
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e: any) => {
    setCommentsForm({ ...commentsForm, [e.target.name]: e.target.value });
  };

  // const showRecord =(record: IComment) => {
  //   setShowEditForm(true)
  //   setCommentsForm(record)
  // }

  // const updateRecord =() => {
  //   // console.log(commentsForm)
  //   axios.put(`http://localhost:4000/comments/${commentsForm.id}`, commentsForm)
  //   .then((response)=>{
  //     alert(`${commentsForm.id} updated`)
  //     setShowEditForm(false)
  //     getCommentData();
  //   })
  //   .catch((error)=>
  //   console.log(error)
  //   )
  // }

  const deleteRecord = (id: number) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`http://localhost:4000/comments/${id}`)
        .then(() => {
          alert("Deleted Successfully");
          getCommentData();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
            <th>Action(s)</th>
          </tr>
        </thead>
        <tbody>
          {comments ? (
            comments?.map((cmt, index) => (
              <tr key={cmt.id}>
                <td>{cmt.id}</td>
                <td>{cmt.name}</td>
                <td>{cmt.email}</td>
                <td>{cmt.body}</td>
                <td>
                  <td>
                    <Link
                      to={`/comments/edit/${cmt.id}`}
                      className="btn btn-sm btn-danger"
                    >
                      Edit
                    </Link>
                  </td>
                  <button onClick={() => deleteRecord(cmt.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button>Add Record</button>
      {/* {
        showEditForm ? 
        <>
        <p>Enter Name: <input type='text' onChange={handleChange} value={commentsForm?.name} name="name"/></p>
        <p>Enter Email: <input type='text' onChange={handleChange} value={commentsForm?.email} name="email"/></p>
        <p>Enter Body : <textarea name="body" onChange={handleChange} className="form-control"  value={commentsForm?.body}
                                           cols={30} rows={10}></textarea></p>
        <button onClick={updateRecord}>Update Record</button>
        
        </> : null
      } */}
    </div>
  );
}
