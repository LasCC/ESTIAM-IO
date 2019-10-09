import React from "react";
import { Grid, Typography } from "@material-ui/core";
import BlueCard from "./BlueCard";
import Avancement from "./Avancement";

export default props => {
  return (
    <>
      <Typography style={{ color: "gray" }}>
        Dashboard <i className="uil uil-angle-down" />
      </Typography>
      <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: 10 }}>
        Vue d'ensemble
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs sm="auto" lg={6}>
          <BlueCard />
        </Grid>
        <Grid item xs>
          <Avancement />
        </Grid>
      </Grid>
    </>
  );
};
