import React from 'react';

function TodoItem(props) {
  return (
    <>
    <input type="checkbox" />
    <li>{props.value}</li>
    </>
  )
}

export default TodoItem
