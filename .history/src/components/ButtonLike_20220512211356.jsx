import React from "react";

ButtonLike.propTypes = {};

function ButtonLike({ text = "Submit", name, ...props, todoItem }) {
  return (
    <div>
      <button {...props}>{text}</button>
      Name: {name}
      <h6>Todo item</h6>
      Todo title: {todoItem?.title}
      Todo title: {todoItem?.price}
    </div>
  );
}

export default ButtonLike;
