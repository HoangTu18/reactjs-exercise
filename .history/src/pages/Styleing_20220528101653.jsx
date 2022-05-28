import React, { useState } from "react";

function Styleing(props) {
  const [colorText, setColorText] = useState("#000");
  const myStyle = {
    fontSize: 30,
    color: colorText,
    backgroundColor: "white",
  };
  return (
    <div>
      <div
        style={myStyle}
        className={`container pt-3 mb-3, ${
          colorText === "#f00" ? "red" : "yello"
        }`}
      >
        Styleling
      </div>
      colorButton:
      <button type="button" onClick={() => setColorText("#888")}></button>
      <button type="button" onClick={() => setColorText("#333")}></button>
    </div>
  );
}

export default Styleing;
