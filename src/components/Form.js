import React, { useRef } from 'react'

const Form = (props) => {
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
      <button onClick={()=>{props.addTodo(clickHandler()); cleanInput()} } >Add todo</button>
    </div>
  )
}

export default Form
