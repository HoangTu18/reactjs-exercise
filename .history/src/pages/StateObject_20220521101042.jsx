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
      <input
        type="text"
        value={messObj.mess}
        onChange={(e) => {
          //   messObj.mess = e.target.value;
          //   setMessObj(messObj);
          const val = e.target.value;
        }}
      />
    </div>
  );
}

export default stateObject;
