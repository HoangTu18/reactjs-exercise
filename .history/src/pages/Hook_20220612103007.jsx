import React, { useEffect, useState } from "react";
import ButtonLike from "../components/ButtonLike";
function Hook() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [page]);

  useEffect(() => {
    console.log("useEffect 2");
  }, []);

  return (
    <div>
      Todo List
      {todos.length > 0 ? (
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              id: {todo.id} <br />
              title: {todo.title} <br />
            </div>
          ))}
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
      <h3></h3>
    </div>
  );
}

export default Hook;
