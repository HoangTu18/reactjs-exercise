import { useState } from "react";

function ColorBox(props) {
  const [color, setColor] = useState({
    red: "#ff0000",
    gold: "#ffd700",
    cyan: "#00ffff",
    magenta: "#ff00ff",
  });
  const [checked, setChecked] = useState("");
  return <div></div>;
}

export default ColorBox;
