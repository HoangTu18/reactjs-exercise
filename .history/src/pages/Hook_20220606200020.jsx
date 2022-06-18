import React, { useEffect, useState } from "react";

function Hook(props) {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
  });
  console.log("formObject: ", formObject);

  useEffect(() => {}, []);
  return (
    <div>
      Hooks
      <button type="button">submit</button>
    </div>
  );
}

export default Hook;
