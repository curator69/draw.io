import React, { useState } from "react";
import { Octokit } from "octokit";
import { StatusResults, WeekResults } from "./components";
import "./App.css";

const App = () => {
  const [issues, setIssues] = useState([]);

  const octokit = new Octokit({ auth: process.env.REACT_APP_GH_PAT });

  const fetchData = async () => {
    const data = await octokit
      .request("GET /repos/{owner}/{repo}/issues", {
        owner: "axios",
        repo: "axios",
        state: "all",
        page: 2,
        per_page: 1000,
      })
      .then((response) => response.data)
      .then((data) => data.map((issue) => issue));
    setIssues(data);
  };

  return (
    <div>
      <main className="column">
        <h1 className="heading">Enter the repo link:</h1>
        <input className="input-tab" placeholder="repo link"></input>
        <button className="fetch-btn" onClick={() => fetchData()}>
          Fetch
        </button>

        {issues && <StatusResults issues={issues} />}
        {issues && <WeekResults issues={issues} />}
      </main>
    </div>
  );
};

export default App;
