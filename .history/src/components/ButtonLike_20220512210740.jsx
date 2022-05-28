import React from "react";

ButtonLike.propTypes = {};

function ButtonLike({ text = "Submit", ...props }) {
  return (
    <div>
      <button {...props}>{text}</button>
      Name: {name}
    </div>
  );
}

export default ButtonLike;
