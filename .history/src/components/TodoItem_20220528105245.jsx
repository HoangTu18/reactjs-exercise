import React from "react";

function TodoItem({ todo }) {
  console.log("todo item:", todo);
  return (
    <div>
      Title: {todo.title} <br />
    </div>
  );
}

export default TodoItem;
