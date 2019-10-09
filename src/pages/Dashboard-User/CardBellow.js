import React from "react";
import { Grid } from "@material-ui/core";
import Taches from "./Taches";
import Resultat from "./Resultat";
import Aide from "./Aide";

export default props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs sm="auto" lg={4}>
        <Taches />
      </Grid>
      <Grid item xs sm="auto" lg={4}>
        <Resultat />
      </Grid>
      <Grid item xs sm="auto" lg={4}>
        <Aide />
      </Grid>
    </Grid>
  );
};
