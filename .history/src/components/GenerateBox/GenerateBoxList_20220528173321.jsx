import React from "react";
import GenerateBoxItem from "./GenerateBoxItem";

function GenerateBoxList({ boxs, handleGenerate }) {
  console.log("boxs: ", boxs);
  return (
    <div>
      {boxs.map((item) => (
        <GenerateBoxItem boxs={item.title} handleGenerate={handleGenerate} />
      ))}
    </div>
  );
}

export default GenerateBoxList;
