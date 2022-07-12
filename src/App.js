import Weather from "./Weather";
import React from "react";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer>
          This project was coded by Bridget Gallagher and is{" "}
          <a
            href="https://github.com/bridgetgall/react-weather-final"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
