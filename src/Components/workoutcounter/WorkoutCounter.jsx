import React, { useState } from "react";
import FormResult from "../formrezult/FormResult.jsx";
import Results from "../results/Results.jsx";

function WorkoutCounter(props) {
  const [workouts] = useState([
    { id: "1", date: "10.08.22", distance: "4.7" },
    { id: "2", date: "11.08.22", distance: "6.2" },
    { id: "3", date: "12.08.22", distance: "5.3" },
  ]);

  return (
    <React.Fragment>
      <FormResult />
      <Results workouts={workouts} />
    </React.Fragment>
  );
}

export default WorkoutCounter;
