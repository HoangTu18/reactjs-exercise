import React, { useState } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const [boxs, setBoxs] = useState([
    {
      title: "#Box 1",
    },
    {
      title: "#Box 2",
    },
  ]);
  handleGenerate;

  return (
    <div>
      <GenerateBoxList boxs={boxs} handleGenerate={handleGenerate} />
    </div>
  );
}

export default GenerateBox;
