import React, { useState } from "react";
import { Octokit } from "octokit";

const StatusResults = () => {
  const [issues, setIssues] = useState([]);

  const octokit = new Octokit({auth: process.env.REACT_APP_GH_PAT});
  console.log(process.env.REACT_APP_GH_PAT, "code")

  octokit
    .request(
      "GET /repos/{owner}/{repo}/issues",
      { owner: "facebook", repo: "react" },
      (response) => response.data.map((issue) => issue.title)
    )
    .then((issueTitles) => {
      setIssues(issueTitles.data);
    });

  return (
    <div>
      <h1>Status wise count of issues</h1>
      <div>
        <h2>Open Issues Count</h2>
        <ul>
          {issues.map((issueTitle, idx) => (
            <li key={idx}>{issueTitle?.url} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatusResults;
