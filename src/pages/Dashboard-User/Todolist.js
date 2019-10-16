import React, { useEffect, useState, useContext } from "react";
import { Paper, Typography, Divider, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Routes from "../../Routes";
import { Candidature } from "../../contexts/CandidatureContext";
export default props => {
  const { dossier } = useContext(Candidature);

  const getFormulaire = () => {
    switch (dossier.step) {
      case "1":
        return "Renseignement généraux";
      case "2":
        return "Situation actuelle";
      case "3":
        return "Voeux de formation";
      case "4":
        return "Pièces complementaires";
      default:
    }
  };
  console.log("okokokokokok", getFormulaire());
  return (
    <div style={{ height: "100%" }}>
      <Typography style={{ color: "gray", marginBottom: 10 }}>
        Tâches
        <i className="uil uil-angle-down" />
      </Typography>
      <Paper
        component="div"
        overflow="visible"
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
              Formulaires a completer
            </Typography>
          </Box>
          <Box p={1}>
            <Link
              to={Routes.DASHBOARD_TASKS}
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

        {/* == Cards == */}

        <Paper children style={{ padding: 15, backgroundColor: "#004080" }}>
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              color: "white"
            }}
          >
            {4 - dossier.step} dossier{4 - dossier.step > 1 ? "s" : ""} manquant
          </Typography>
          <Typography style={{ color: "white" }}>
            Généralement, on utilise un texte en faux latin (le texte ne veut
            rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet
            donc de faire office de texte d'attente.
          </Typography>
          <Link
            to={Routes.DASHBOARD_TASKS}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="outlined"
              fullWidth
              style={{
                color: "white",
                marginTop: 15
              }}
            >
              Remplir
            </Button>
          </Link>
        </Paper>
      </Paper>
    </div>
  );
};
