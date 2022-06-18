import React, { useState } from "react";

function Hook(props) {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
  });
  console.log("formObject: ", formObject);
  return (
    <div>
      Hooks
      <button type="button" onClick={() => {}}></button>
    </div>
  );
}

export default Hook;
