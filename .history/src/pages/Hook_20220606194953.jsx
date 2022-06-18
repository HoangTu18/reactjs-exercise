import React from "react";

function Hook(props) {
  const firstName = useState("abc");
  console.log("firstName: ", firstName);
  return <div></div>;
}

export default Hook;
