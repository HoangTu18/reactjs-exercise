import React, { useState } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const [count, setCount] = useState(0);
  const [boxs, setBoxs] = useState([]);
  function handleGenerate(todoId) {
    console.log(todoId);
    setBoxs([...boxs, { id: todoId }]);
    console.log(boxs);
  }
  return (
    <div>
      <div>
        Number of boxers:
        <input type="number" value={""} />
        <button onClick={() => handleGenerate(boxs.id)}>Generate</button>
        <hr />
      </div>
      <GenerateBoxList boxs={boxs} />
    </div>
  );
}

export default GenerateBox;
