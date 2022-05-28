import React, { useState } from "react";

stateObject.propTypes = {};

function stateObject(props) {
  const [messObj, setMessObj] = (<React className="useState"></React>)({
    mess: "",
  });
  console.log("messObj: ", messObj);
  return (
    <div>
      StateObject <br />
      <input
        type="text"
        value={messObj.mess}
        onChange={(e) => {
          messObj.mess = e.target.value;
          setMessObj(messObj);
        }}
      />
    </div>
  );
}

export default stateObject;
