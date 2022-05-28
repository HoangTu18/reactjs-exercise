import React, { useState } from "react";

stateObject.propTypes = {};

function stateObject(props) {
  const [messObj, setMessObj] = useState({
    mess: "",
  });
  console.log("messObj");
  return <div></div>;
}

export default stateObject;
