import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleCompletedTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} handleCompletedTodo={handleCompletedTodo} />
      ))}
    </div>
  );
}

export default TodoList;
