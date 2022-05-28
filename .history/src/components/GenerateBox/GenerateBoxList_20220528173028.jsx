import React from "react";
import GenerateBoxItem from "./GenerateBoxItem";

function GenerateBoxList({ boxs }) {
  console.log("boxs: ", boxs);
  return (
    <div>
      <div>
        Number of boxers:
        <input type="number" />
        <button onClick={() => handleGenerate()}>Generate</button>
        <hr />
      </div>
      {boxs.map((item) => (
        <GenerateBoxItem boxs={item.title} />
      ))}
    </div>
  );
}

export default GenerateBoxList;
