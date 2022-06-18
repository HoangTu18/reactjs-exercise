import React, { useRef } from "react";

function UseRef(props) {
  const firstNameRef = useRef(null);

  function onSubmit() {
    console.log("ref: ", firstNameRef.current);
  }
  return (
    <div>
      <input type="text" placeholder="firstName" />
      <input type="text" placeholder="lastName" />
      <button type="button" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
}

export default UseRef;
