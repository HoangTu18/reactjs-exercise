import React, { useRef } from "react";

function UseRef(props) {
  const firstNameRef = useRef();
  return (
    <div>
      <input type="text" placeholder="firstName" />
      <input type="text" placeholder="lastName" />
      <button type="button">Add</button>
    </div>
  );
}

export default UseRef;
