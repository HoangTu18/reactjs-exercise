import React from "react";
import { TodoProvider } from "../context/TodoContext";
import TodoList from "./TodoList";

function TodoHooksContext(props) {
  return <TodoProvider />;
}

export default TodoHooksContext;
