import React from "react";
import NavBar from "../NavBar";
import { Container, Typography, Box, Grid } from "@material-ui/core";
document.body.style.backgroundColor = "white";

export default props => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Typography color="textSecondary">Updated every hour</Typography>
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
                height: "45vh",
                marginTop: 15
              }}
              display={{ lg: "block", xs: "none", sm: "none", xl: "block" }}
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
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                marginTop: 15
              }}
              display={{ lg: "none", sm: "block", xl: "none" }}
            >
              <Typography>
                ça va pas être possible va sur un pc gitan
              </Typography>
            </Box>
          </Grid>
          <Grid item sm="auto" lg={6} md={6}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "45vh",
                marginTop: 15
              }}
              display={{ lg: "block", xs: "none", sm: "none", xl: "block" }}
            >
              <iframe
                title="semainedata"
                width="100%"
                height="100%"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=1879527797"
              />
            </Box>
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                marginTop: 15
              }}
              display={{ lg: "none", sm: "block", xl: "none" }}
            >
              <Typography>
                ça va pas être possible va sur un pc gitan
              </Typography>
            </Box>
          </Grid>
          <Grid item sm="auto" lg={6} md={6}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "45vh",
                marginTop: 15
              }}
              display={{ lg: "block", xs: "none", sm: "none", xl: "block" }}
            >
              <iframe
                title="14jours"
                width="100%"
                height="100%"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=1103763342"
              />
            </Box>
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                marginTop: 15
              }}
              display={{ lg: "none", sm: "block", xl: "none" }}
            >
              <Typography>
                ça va pas être possible va sur un pc gitan
              </Typography>
            </Box>
          </Grid>
          <Grid item sm="auto" lg={6} md={6}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "45vh",
                marginTop: 15
              }}
              display={{ lg: "block", xs: "none", sm: "none", xl: "block" }}
            >
              <iframe
                title="30jours"
                width="100%"
                height="100%"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=639031329"
              />
            </Box>
            <Box
              style={{
                backgroundColor: "white",
                padding: 15,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                marginTop: 15
              }}
              display={{ lg: "none", sm: "block", xl: "none" }}
            >
              <Typography>
                ça va pas être possible va sur un pc gitan
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
