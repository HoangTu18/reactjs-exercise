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
  function handleGenerate(boxsId) {
    console.log("boxsId: ", boxsId);
  }

  return (
    <div>
      <GenerateBoxList boxs={boxs} handleGenerate={handleGenerate} />
    </div>
  );
}

export default GenerateBox;
