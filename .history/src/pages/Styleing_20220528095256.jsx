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
    </div>
  );
}

export default Styleing;
