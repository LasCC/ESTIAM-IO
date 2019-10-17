import React from "react";
import { Typography, Paper, Box, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Routes from "../../Routes";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
export default props => {
  return (
    <>
      <Typography style={{ color: "gray", marginBottom: 10, marginTop: 15 }}>
        Tutoriels
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
        <div style={{ width: "100%" }}>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Aide
              </Typography>
            </Box>
            <Box p={1}>
              <Link
                to={Routes.DASHBOARD_HELP}
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
        </div>
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        <Box display="flex" justifyContent="center">
          <HelpOutlineIcon style={{ fontSize: 155, color: "#1875F0" }} />
        </Box>
        <Typography component="div" style={{ fontWeight: "bold" }}>
          <Box textAlign="center" style={{ fontSize: 25 }}>
            Une question ?
          </Box>
          <Box
            textAlign="center"
            color="text.disabled"
            style={{ fontSize: 15, fontWeight: "normal" }}
          >
            Généralement, on utilise un texte en faux latin (le texte ne veut
            rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet
            donc de faire office de texte d'attente.
          </Box>
        </Typography>
      </Paper>
    </>
  );
};
