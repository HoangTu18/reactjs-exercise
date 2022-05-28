import React, { useState } from "react";

stateObject.propTypes = {};

function stateObject(props) {
  const [messObj, setMessObj] = useState({
    mess: "",
  });
  console.log("messObj: ", messObj);
  return <div>StateObject</div>;
}

export default stateObject;
