import React from "react";
import { Grid } from "@material-ui/core";
import Todolist from "./Todolist";
import Help from "./Help";

export default props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs sm="auto" lg={8}>
        <Todolist />
      </Grid>
      <Grid item xs sm="auto" lg={4}>
        <Help />
      </Grid>
    </Grid>
  );
};
