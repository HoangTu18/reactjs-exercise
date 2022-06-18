import React from "react";

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

function UserReduer(props) {
  return <div></div>;
}

export default UserReduer;
