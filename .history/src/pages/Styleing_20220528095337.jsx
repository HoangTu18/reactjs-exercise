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
      <div style={myStyle}>Styleling</div>
      colorButton:
      <button type="button" onClick={() => setColorText("#888")}></button>
      <button type="button" onClick={() => setColorText("#333")}></button>
    </div>
  );
}

export default Styleing;
