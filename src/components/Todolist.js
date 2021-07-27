import React, { useState } from 'react';

function Todolist() {
  const initialTodos = ["My first todo", "My second todo"];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div>
      <ul>
      {todos.map((todo) => (
        <TodoItem />
      ))}
    </ul>
    </div>
  )
}

export default Todolist
