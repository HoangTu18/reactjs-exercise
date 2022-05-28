import React from "react";
import GenerateBoxItem from "./GenerateBoxItem";

function GenerateBoxList({ boxs }) {
  console.log("boxs: ", boxs);
  return (
    <div>
      {boxs.map((item) => (
             <div>
             Number of boxers:
             <input type="number" />
             <button>Generate</button>
             <hr />
             <div/>
        <GenerateBoxItem boxs={item.title} />
      ))}
    </div>
  );
}

export default GenerateBoxList;
