import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import { Candidature } from "../../contexts/CandidatureContext";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  circle: {
    color: "red"
  }
}));

function getSteps() {
  return [
    "Dossier incomplet",
    "En cours de traitement",
    "Rendez-vous planifié",
    "Dossier rejeté",
    "Dossier validé"
  ];
}

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return "En cours de traitement";
//     case 1:
//       return "Dossier incomplet";
//     case 2:
//       return "Rendez-vous planifié";
//     case 3:
//       return "Dossier rejeté";
//     case 4:
//       return "Dossier validé";
//     default:
//       return "Unknown step";
//   }
// }

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const { dossier } = useContext(Candidature);
  const [activeStep, setActiveStep] = useState(2);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={dossier.administrationStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
