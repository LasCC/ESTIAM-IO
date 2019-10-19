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
        Compléter {props.title}
      </Typography>
      <Typography variant="subtitle2" style={{ color: "white", marginTop: 15 }}>
        Afin de pouvoir validé votre dossier d'inscription à l'ESTIAM, veillez à
        bien vouloir remplir un formulaire ainsi que vos documents personnels.
      </Typography>
      <Link to={props.route} style={{ textDecoration: "none", color: "white" }}>
        <Button variant="outlined" style={{ color: "white", marginTop: 10 }}>
          Reprendre l'avancement
        </Button>
      </Link>
    </Paper>
  );
};
