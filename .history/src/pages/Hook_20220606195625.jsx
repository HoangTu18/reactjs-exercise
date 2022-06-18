import React, { useState } from "react";

function Hook(props) {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
  });
  console.log("formObj: ", formObject);
  return <div></div>;
}

export default Hook;
