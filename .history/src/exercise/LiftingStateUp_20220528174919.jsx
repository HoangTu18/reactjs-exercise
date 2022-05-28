import React, { useState } from "react";
import TodoList from "../components/TodoList";

function LiftingStateUp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "learn react",
      status: "new",
    },
    {
      id: 2,
      title: "learn angular",
      status: "new",
    },
  ]);
  function handleCompletedTodo(todoId) {
    console.log("handleCompletedTodo: ", todoId);
  }
  return (
    <div>
      <TodoList todos={todos} handleCompletedTodo={handleCompletedTodo} />
    </div>
  );
}

export default LiftingStateUp;
