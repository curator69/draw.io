import React from "react";

const WeekResults = ({ issues }) => {
  const newDates = issues.map((issue) => issue.created_at);

  //
  const getDateDifference = (date) => {
    const date1 = new Date();
    let newDate = date.slice(0, 10).split("-");
    let year = newDate.shift();
    newDate.push(year);
    const date2 = new Date(newDate.join("/"));
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays - 1;
  };

  const result = newDates.reduce((result, newDate) => {
    let difference = getDateDifference(newDate);
    result[~~(difference / 7)] = result[~~(difference / 7)]
      ? result[~~(difference / 7)] + 1
      : 1;
    return result;
  }, []);
  //

  console.log(issues);

  return (
    <div className="title">
      <h1>Weekly Issues Count:</h1>
      <div className="flex">
        <ul>
          <li>
            <span>Week 1</span> : {!result[0] ? 0 : result[0]} issues created
          </li>
          <li>
            <span>Week 2</span> : {!result[1] ? 0 : result[1]} issues created
          </li>
          <li>
            <span>Week 3</span> : {!result[2] ? 0 : result[2]} issues created
          </li>
          <li>
            <span>Week 4</span> : {!result[3] ? 0 : result[3]} issues created
          </li>
          <li>
            <span>Week 5</span> : {!result[4] ? 0 : result[4]} issues created
          </li>
          <li>
            <span>Week 6</span> : {!result[5] ? 0 : result[5]} issues created
          </li>
          <li>
            <span>Week 7</span> : {!result[6] ? 0 : result[6]} issues created
          </li>
          <li>
            <span>Week 8</span> : {!result[7] ? 0 : result[7]} issues created
          </li>
          <li>
            <span>Week 9</span> : {!result[8] ? 0 : result[8]} issues created
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WeekResults;
