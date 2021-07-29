import React, { useRef } from 'react'

const Form = (props) => {
  const inputRef = useRef()

  function inputValue(){
    const inputElement = inputRef.current;
    return inputElement.value;
  }
  
  
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={()=>props.clickHandler(inputValue())}>Add todo</button>
    </div>
  )
}

export default Form
