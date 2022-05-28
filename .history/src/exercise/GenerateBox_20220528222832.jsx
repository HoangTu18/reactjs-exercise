import React, { useState, useRef } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const input = useRef(null);
  let [count, setCount] = useState(0);
  let [boxs, setBoxs] = useState([]);
  function handleGenerate() {
    for (let i = 1; i <= input.current.value; i++) {
      console.log([...boxs, { id: count }]);
      setBoxs([...boxs, { id: count }]);
      setCount(++count);
    }
  }
  return (
    <div>
      <div>
        Number of boxers:
        <input type="number" ref={input} />
        <button onClick={() => handleGenerate()}>Generate</button>
        <hr />
      </div>
      <GenerateBoxList boxs={boxs} />
    </div>
  );
}

export default GenerateBox;
