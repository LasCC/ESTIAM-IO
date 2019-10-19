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
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
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
export default props => {
  const classes = useStyles();
  const [completed] = React.useState({});
  const { dossier } = useContext(Candidature);
  console.log(dossier);
  const steps = getSteps();
  return (
    <div className={classes.root}>
      <Stepper
        nonLinear
        activeStep={dossier.administrationStep}
        alternativeLabel
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel completed={completed[index]}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
