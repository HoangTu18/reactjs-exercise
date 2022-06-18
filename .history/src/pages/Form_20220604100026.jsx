import React, { useState } from "react";

function Form() {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });
  function onChangeField(e) {
    const { name, value } = e.target;
    setFormObject({
      ...formObject,
      [name]: value,
    });
  }
  function handleSubmit() {
    console.log("formObject: ", formObject);
  }
  return (
    <div>
      <h3>Form</h3>
      First Name:
      <input
        type="text"
        name="firstName"
        value={formObject.firstName}
        onChange={onChangeField}
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={formObject.lastName}
        onChange={onChangeField}
      />
      <br />
      <input
        type="text"
        name="age"
        value={formObject.age}
        onChange={onChangeField}
      />
      <br />
      <select name="gender" value={formObject.gender} onChange={onChangeField}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Form;
