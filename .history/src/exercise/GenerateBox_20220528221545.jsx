import React, { useState, useRef } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const [count, setCount] = useState(0);
  const [boxs, setBoxs] = useState([]);
  function handleGenerate() {
    for (let i = 0; i <= number.value; i++) {}
  }
  return (
    <div>
      <div>
        Number of boxers:
        <input type="number" value={""} />
        <button onClick={() => handleGenerate()}>Generate</button>
        <hr />
      </div>
      <GenerateBoxList boxs={boxs} />
    </div>
  );
}

export default GenerateBox;
