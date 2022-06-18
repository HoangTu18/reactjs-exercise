import React, { useEffect, useRef, useState } from "react";

function UseRef(props) {
  // states
  const [firstName, setFirstName] = useState("Project_12312312");

  const firstNameRef = useRef(null);
  const [isFlag, setIsFlag] = useState(false);
  const firstRenderRef = useRef(null);

  let lastNameJs = "truong";
  // useEffect
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    }
  }, [isFlag]);
  // refs

  function onSubmit() {
    console.log("ref: ", firstNameRef.current);
    firstNameRef.current.focus();
  }

  function onEdit() {
    firstNameRef.current.focus();
    // console.log("klength: ", firstNameRef.length);
    firstNameRef.current.setSelectionRange(
      0,
      firstNameRef.current.value.length
    );
  }

  function onChangeFirstName(e) {
    setFirstName(e.target.value);
  }
  return (
    <div>
      <input
        ref={firstNameRef}
        type="text"
        placeholder="firstName"
        value={firstName}
        onChange={onChangeFirstName}
      />
      <input type="text" placeholder="lastName" />
      <button type="button" onClick={onSubmit}>
        Add
      </button>
      <button type="button" onClick={onEdit}>
        edit
      </button>
    </div>
  );
}

export default UseRef;
