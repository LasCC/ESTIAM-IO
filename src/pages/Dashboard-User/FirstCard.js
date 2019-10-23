import React, { useContext } from "react";
import jwtdecode from "jwt-decode";
import { LoginContext } from "../../contexts/LoginContext";
import { Typography, Paper, Divider, Button } from "@material-ui/core";
import Routes from "../../Routes";
import { Link } from "react-router-dom";

export default props => {
  const { loginState } = useContext(LoginContext);
  const { firstName } = jwtdecode(localStorage.getItem("token"));
  console.log("dashboard", loginState);
  return (
    <Paper
      style={{
        padding: 30,
        // backgroundImage: `url(https://i.imgur.com/mX9sOg3.png)`,
        // backgroundPosition: "left",
        backgroundColor: "#1875F0",
        boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
        borderRadius: 10,
        height: "auto"
      }}
    >
      <Typography variant="h5" style={{ color: "white", fontWeight: "bold" }}>
        Bravo {`${firstName}`}, vous êtes dans le dashboard !
      </Typography>
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <Typography style={{ marginTop: 20, color: "white" }}>
        Nous souhaitons la bienvenue dans le dashboard {`${firstName}`} ici,
        vous avez la possibilité de reprendre, et voir l'avancement de votre
        dossier d'admission.
      </Typography>
      <Link to={Routes.DASHBOARD_TASKS} style={{ textDecoration: "none" }}>
        <Button variant="outlined" style={{ color: "white", marginTop: 15 }}>
          Accéder aux formulaires
        </Button>
      </Link>
    </Paper>
  );
};
