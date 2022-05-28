import React, { useState } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const [boxs, setBoxs] = useState([
    {
      id: 1,
      title: "#Box 1",
    },
    {
      id: 2,
      title: "#Box 2",
    },
  ]);
  function handleGenerate() {}

  return (
    <div>
      <GenerateBoxList boxs={boxs} handleGenerate={handleGenerate} />
    </div>
  );
}

export default GenerateBox;
