import React, { useState } from "react";

function stateObject(props) {
  const [messObj, setMessObj] = useState({
    mess: "",
  });
  console.log("messObj: ", messObj);
  return (
    <div>
      <input
        type="text"
        value={messObj.mess}
        onChange={(e) => {
          //   messObj.mess = e.target.value;
          //   setMessObj(messObj);
          const val = e.target.value;
          setMessObj((prevState) => {
            return {
              ...prevState,
              mess: val,
            };
          });
        }}
      />
    </div>
  );
}

export default stateObject;
