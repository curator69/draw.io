import React from "react";

const WeekResults = ({ issues }) => {
  const currentDate = new Date();
  let lastWeekDate = new Date();
  lastWeekDate.setDate(lastWeekDate.getDate() - 7);

  const newDates = issues
    .map((issue) => issue.created_at)
    .filter((date) => new Date(date))
    .map((date) => date.toDateString());

  console.log(newDates);

  return (
    <div className="title">
      <h1>Weekly Issues Count:</h1>

      <div className="flex">
        <div className="flex column">
          <div>{currentDate.toDateString()}</div>
          <p>to</p>
          <div>{lastWeekDate.toDateString()}</div>
        </div>
        <div>issueCount</div>
      </div>
    </div>
  );
};
export default WeekResults;
