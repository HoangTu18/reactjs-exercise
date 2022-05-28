import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  return (
    <p
      style={{
        // width: "calc(100%/8)",
        marginRight: "5px",
        width: "60px",
        height: "50px",
        backgroundColor: "#888",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      #Box
    </p>
  );
}

export default GenerateBoxItem;
