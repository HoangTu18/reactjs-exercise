import React, { useEffect, useState } from "react";

function Hook(props) {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}_limit10`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [page]);

  useEffect(() => {
    console.log("useEffect 2");
  });

  console.log("todos hook: ", todos);

  return (
    <div>
      Todo List
      {todos.length > 0 ? (
        <>
          {todos.map((todo) => {
            <div key={todo.id}>
              id: {todo.id} <br />
              title: {todo.title} <br />
            </div>;
          })}
        </>
      ) : (
        <div>No data availabe</div>
      )}
      <button
        type="button"
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
      >
        page {page}
      </button>
    </div>
  );
}

export default Hook;
