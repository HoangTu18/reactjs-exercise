import React, { useState } from "react";
import GenerateBoxList from "../components/GenerateBox/GenerateBoxList";

function GenerateBox(props) {
  const [boxs, setBoxs] = useState("1");
  return (
    <div>
      <GenerateBoxList />
    </div>
  );
}

export default GenerateBox;
