import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  console.log("boxs: ", boxs);
  return <p style={{ display: "flex" }}>#Box {boxs.id}</p>;
}

export default GenerateBoxItem;
