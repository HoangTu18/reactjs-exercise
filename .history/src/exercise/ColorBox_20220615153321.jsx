import { useState } from "react";

function ColorBox(props) {
  const [color, setColor] = useState({
    red: "#ff0000",
    gold: "#ffd700",
    cyan: "#00ffff",
    magenta: "#ff00ff",
  });
  const [checked, setChecked] = useState("");
  const onChange = (e, color) => {
    setChecked(color);
    if (
      (e.target.checked && color === "red") ||
      color === "gold" ||
      color === "cyan" ||
      color === "magenta"
    ) {
      setColor({
        red: color,
        gold: color,
        cyan: color,
        magenta: color,
      });
    } else {
      setChecked("");
      setColor({
        red: "#ff0000",
        gold: "#ffd700",
        cyan: "#00ffff",
        magenta: "#ff00ff",
      });
    }
  };
  return (
    <div className="container">
      <div style={{ background: color["red"] }}>
        <input
          type={"checkbox"}
          name={color}
          checked={checked === "red"}
          onChange={(e) => onChange(e, "red")}
        />
      </div>
    </div>
  );
}

export default ColorBox;
