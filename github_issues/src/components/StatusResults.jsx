import React from "react";

const StatusResults = ({ issues }) => {
  const openIssueCount = issues.filter((issue) => issue.state === "open");
  const closeIssueCount = issues.filter((issue) => issue.state === "closed");

  return (
    <div className="flex column title">
      <h1>Status wise count of issues:</h1>
      <div>
        <div className="issue-counting flex">
          <div className="flex open-count">
            <h2>Open Issues Count:</h2>
            <span className="issues-count">{openIssueCount.length}</span>
          </div>
          <div className="flex close-count">
            <h2>Close Issues Count:</h2>
            <span className="issues-count">{closeIssueCount.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusResults;
