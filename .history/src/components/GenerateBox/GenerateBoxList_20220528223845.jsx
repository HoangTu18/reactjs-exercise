import React from "react";
import GenerateBoxItem from "./GenerateBoxItem";

function GenerateBoxList({ boxs, handleGenerate }) {
  return (
    <div style={{ display: "flex" }}>
      {boxs.map((boxs) => (
        <GenerateBoxItem boxs={boxs} />
      ))}
    </div>
  );
}

export default GenerateBoxList;
