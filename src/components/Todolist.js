import React from 'react';
import TodoItem from './TodoItem';

function Todolist({todos, toggleTodo}) {
  return (
   <>
      {todos.map((todo) => (
       <TodoItem toggleTodo={toggleTodo} todo={todo} />  
      ))}
   </> 
  );
}

export default Todolist
