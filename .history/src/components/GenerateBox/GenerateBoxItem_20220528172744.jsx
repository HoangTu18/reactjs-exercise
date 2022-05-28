import React from "react";

function GenerateBoxItem({ boxs }) {
  console.log("boxs: ", boxs);
  return (
    <div
      style={{
        width: "50px",
        height: "20px",
        backgroundColor: "#888",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <label>{boxs.title}</label>
    </div>
  );
}

export default GenerateBoxItem;
