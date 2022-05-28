import React from "react";
import GenerateBoxItem from "./GenerateBoxItem";

function GenerateBoxList({ boxs }) {
  console.log("boxs: ", boxs);
  return (
    <div>
      {boxs.map((item) => (
        <GenerateBoxItem boxs={boxs} />
      ))}
    </div>
  );
}

export default GenerateBoxList;
