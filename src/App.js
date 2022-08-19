import "./App.css";
import React, { useState } from "react";
import FormRezult from "./Components/formrezult/FormRezult.jsx";
import Rezults from "./Components/rezults/Results.jsx";

function App() {
  const [workouts, setWorkouts] = useState([
    { id: "1", date: "10.08.22", distance: "4.7" },
    { id: "2", date: "11.08.22", distance: "6.2" },
    { id: "3", date: "12.08.22", distance: "5.3" },
  ]);
	
	
  return (
    <>
      <FormRezult />
      <Rezults
        workouts={workouts} 
      />
    </>
  );
}

export default App;
