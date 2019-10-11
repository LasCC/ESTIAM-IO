import React from "react";
import { Grid } from "@material-ui/core";
import OtherData1 from "./OtherData1";
import OtherData2 from "./OtherData2";
import OtherData3 from "./OtherData3";
document.body.style.backgroundColor = "white";

export default props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs sm="auto" lg={4} md={4}>
        <OtherData1 />
      </Grid>
      <Grid item xs sm="auto" lg={4} md={4}>
        <OtherData2 />
      </Grid>
      <Grid item xs sm="auto" lg={4} md={4}>
        <OtherData3 />
      </Grid>
    </Grid>
  );
};
