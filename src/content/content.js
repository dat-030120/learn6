import React from "react";
import "./conten.css";
function Content({ content }) {
  return (
    <div className="box-item">
      <p style={{ color: content.color }}>
        Color: {content.color} -Font-size:{content.fontsize + "px"}
      </p>
      <div
        className="content"
        style={{ color: content.color, fontSize: content.fontsize + "px" }}
      >
        React change
      </div>
    </div>
  );
}

export default Content;
