import React, { useState, useRef } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const input = useRef(null);
  const [count, setCount] = useState(0);
  const [boxs, setBoxs] = useState([]);
  function handleGenerate() {
    for (let i = 1; i <= input.current.value; i++) {}
  }
  return (
    <div>
      <div>
        Number of boxers:
        <input type="number" value={""} ref={input} />
        <button onClick={() => handleGenerate()}>Generate</button>
        <hr />
      </div>
      <GenerateBoxList boxs={boxs} />
    </div>
  );
}

export default GenerateBox;
