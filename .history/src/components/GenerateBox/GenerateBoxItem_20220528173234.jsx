import React from "react";

function GenerateBoxItem({ boxs }) {
  console.log("boxs: ", boxs);
  return (
    <div>
      Number of boxers:
      <input type="number" />
      <button onClick={() => handleGenerate(boxs.title)}>Generate</button>
      <hr />
      <div
        style={{
          width: "55px",
          height: "30px",
          backgroundColor: "#888",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <label>{boxs.title}a</label>
      </div>
    </div>
  );
}

export default GenerateBoxItem;
