import React, { useEffect, useState } from "react";

function Hook(props) {
  const [todos, setTodos] = useState([]);
  console.log("formObject: ", formObject);

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
