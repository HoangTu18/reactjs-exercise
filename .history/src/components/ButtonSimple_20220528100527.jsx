import React from "react";
import styles from "bu";
function ButtonSimple({ text = "Submit", type = "button", ...props }) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default ButtonSimple;
