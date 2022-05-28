import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  console.log("boxs: ", boxs);
  return (
    <p
      style={{
        width: "55px",
        height: "50px",
        backgroundColor: "#888",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "row",
      }}
    >
      #Box {boxs.id}
    </p>
  );
}

export default GenerateBoxItem;
