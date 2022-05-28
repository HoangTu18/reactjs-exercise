import React from "react";

function GenerateBoxItem({ boxs, handleGenerate }) {
  console.log("boxs: ", boxs);
  return (
    <div>
      Number of boxers:
      <input type="number" />
      <button onClick={() => handleGenerate(boxs.title)}>Generate</button>
      <hr />
      </div>
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
        <label>{boxs.title}</label>
      </div>
  
  );
}

export default GenerateBoxItem;
