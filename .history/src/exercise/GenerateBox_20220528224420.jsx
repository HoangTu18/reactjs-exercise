import React, { useState, useRef } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const input = useRef(null);
  let [count, setCount] = useState(0);
  let [boxs, setBoxs] = useState([]);
  function handleGenerate() {
    let tempArr = [...boxs];
    let tempCount = count;
    for (let i = 1; i <= input.current.value; i++) {
      tempArr.push({ id: tempCount++ });
    }
    setBoxs(tempArr);
    setCount(tempCount);
  }

  function getData(boxs) {
    if (val.target.value > 128) {
      setBoxs(128);
      return;
    }
    if (val.target.value < 0) {
      setBoxs(0);
      return;
    }
    setBoxs(val.target.value);
  }
  return (
    <div>
      <div>
        Number of boxers:
        <input type="number" onChange={getData} ref={input} />
        <button onClick={() => handleGenerate()}>Generate</button>
        <hr />
      </div>
      <GenerateBoxList boxs={boxs} />
    </div>
  );
}

export default GenerateBox;
