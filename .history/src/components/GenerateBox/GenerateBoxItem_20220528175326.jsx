import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  console.log("boxs: ", boxs);
  return (
    <p
      style={{
        width: "55px",
        height: "50px",
        backgroundColor: "#888",

        textAlign: "center",
      }}
    >
      #Box {boxs.id}
    </p>
  );
}

export default GenerateBoxItem;
