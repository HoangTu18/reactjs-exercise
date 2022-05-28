import React from "react";

ButtonLike.propTypes = {};

function ButtonLike({ text = "Submit", type = "button" }) {
  return (
    <div>
      <button type="text">{text}</button>
    </div>
  );
}

export default ButtonLike;
