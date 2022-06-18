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
    </div>
  );
}

export default Form;
