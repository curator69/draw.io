import React from "react";
import { StatusResults, WeekResults } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <main>
        <h1 className="heading">Enter the repo link:</h1>
        <input className="input-tab" placeholder="repo link"></input>
        <StatusResults />
        {/* <WeekResults /> */}
      </main>
    </div>
  );
};

export default App;
