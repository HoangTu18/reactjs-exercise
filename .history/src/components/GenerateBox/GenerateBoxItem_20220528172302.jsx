import React from "react";

function GenerateBoxItem({ boxs }) {
  console.log("boxs: ", boxs);
  return (
    <div>
      Number of boxers:
      <input type="number" />
      <button>Generate</button>
      <hr />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#888",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <label>{boxs.title}</label>
      </div>
    </div>
  );
}

export default GenerateBoxItem;
