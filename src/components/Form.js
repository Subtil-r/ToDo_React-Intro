import React, { useRef } from 'react'

const Form = (props) => {
  const inputRef = useRef()
  const inputElement = inputRef.current.value;
  
  
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={()=>props.clickHandler({inputElement})}>Add todo</button>
    </div>
  )
}

export default Form
