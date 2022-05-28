import React from "react";

function GenerateBoxItem({ boxs }) {
  console.log("boxs: ", boxs);
  return (
    <div
      style={{
        width: "55px",
        height: "30px",
        backgroundColor: "#888",
      }}
    >
      <label   display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",>{boxs.title}a</label>
    </div>
  );
}

export default GenerateBoxItem;
