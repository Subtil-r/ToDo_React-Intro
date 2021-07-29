import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

const LSKEY = 'MyTodoApp.todos';

export default function App() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);
  

  function addTodo(item){
    const newTodos = JSON.parse(JSON.stringify(todos));
    if (item === '') return
    setTodos(() => {
      return [...newTodos, item]
    })
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY));
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(todos))
  }, [todos])
  

  return (
    <>
      <header className="header_container">
        <h1>To Do List</h1>
      </header>
      <Form addTodo={addTodo}/>
      <Todolist todos={todos} />
    </>
  );
}
