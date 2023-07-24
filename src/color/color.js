import React, { useState } from "react";
import "./color.css";
function Color({ data, passdata }) {
  const [colors, setColor] = useState(["red", "blue", "green", "#ccc"]);
  const passcoler = (data) => {
    passdata(data);
  };
  let element = colors.map((color, i) => {
    return (
      <span
        key={i}
        style={{ backgroundColor: color }}
        className={color === data ? "active" : ""}
        onClick={() => passdata(color)}
      ></span>
    );
  });

  return (
    <div className="box-item">
      <div className="penal">
        <h3 className="penal-heading">Color Picker</h3>
      </div>
      <div className="penal-body">
        {element}
        <hr />
      </div>
    </div>
  );
}

export default Color;
