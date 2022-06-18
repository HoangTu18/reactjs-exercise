import React from "react";

ButtonLike.propTypes = {};

function ButtonLike({ text = "Submit", name, todoItem, like, ...props }) {
  return (
    <div className="container">
      <button {...props}>{text}</button>
      Name: {name}
      {todoItem && (
        <div>
          <h6>Todo item</h6>
          Todo title: {todoItem?.title}
          Todo price: {todoItem?.price}
        </div>
      )}
      Like: {like}
      <br />
    </div>
  );
}

export default ButtonLike;
