/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

import "./styles.css";
import { Form } from "./components/Form";
import { useState } from "react";
import { TodoList } from "./components/TodoList";


export default function App() {
  const [todos, setTodos] = useState([]);

  //console.log(todos);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoIndex) => {
    const todosCopy = [...todos];

    todosCopy.splice(todoIndex, 1);

    setTodos(todosCopy);
  };

  return (
    <div className="App">
      <h1>React Project</h1>
      <h2>To Do List App</h2>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

