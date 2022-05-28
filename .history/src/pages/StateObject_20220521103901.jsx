import React, { useState } from "react";

function stateObject(props) {
  const [messObj, setMessObj] = useState({
    author: " ",
    mess: {
      id: 1,
      text: "",
    },
  });

  console.log("messObj: ", messObj);

  //   curry func
  return (
    <div>
      <input
        type="text"
        value={messObj.mess}
        onChange={(e) => {
          //   messObj.mess = e.target.value;
          //   setMessObj(messObj);
          const val = e.target.value;
          setMessObj((prevState) => ({
            ...prevState,
            mess: {
              ...prevState.mess,
              text: val,
            },
          }));
        }}
      />
    </div>
  );
}

export default stateObject;
