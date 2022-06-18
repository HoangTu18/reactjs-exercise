import React, { useState } from "react";

function Form(props) {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });
  return (
    <div>
      <h3>Form</h3>
      First Name:{" "}
      <input type="text" name="firstName" value={formObject.firstName} />
    </div>
  );
}

export default Form;
