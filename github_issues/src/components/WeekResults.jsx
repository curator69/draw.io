import React from "react";

const WeekResults = ({ issues }) => {
  const weekly = issues.map((issueTitle) => {
    const created_data = new Date(issueTitle.created_at);
    const today = new Date();

    // calculate the difference between today and upto last 10 weeks issues
    const diffTime = Math.abs(today - created_data);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.ceil(diffDays / 7);
  });

  /* Remove undefined values from array */
  const filtered = weekly.filter(function (el) {
    return el != null;
  });

  return (
    <div>
      <h2>Weekly Issues Count</h2>
    </div>
  );
};
export default WeekResults;
