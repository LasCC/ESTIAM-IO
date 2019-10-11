import React from "react";
import NavBar from "../NavBar";
import { Container, Typography, Box, Grid } from "@material-ui/core";
document.body.style.backgroundColor = "white";

export default props => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Typography color="textSecondary">
          Updated every day at midnight
        </Typography>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Données Google Analytics
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm="auto" lg={6} md={6}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "50vh",
                marginTop: 15
              }}
            >
              <iframe
                title="datadujour"
                width="100%"
                height="100%"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=2052018947"
              />
            </Box>
          </Grid>
          <Grid item sm="auto" lg={6} md={6}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "50vh",
                marginTop: 15
              }}
            >
              <iframe
                title="s"
                width="100%"
                height="100%"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=2052018947"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
