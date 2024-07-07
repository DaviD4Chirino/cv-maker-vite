"use client";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React from "react";
import { Button } from "@mui/material";

import "./formPage.css";
import Assert from "../components/Assert";
import ProfileForm from "./FormPageModules/ProfileForm";

export default function FormPage({ steps }: { steps: string[] }) {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section
      id="Form"
      className="
          col-span-1 
          h-full bg-primary
		  text-background
          pt-3 p-5 pb-0
			  "
    >
      <Stepper
        className="overflow-x-hidden "
        nonLinear
        activeStep={activeStep}
        id="Stepper"
      >
        {steps.map((title: string, idx: number) => (
          <Step key={idx}>
            <Button
              className="capitalize text-nowrap "
              onClick={() => setActiveStep(idx)}
            >
              <StepLabel>{title.replace("_", " ")}</StepLabel>
            </Button>
          </Step>
        ))}
      </Stepper>
      {/* NOTE: Since theres no real need for the form tag, just the text fields, we might just as well ignore them */}
      <div className="content container mt-5">
        <Assert assertion={steps[activeStep] == "personal_information"}>
          <ProfileForm />
        </Assert>
      </div>
    </section>
  );
}
