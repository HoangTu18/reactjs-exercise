import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  return (
    <p
      style={{
        // width: "calc(100%/8)",
        width: "60px",
        height: "50px",
        backgroundColor: "#888",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      #Box {boxs.id}
    </p>
  );
}

export default GenerateBoxItem;
