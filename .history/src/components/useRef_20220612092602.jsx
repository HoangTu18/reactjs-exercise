import React, { useRef, useState } from "react";

function UseRef(props) {
  // states
  const [firstName, setFirstName] = useState("");
  // refs
  const firstNameRef = useRef(null);

  function onSubmit() {
    console.log("ref: ", firstNameRef.current);
    firstNameRef.current.focus();
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
