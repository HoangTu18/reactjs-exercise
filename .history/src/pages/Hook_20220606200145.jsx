import React, { useEffect, useState } from "react";

function Hook(props) {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
  });
  console.log("formObject: ", formObject);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_page=16_limit10").then(
      (res) => res.json()
    );
  }, []);
  return (
    <div>
      Hooks
      <button type="button">submit</button>
    </div>
  );
}

export default Hook;
