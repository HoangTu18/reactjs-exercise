import React from "react";

function TodoItem({ todo, handleCompletedTodo }) {
  console.log("todo item:", todo);
  return (
    <div>
      Title: {todo.title} <br />
      Status: {todo.status} <br />
      <button type="button" onClick={() => handleCompletedTodo(todo.id)}>
        Completed
      </button>
    </div>
  );
}

export default TodoItem;
