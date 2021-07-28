import React, { useState } from 'react';
//import TodoItem from './TodoItem';

function Todolist() {
  const initialTodos = ["My first todo", "My second todo", "The third one"];
  const [todos, setTodos] = useState(initialTodos);
  const newTodo = [...initialTodos];
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <input key={todo} type="checkbox" defaultChecked="" /> {todo}
        </li>
      ))}
    </ul>
  );
}

export default Todolist
