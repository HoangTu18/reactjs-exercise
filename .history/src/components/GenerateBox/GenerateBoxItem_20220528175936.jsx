import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  console.log("boxs: ", boxs);
  return (
    <div style={{ flex: "container" }}>
      <div
        style={{
          width: "55px",
          height: "50px",
          backgroundColor: "#888",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        #Box {boxs.id}
      </div>
    </div>
  );
}

export default GenerateBoxItem;
