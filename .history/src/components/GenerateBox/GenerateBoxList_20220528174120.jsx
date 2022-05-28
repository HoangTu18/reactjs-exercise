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
      {boxs.map((boxs) => (
        <GenerateBoxItem boxs={boxs} handleGenerate={handleGenerate} />
      ))}
    </div>
  );
}

export default GenerateBoxList;
