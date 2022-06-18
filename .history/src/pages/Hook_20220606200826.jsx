import React, { useEffect, useState } from "react";

function Hook(props) {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}_limit10`
    ).then((res) => res.json().then((data) => setTodos(data)));
  }, [page]);
  return (
    <div>
      Hooks
      <button
        type="button"
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
      >
        submit
      </button>
    </div>
  );
}

export default Hook;
