import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

const LSKEY = 'MyTodoApp.todos';

export default function App() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);
  
  // this part updates the state
  function addTodo(item){
    const newTodos = JSON.parse(JSON.stringify(todos));
    if (item === '') return
    setTodos([...newTodos, { id: uuidv4(), name: item, completed: false }])
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY));
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = JSON.parse(JSON.stringify(todos));
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function deleteTodo() {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos)
  }
  
  return (
    <>
      <header className="header_container">
        <h1>To Do List</h1>
      </header>
      <Form addTodo={addTodo} deleteTodo={deleteTodo}/>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <div className="todoCounter">{todos.filter(todo => !todo.completed).length} left to do</div>
    </>
  );
}
