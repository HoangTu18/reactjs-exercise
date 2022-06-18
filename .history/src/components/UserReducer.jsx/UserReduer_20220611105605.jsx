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

  // action
  return <div></div>;
}

export default UserReduer;
