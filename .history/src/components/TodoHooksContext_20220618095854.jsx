import React from "react";
import { TodoProvider } from "../context/TodoContext";
import TodoList from "./TodoList";

function TodoHooksContext(props) {
  return (
    <TodoProvider>
      <TodoList
        todos={todos}
        handleCompletedTodo={handleCompletedTodo}
      ></TodoList>
    </TodoProvider>
  );
}

export default TodoHooksContext;
