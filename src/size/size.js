import React from "react";
import "./size.css";

function Size({ passSize, resetSize }) {
  return (
    <div className="box-item">
      <div className="penal">
        <h3 className="penal-heading">Size: 15px</h3>
        <div className="penal-body">
          <button
            className="btn btn-success"
            type="button"
            onClick={() => passSize(-2)}
          >
            Giảm
          </button>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => passSize(2)}
          >
            tăng
          </button>
        </div>
      </div>
      <button className="btn btn-primary" type="button" onClick={resetSize}>
        Reset
      </button>
    </div>
  );
}

export default Size;
