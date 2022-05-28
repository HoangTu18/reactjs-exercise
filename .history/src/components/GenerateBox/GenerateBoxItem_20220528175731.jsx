import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  console.log("boxs: ", boxs);
  return <p>#Box {boxs.id}</p>;
}

export default GenerateBoxItem;
