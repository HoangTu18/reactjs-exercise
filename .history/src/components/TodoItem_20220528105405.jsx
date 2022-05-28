import React from "react";

function TodoItem({ todo }) {
  console.log("todo item:", todo);
  return (
    <div>
      Title: {todo.title} <br />
      Status: {todo.status} <br />
      <button type="button" onClick={() => handleCompletedTodo(todo.id)}>
        Completed Todo
      </button>
    </div>
  );
}

export default TodoItem;
