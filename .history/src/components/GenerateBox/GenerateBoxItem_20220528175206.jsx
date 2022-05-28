import React from "react";

function GenerateBoxItem({ box, handleGenerate }) {
  console.log("boxs: ", box);
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
      <label>#Box {box.id}</label>
    </div>
  );
}

export default GenerateBoxItem;
