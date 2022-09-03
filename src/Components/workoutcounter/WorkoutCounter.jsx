import React, { useState } from "react";
import FormResult from "../formrezult/FormResult.jsx";
import Results from "../results/Results.jsx";

function WorkoutCounter(props) {
  const [workouts, setWorkouts] = useState([]);

  function handlerAdd(workout) {
	  
    if (workouts.some((el) => el.date === workout.date)) {
      setWorkouts((prevWorkouts) =>
        prevWorkouts.map((obj) => {
          if (obj.date === workout.date) {
            return {
              id: workout.id,
              date: obj.date,
              distance: +obj.distance + +workout.distance,
            };
          }
          return obj;
        })
      );
    } else {
      setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
    }
  }
  function sortingByDate(date1, date2) {
    const a = date1.split(".");
    const b = date2.split(".");
    return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
  }
  workouts.sort((a, b) => sortingByDate(a.date, b.date));
  return (
    <React.Fragment>
      <FormResult onAdd={handlerAdd} />
      <Results workouts={workouts} />
    </React.Fragment>
  );
}

export default WorkoutCounter;
