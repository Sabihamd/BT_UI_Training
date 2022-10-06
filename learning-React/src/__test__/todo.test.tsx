import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Todos from '../Components/testing/ToDoTest';
import ToDoTest from '../Components/testing/ToDoTest';

jest.mock("axios");

const dummyTodos : any = [
{
userId: 1,
id: 1,
title: "todo 1",
completed: false,
},
{
userId: 1,
id: 2,
title: "todo 2",
completed: false,
},
{
userId: 1,
id: 3,
title: "todo 3",
completed: false,
},
];

test("todos list", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data : dummyTodos });
    render(<ToDoTest />);
    
    const todoList = await waitFor(() => screen.findAllByTestId("todo1"));
    
    expect(todoList).toHaveLength(3);
});