import React from "react";
import styles from "bu";
function ButtonSimple({ text = "Submit", type = "button", ...props }) {
  return (
    <button type={type} c>
      {text} abc
    </button>
  );
}

export default ButtonSimple;
