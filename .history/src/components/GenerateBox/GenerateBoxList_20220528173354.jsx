import React from "react";
import GenerateBoxItem from "./GenerateBoxItem";

function GenerateBoxList({ boxs, handleGenerate }) {
  return (
    <div>
      {boxs.map((boxs) => (
        <GenerateBoxItem boxs={boxs} handleGenerate={handleGenerate} />
      ))}
    </div>
  );
}

export default GenerateBoxList;
