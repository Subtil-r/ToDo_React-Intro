import React, { useState } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

export default function App() {
  const initialTodos = ["My first todo", "My second todo", "The third one"];
  const [todos, setTodos] = useState(initialTodos);
  const newTodos = JSON.parse(JSON.stringify(todos));

  function clickHandler(item){
    if (item === '') return
    setTodos(prevTodos => {
      return [...prevTodos, item]
    })
  }

  return (
    <>
      <header className="header_container">
        <h1>To Do List</h1>
      </header>
      <Form clickHandler={clickHandler}/>
      <Todolist todos={newTodos} />
    </>
  );
}
