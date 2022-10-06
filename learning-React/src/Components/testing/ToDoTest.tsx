import React, { useEffect, useState } from "react";
import axios from "axios";

type IData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function ToDoTest() {
  const [todoList, setTodoList] = useState<IData[]>();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodoList(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {todoList ? (
        <ul>
          {todoList.map((todo: IData, index: number) => (
            <li key={index} data-testid="todo1">
              {todo.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
