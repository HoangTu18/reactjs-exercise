import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  console.log("boxs: ", boxs);
  return (
    <div
      style={{
        width: "55px",
        height: "50px",
        backgroundColor: "#888",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <label>#Box {boxs.id}</label>
    </div>
  );
}

export default GenerateBoxItem;
