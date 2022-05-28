import React from "react";
import GenerateBoxItem from "./GenerateBoxItem";

function GenerateBoxList({ boxs, handleGenerate }) {
  return (
    <div>
      <div>
        Number of boxers:
        <input type="number" />
        <button onClick={() => handleGenerate(boxs.id)}>Generate</button>
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
        }}
      >
        {boxs.map((boxs) => (
          <GenerateBoxItem boxs={boxs} handleGenerate={handleGenerate} />
        ))}
      </div>
    </div>
  );
}

export default GenerateBoxList;
