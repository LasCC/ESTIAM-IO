import React from "react";
import { Typography, Paper, Box, Divider, Button } from "@material-ui/core";
import ChartResultat from "./ChartResultat";
import { Link } from "react-router-dom";
document.body.style.backgroundColor = "white"

export default props => {
  return (
    <>
      <Typography style={{ color: "gray", marginBottom: 10 }}>
        Vos résultats
        <i className="uil uil-angle-down" />
      </Typography>
      <Paper
        style={{
          padding: 30,
          boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
          borderRadius: 10,
          height: "80%"
        }}
      >
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Résultats
            </Typography>
          </Box>
          <Box p={1}>
            <Link
              to="/resultats"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#1875F0", color: "white" }}
              >
                Explorer
              </Button>
            </Link>
          </Box>
        </Box>
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        <Box>
          <ChartResultat />
        </Box>
      </Paper>
    </>
  );
};
