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
  const handleDeleteTodo = (TodoId) => () => {
    console.log("handleDeleteTodo :", handleDeleteTodo);
  };
  return (
    <div>
      <input type="text" value={messObj.mess} onChange={handleDeleteTodo} />
    </div>
  );
}

export default stateObject;
