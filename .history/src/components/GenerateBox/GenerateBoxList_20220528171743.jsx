import React from "react";
import GenerateBoxItem from "./GenerateBoxItem";

function GenerateBoxList({ boxs }) {
  console.log("boxs: ", boxs);
  return (
    <div>
      <GenerateBoxItem />
    </div>
  );
}

export default GenerateBoxList;
