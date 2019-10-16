import React, { useContext } from "react";
import jwtdecode from "jwt-decode";
import { LoginContext } from "../../contexts/LoginContext";
import { Typography, Paper, Divider } from "@material-ui/core";

export default props => {
  const { loginState } = useContext(LoginContext);
  const { firstName } = jwtdecode(localStorage.getItem("token"));
  console.log("dashboard", loginState);
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
        Bravo {`${firstName}`}, vous avez terminé votre inscription !
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
