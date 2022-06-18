import React, { useReducer } from "react";

// initialState
const initialState = {
  isLoading: false,
  todos: [],
  isError: false,
};

// actions
function setIsLoading(isLoading) {
  return {
    type: "SET_IS_LOADING",
    payload: isLoading,
  };
}

function setIsError(isError) {
  return {
    type: "SET_IS_ERROR",
    payload: isError,
  };
}

function setTodos(data) {
  return {
    type: "SET_TODO",
    payload: data,
  };
}

// reducer
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_IS_LOADING": {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case "SET_IS_ERROR": {
      return {
        ...state,
        isError: payload,
      };
    }
    case "SET_TODO": {
      return {
        ...state,
        todos: payload,
      };
    }
    default:
      return state;
  }
}
function UserReduer() {
  // state
  const [{ isLoading, isError, todos }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // actions
  async function handleFetchData() {
    dispatch(setIsLoading(true));
    dispatch(setIsError(false));
    try {
      const res = await fetch(
        "https://tony-json-server.herokuapp.com/api/todos"
      );
      const data = await res.json();
      dispatch(setTodos(data.data));
    } catch (error) {
      dispatch(setIsError(true));
    }
    dispatch(setIsLoading(false));
  }

  // view
  if (isLoading) return <div>Loading ....</div>;
  if (isError) return <div>Something error ....</div>;
  return (
    <div>
      {todos.length === 0 ? (
        <div>
          No data availabel .... <br />
        </div>
      ) : (
        <>
          {todos.map((todo, index) => (
            <div key={index}>
              ID: {todo.id} <br />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default UserReduer;
