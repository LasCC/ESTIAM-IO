import React from "react";
import { Paper, Typography, Divider, Box, Button } from "@material-ui/core";
import Steppers from "./Steppers";

export default props => {
  return (
    <Paper
      style={{
        padding: 30,
        boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
        borderRadius: 10,
        height: "75%"
      }}
    >
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Etat d'avancement
      </Typography>
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <Box display={{ xs: "none", lg: "block", md: "block" }}>
        <Steppers />
      </Box>
      <Box display={{ xs: "block", md: "none", lg: "none" }}>
        <Typography component={"p"}>
          Cette feature a été pensé pour les plus grands écran, pour y accéder
          merci d'utiliser sur un écran plus adapté.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginTop: 10 }}
          href="mailto: ?subject=Rappel : Dashboard ESTIAM-IO&body=Voici le lien du site: dashboard.estiam.io"
        >
          S'envoyer un mail
        </Button>
      </Box>
    </Paper>
  );
};
