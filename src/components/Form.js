import React, { useRef } from 'react'

const Form = ({addTodo, deleteTodo}) => {
  const inputRef = useRef()

  function clickHandler(){
    const inputElement = inputRef.current;
    return inputElement.value;
  }
  
  function cleanInput(){
    inputRef.current.value = '';
  }
    
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={()=>{addTodo(clickHandler()); cleanInput()} } >Add todo</button>
      <button onClick={deleteTodo}>X</button>
    </div>
  )
}

export default Form
