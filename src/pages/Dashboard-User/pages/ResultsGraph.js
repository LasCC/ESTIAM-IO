import React from "react";
import Routes from "../../../Routes";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { HorizontalBar, Bar } from "react-chartjs-2";
import {
  Box,
  Paper,
  Typography,
  Container,
  Button,
  Divider
} from "@material-ui/core";

const data = {
  labels: [
    "Etat civil",
    "Situation Pro/Etud",
    "Vœux de formation",
    "Etat d'avancement du dossier"
  ],
  datasets: [
    {
      label: "Résultats que vous avez obtenus",
      backgroundColor: "rgba(30, 144, 255,0.9)",
      borderColor: "rgba(55, 66, 250,1.0)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(56, 103, 214,1.0)",
      hoverBorderColor: "rgba(75, 123, 236,1.0)",
      data: [65, 59, 80, 81, 56, 55, 0]
    }
  ]
};
document.body.style.backgroundColor = "white";

export default props => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Paper
          style={{
            padding: 15,
            boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
            borderRadius: 10
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box flexGrow={1}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Vos résultats
              </Typography>
            </Box>
            <Box p={1}>
              <Link
                to={Routes.DASHBOARD}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#1875F0", color: "white" }}
                >
                  Retour
                </Button>
              </Link>
            </Box>
          </Box>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <HorizontalBar data={data} />
          <Divider style={{ marginTop: 20, marginBottom: 20 }} />
          <Bar data={data} alignItems="center" />
        </Paper>
      </Container>
    </>
  );
};
