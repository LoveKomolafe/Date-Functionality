import React from "react";
import useDate from "./Components/useDate";
import "./styles.css";

function DateManipulationExample() {
  const { date, addDays, addMonths } = useDate();

  return (
    <div className="date">
      <h1>Date Functionality</h1>
      <p>Current Date: {date.toDateString()}</p>
      <div className="button">
        <button onClick={() => addDays(1)}>Add 1 Day</button>
        <button onClick={() => addDays(7)}>Add 7 Days</button>
        <button onClick={() => addMonths(1)}>Add 1 Month</button>
        <button onClick={() => addMonths(2)}>Add 2 Months</button>
      </div>
    </div>
  );
}

export default DateManipulationExample;
