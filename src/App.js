import logo from "./logo.svg";
import "./App.css";
import Color from "./color/color";
import Size from "./size/size";
import Content from "./content/content";
import { useState } from "react";

function App() {
  const [data, setdata] = useState({
    color: "red",
    fontsize: 15,
  });
  const handle = (size) => {
    setdata({
      ...data,
      fontsize:
        data.fontsize + size >= 8 && data.fontsize + size <= 36
          ? data.fontsize + size
          : data.fontsize,
    });
    console.log(size);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Seting Color</h1>
        <div className="box">
          <Color
            data={data.color}
            passdata={(colorpass) => {
              setdata({ ...data, color: colorpass });
            }}
          />
          <Size
            passSize={handle}
            resetSize={() => setdata({ ...data, fontsize: 15 })}
          />
          <Content content={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
