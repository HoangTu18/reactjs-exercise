import React, { useEffect, useState } from "react";

function Hook(props) {
  const [todos, setTodos] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_page=16_limit10").then(
      (res) => res.json().then((data) => setTodos(data))
    );
  }, []);
  return (
    <div>
      Hooks
      <button type="button">submit</button>
    </div>
  );
}

export default Hook;
