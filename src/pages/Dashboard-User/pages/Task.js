import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography, Button, Box } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

export default props => {
  return (
    <Paper
      style={{
        borderRadius: 10,
        padding: 20,
        margin: 25,
        boxShadow: "0px 29px 28px -16px rgba(0,0,0,0.07)"
      }}
    >
      <Box display="flex" alignItems="center">
        {!props.completed ? (
          <Box
            display={{
              sm: "none",
              xs: "none",
              lg: "block",
              xl: "block",
              md: "block"
            }}
            style={{
              padding: 10,
              backgroundColor: "#f44336",
              color: "white",
              borderRadius: 5,
              shadow: "0px 11px 15px -5px rgba(0, 138, 217, 0.22)",
              marginRight: 15
            }}
          >
            <Typography variant="subtitle2" style={{ color: "white" }}>
              À compléter
            </Typography>
          </Box>
        ) : (
          <Box
            display={{
              sm: "none",
              xs: "none",
              lg: "block",
              xl: "block",
              md: "block"
            }}
            style={{
              padding: 10,
              backgroundColor: "rgb(24, 117, 240)",
              color: "white",
              borderRadius: 5,
              shadow: "0px 11px 15px -5px rgba(0, 138, 217, 0.22)",
              marginRight: 15
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle2" style={{ color: "white" }}>
                Déjà complété
              </Typography>
              <DoneIcon style={{ marginLeft: 8 }} />
            </Box>
          </Box>
        )}
        <Box>
          <Typography
            variant="h5"
            style={{
              color: "black",
              fontWeight: "bold"
            }}
          >
            Compléter {props.title}
          </Typography>
        </Box>
      </Box>
      <Typography variant="subtitle2" style={{ color: "black", marginTop: 15 }}>
        Afin de pouvoir validé votre dossier d'inscription à l'ESTIAM, veillez à
        bien vouloir remplir le(s) formulaire(s) ainsi que vos documents
        personnels.
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <a
          href={props.route}
          style={{ textDecoration: "none", color: "black" }}
        >
          {!props.completed && (
            <Button
              variant="outlined"
              style={{
                color: "rgb(24, 117, 240)",
                marginTop: 10,
                borderColor: "rgb(24, 117, 240)"
              }}
            >
              Reprendre l'avancement
            </Button>
          )}
        </a>
      </Box>
    </Paper>
  );
};
