import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todo, handleCompletedTodo }) {
  return (
    <div>
      {todo.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
