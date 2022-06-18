import React, { useRef, useState } from "react";

function UseRef(props) {
  // states
  const [firstName, setFirstName] = useState("Project_12312312");
  // refs
  const firstNameRef = useRef(null);

  function onSubmit() {
    console.log("ref: ", firstNameRef.current);
    firstNameRef.current.focus();
  }

  function onEdit() {
    firstNameRef.current.focus();
  }
  return (
    <div>
      <input
        ref={firstNameRef}
        type="text"
        placeholder="firstName"
        value={firstName}
      />
      <input type="text" placeholder="lastName" />
      <button type="button" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
}

export default UseRef;
