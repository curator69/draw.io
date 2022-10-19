import React, {useState} from "react";
import {Octokit} from "octokit";


const StatusResults = () => {

    const [issues, setIssues] = useState([])

    const octokit = new Octokit();

    octokit
        .request(
            "GET /repos/{owner}/{repo}/issues",
            {owner: "octokit", repo: "rest.js"},
            (response) => response.data.map((issue) => issue.title)
        )
        .then((issueTitles) => {
            setIssues(issueTitles.data)
        });

    return (
        <div>
            <h1>Status wise count of issues</h1>
            <div>
                <h2>Open Issues Count</h2>
                <ul>
                    {issues.map((issueTitle, idx) => (
                        <li key={idx}>{issueTitle?.title} < /li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default StatusResults;