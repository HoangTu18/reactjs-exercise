import React from "react";

function GenerateBoxItem(props) {
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
        }}
      >
        <label>#Box 1</label>
      </div>
    </div>
  );
}

export default GenerateBoxItem;
