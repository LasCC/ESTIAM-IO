import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography, Button } from "@material-ui/core";
export default props => {
  return (
    <Paper
      style={{
        borderRadius: 10,
        backgroundColor: props.color,
        padding: 20,
        margin: 10
      }}
    >
      <Typography
        variant="h5"
        style={{
          color: "white",
          fontWeight: "bold"
        }}
      >
        Terminer {props.title}
      </Typography>
      <Typography variant="subtitle2" style={{ color: "white" }}>
        Généralement, on utilise un texte en faux latin (le texte ne veut rien
        dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de
        faire office de texte d'attente.
      </Typography>
      <Link to={props.route} style={{ textDecoration: "none", color: "white" }}>
        <Button
          fullWidth
          variant="outlined"
          style={{ color: "white", marginTop: 10, borderColor: "white" }}
        >
          Remplir le formulaire
        </Button>
      </Link>
    </Paper>
  );
};
