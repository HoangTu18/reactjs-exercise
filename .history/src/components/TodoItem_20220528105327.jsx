import React from "react";

function TodoItem({ todo }) {
  console.log("todo item:", todo);
  return (
    <div>
      Title: {todo.title} <br />
      Status: {todo.status} <br />
      <button></button>
    </div>
  );
}

export default TodoItem;
