import React from "react";

const { Octokit } = require("octokit");

const Github = () => {
  const octokit = new Octokit({
    auth: process.env.GTITHUB_TOKEN,
  });

  octokit
    .paginate(
      "GET /repos/{owner}/{repo}/issues",
      { owner: "octokit", repo: "rest.js" },
      (response) => response.data.map((issue) => issue.title)
    )
    .then((issueTitles) => {
      console.table(issueTitles);
    });

  return <div>Github</div>;
};

export default Github;
