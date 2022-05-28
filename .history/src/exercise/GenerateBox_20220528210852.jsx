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
  function handleGenerate(todoId) {
    console.log(todoId);
    setBoxs([...boxs, { id: todoId }]);
    console.log(boxs);
  }
  return (
    <div>
      <form>
        Number of boxers:
        <input type="number" value={""} />
        <button onClick={() => handleGenerate()}>Generate</button>
        <hr />
      </form>
      <GenerateBoxList boxs={boxs} />
    </div>
  );
}

export default GenerateBox;
