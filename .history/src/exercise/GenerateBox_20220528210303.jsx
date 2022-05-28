import React, { useState } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const [boxs, setBoxs] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]);
  function handleGenerate(todoId: number) {
    setBoxs([...boxs, { id: todoId }]);
    console.log(boxs);
  }
  return (
    <div>
      <div>
        Number of boxers:
        <input type="number" />
        <button onClick={() => handleGenerate(boxs.id)}>Generate</button>
        <hr />
      </div>
      <GenerateBoxList boxs={boxs} />
    </div>
  );
}

export default GenerateBox;
