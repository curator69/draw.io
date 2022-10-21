// import React, { useState } from "react";
// import { Octokit } from "octokit";

// const WeekResults = () => {
//   const [issues, setIssues] = useState([]);

//   const octokit = new Octokit({auth: process.env.REACT_APP_GH_PAT});

//   octokit
//     .request(
//       "GET /repos/{owner}/{repo}/issues",
//       { owner: "facebook", repo: "react" },
//       (response) => response.data.map((issue) => issue.title)
//     )
//     .then((issueTitles) => setIssues(issueTitles.data));

//   const weekly = issues.map((issueTitle) => {
//     const created_data = new Date(issueTitle.created_at);
//     const today = new Date();

//     // calculate the difference between today and upto last 10 weeks issues
//     const diffTime = Math.abs(today - created_data);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return Math.ceil(diffDays / 7);
//   });

//   /* Remove undefined values from array */
//   const filtered = weekly.filter(function (el) {
//     return el != null;
//   });

//   return (
//     <div>
//       <h1>Results</h1>
//       <div>
//         <h2>Weekly Issues Count</h2>
//         <ul>
//           {issues.map((issueTitle, idx) => (
//             <li key={idx}>{issueTitle?.url} </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default WeekResults;
