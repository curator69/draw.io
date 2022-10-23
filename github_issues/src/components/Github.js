const { Octokit } = require("octokit");

const octokit = new Octokit({ auth: process.env.REACT_APP_GH_PAT });

export const fetchData = async () => {
  await octokit
    .request("GET /repos/{owner}/{repo}/issues", {
      owner: "axios",
      repo: "axios",
      state: "all",
      page: 2,
      per_page: 100,
    })
    .then((response) => response.data)
    .then((data) => data.map((issue) => issue));
};
