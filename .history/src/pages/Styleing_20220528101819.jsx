import React, { useState } from "react";

function Styleing(props) {
  const [colorText, setColorText] = useState("#000");
  const fontSize = 30;
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
        }, ${fontSize === 30 && "bold"}`}
      >
        Styleling
      </div>
      colorButton:
      <button type="button" onClick={() => setColorText("#f00")}>
        red
      </button>
      <button type="button" onClick={() => setColorText("#ff0")}>
        yellow
      </button>
    </div>
  );
}

export default Styleing;
