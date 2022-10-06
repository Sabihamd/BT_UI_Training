import React, { useState } from "react";
import DisplayCheckbox from "./DisplayCheckbox";
import "./ToDoList.css";


type IData ={
    description: string,
    done: boolean
}

const data = [
  { description: "Meeting at 7 PM", done: true },
  { description: "Meeting at 8 PM", done: false },
];

export default function ToDoList() {
 
  const [todoData, setTodoData] = useState(data);
  const [taskDescription, setTaskDescription] = useState("");
  const [viewTable, setViewTable] = useState<boolean>(false)

  const updateTasks = (obj: IData) => {

    setTodoData(
        todoData.map(
          todo => todo.description=== obj.description?{...todo,done:!todo.done}:todo))
  };

  const addTask = () => {
    let foundTask = todoData.find(
      (newTask) => newTask.description === taskDescription
    );
    if (!foundTask) {
      setTodoData([...todoData, { description: taskDescription, done: false }]);
    } else {
      alert("Description already existed");
    }
  };

  const showCompletedTasks = (status:boolean):any => {

  return todoData.filter(tmpObj => tmpObj.done===status).map((obj, index)=> 
   <tr key={index}>
        <td>{obj.description}</td>
        <td>
                <input
                  type="checkbox"
                  checked={obj.done}
                  onChange={() => updateTasks(obj)}
                />
              </td>
    </tr>
   
    );
    
    }
 
  return (
    <div className="container">
      <h3>To-do List ({todoData.filter((tmpObj) => !tmpObj.done).length})</h3>
      <input
        type="text"
        placeholder="Enter To-Do Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button id="btn" onClick={addTask}>
        Add Task
      </button>
      {/* <table border={1}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todoData.map((obj, index) => (
            <tr key={index}>
              <td>{obj.description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={obj.done}
                  onChange={() => updateTasks(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <br />
      {/* <button onClick={()=>setViewTable(!viewTable)}>Click</button> */}
      <DisplayCheckbox viewTable={viewTable} setViewTable={setViewTable}/>
      {viewTable ? <table border={1}>
      <thead>
          <tr>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
            {showCompletedTasks(true)}
        </tbody>
      </table> : <table border={1}>
      <thead>
          <tr>
            <th>Description: Task to be done</th>
          </tr>
        </thead>
        <tbody>
            {showCompletedTasks(false)}
        </tbody>
      </table> }
      
    </div>
  );
}
