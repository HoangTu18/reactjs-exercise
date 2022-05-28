import React from "react";
import styles from "bu";
function ButtonSimple({ text = "Submit", type = "button", ...props }) {
  return <button>{text} abc</button>;
}

export default ButtonSimple;
