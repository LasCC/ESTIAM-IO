import React from "react";
import { Typography, Paper, Divider } from "@material-ui/core";

export default props => {
  return (
    <Paper
      style={{
        padding: 30,
        backgroundColor: "#1875F0",
        boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
        borderRadius: 10,
        height: "75%"
      }}
    >
      <Typography variant="h5" style={{ color: "white", fontWeight: "bold" }}>
        Bravo Michel, vous avez terminer !
      </Typography>
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <Typography style={{ marginTop: 20, color: "white" }}>
        Généralement, on utilise un texte en faux latin (le texte ne veut rien
        dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de
        faire office de texte d'attente.
      </Typography>
    </Paper>
  );
};
