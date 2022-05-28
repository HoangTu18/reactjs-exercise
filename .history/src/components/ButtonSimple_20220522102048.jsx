import React from "react";

function ButtonSimple({ text, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default ButtonSimple;
