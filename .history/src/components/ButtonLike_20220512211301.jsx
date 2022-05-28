import React from "react";

ButtonLike.propTypes = {};

function ButtonLike({ text = "Submit", name, ...props }) {
  return (
    <div>
      <button {...props}>{text}</button>
      Name: {name}
      <h6>Todo item</h6>
      Todo title: {props?.todoItem?.title}
    </div>
  );
}

export default ButtonLike;
