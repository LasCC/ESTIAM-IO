import React, { useContext } from "react";
import jwtdecode from "jwt-decode";
import { Paper, Typography, Divider, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Routes from "../../Routes";
import { Candidature } from "../../contexts/CandidatureContext";

export default props => {
  const { firstName } = jwtdecode(localStorage.getItem("token"));
  const { dossier } = useContext(Candidature);
  //console.log(dossier.step);
  const uncompletedStep = 4 - dossier.step.filter(step => step.done).length;
  //console.log(uncompletedStep);

  return (
    <div style={{ height: "100%", marginTop: 15 }}>
      <Typography style={{ color: "gray", marginBottom: 10 }}>
        Tâches
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
              Formulaire{uncompletedStep > 1 ? "s" : ""} a completer
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

        <Paper
          children
          style={{
            padding: 25,
            backgroundColor: "#2979ff",
            borderRadius: 10,
            boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)"
          }}
        >
          <Box style={{ display: !uncompletedStep ? "none" : "block" }}>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {uncompletedStep} dossier{uncompletedStep > 1 ? "s" : ""} manquant
            </Typography>
            <Typography style={{ color: "white", marginTop: 10 }}>
              Dans cette partie il va vous être demandé de compléter un ou
              plusieurs formulaires, vous avez la possibilité de les remplir à
              tout moment de la journée.
            </Typography>
            <Link
              to={Routes.DASHBOARD_TASKS}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  borderColor: "white",
                  marginTop: 15
                }}
              >
                Voir les dossiers
              </Button>
            </Link>
          </Box>

          <Box style={{ display: !uncompletedStep ? "block" : "none" }}>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {`${firstName}`}, vous avez terminé inscription !
            </Typography>
            <Typography style={{ color: "white", marginTop: 10 }}>
              Vous pouvez dès à présent regarder le récapitulatif de votre
              dossier d'admission et en profité pour regarder l'avancement de
              votre dossier. <br />
              Nous vous enverrons un mail une fois que votre dossier est
              accepté.
            </Typography>
            <a href={Routes.RECAPITULATION} style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  borderColor: "white",
                  marginTop: 15
                }}
              >
                Récapitulatif de votre dossier
              </Button>
            </a>
          </Box>
        </Paper>
      </Paper>
    </div>
  );
};
