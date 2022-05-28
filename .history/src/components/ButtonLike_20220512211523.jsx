import React from "react";

ButtonLike.propTypes = {};

function ButtonLike({ text = "Submit", name, todoItem, ...props }) {
  return (
    <div>
      <button {...props}>{text}</button>
      Name: {name}
      <br />
      {todoItem && (
        <div>
          <h6>Todo item</h6>
          Todo title: {todoItem?.title} <br />
          Todo price: {todoItem?.price} <br />
        </div>
      )}
      <br />
    </div>
  );
}

export default ButtonLike;
