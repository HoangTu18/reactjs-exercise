import React from "react";

function GenerateBoxItem(props) {
  return (
    <div>
      Number of boxers:
      <input type="number" />
      <button>Generate</button>
      <hr />
      <div style={{ padding: "50px" }}></div>
    </div>
  );
}

export default GenerateBoxItem;
