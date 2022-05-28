import React, { useState } from "react";

function LiftingStateUp(props) {
  const [todos, setTodo] = useState([
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
  return (
    <div>
      <TodoList todos={todos} handleCompletedTodo={handleCompletedTodo} />
    </div>
  );
}

export default LiftingStateUp;
