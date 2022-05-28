import React, { useState } from "react";

stateObject.propTypes = {};

function stateObject(props) {
  const [messObj, setMessObj] = useState({
    mess: "",
  });
  console.log("messObj: ", messObj);
  return (
    <div>
      StateObject <br />
    </div>
  );
}

export default stateObject;
