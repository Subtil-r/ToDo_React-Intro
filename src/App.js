import React from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

export default function App() {
  return (
    <>
      <header className="header_container">
        <h1>To Do List</h1>
      </header>
      <Form />
      <Todolist />
    </>
  );
}
