import React, { useState } from "react";
import { Octokit } from "octokit";

const StatusResults = () => {
  const [issues, setIssues] = useState([]);

  const octokit = new Octokit({ auth: process.env.REACT_APP_GH_PAT });

  const fetchData = async () => {
    for (let i = 0; i < 1; i++) {
      const data = await octokit
        .request("GET /repos/{owner}/{repo}/issues", {
          owner: "mui",
          repo: "material-ui",
          state: "closed",
          page: 2,
          per_page: 25,
        })
        .then((response) => response.data)
        .then((data) => data.map((issue) => issue));
      console.log(data);
      setIssues(data);
    }
  };

  return (
    <div>
      <h1>Status wise count of issues</h1>
      <button onClick={() => fetchData()}>fetch</button>
      <div>
        <h2>Open Issues Count</h2>
        <ol>
          {issues.map((issue) => (
            <li key={issue.id}>
              {issue.title}{" "}
              <span className={(issue.state = "closed" && "open")}>
                {issue.state}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StatusResults;
