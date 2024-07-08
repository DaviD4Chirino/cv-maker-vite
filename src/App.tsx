import { useContext, useState } from "react";
import "./App.css";
import { DataContext } from "./contexts/dataContext";
import { updateObject } from "./Utils/Utils";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import Assert from "./components/Assert";
import FormPage from "./modules/formPage";

function App() {
  const { data } = useContext(DataContext);

  const steps = Object.keys(data);

  return (
    <section id="Main" className="w-full h-[100vh] grid grid-cols-2">
      <FormPage steps={steps} />
    </section>
  );
}

export default App;
