import React from "react";

ButtonLike.propTypes = {};

function ButtonLike({ text = "Submit", type = "button", onClick, className }) {
  return (
    <div>
      <button text="cancel" type="button"></button>
    </div>
  );
}

export default ButtonLike;
