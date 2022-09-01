import "./App.css";
import React, { useState } from "react";
import FormResult from "./Components/formrezult/FormResult.jsx";
import Results from "./Components/results/Results.jsx";

function App() {
  const [workouts] = useState([
    { id: "1", date: "10.08.22", distance: "4.7" },
    { id: "2", date: "11.08.22", distance: "6.2" },
    { id: "3", date: "12.08.22", distance: "5.3" },
  ]);
	
	
  return (
    <>
      <FormResult />
      <Results
        workouts={workouts} 
      />
    </>
  );
}

export default App;
