import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Progress from "./Progress";
import FirstCard from "./FirstCard";

export default props => {
  return (
    <>
      <Typography style={{ color: "gray" }}>Dashboard</Typography>
      <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: 10 }}>
        Vue d'ensemble
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs sm="auto" lg={6}>
          <FirstCard />
        </Grid>
        <Grid item xs>
          <Progress />
        </Grid>
      </Grid>
    </>
  );
};
