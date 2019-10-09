import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import NavBar from "./components/NavBar";

export default props => {
  return (
    <>
      <NavBar />
      <Grid container spacing={0}>
        <Grid item xs sm="auto" lg={6} md={6}>
          <Box
            style={{
              backgroundColor: "white",
              display: "grid",
              padding: 25,
              alignItems: "center"
            }}
            css={{ height: "60vh" }}
          >
            <Typography
              variant="h4"
              style={{ color: "#004080", fontWeight: "bold" }}
            >
              Inscription
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "#004080", fontWeight: "bold" }}
            >
              Vous n'avez pas encore de compte ?
            </Typography>
            <Typography style={{ color: "#004080", marginTop: 15 }}>
              Avant de commencer l'inscription merci de vous prémunir de votre
              CV, lettre de motivation, et de vos trois derniers bulletins de
              note. At consectetur lorem donec massa sapien faucibus. Sagittis
              nisl rhoncus mattis rhoncus urna neque.
            </Typography>
            <Link to="/inscription" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                style={{
                  color: "#004080",
                  fontWeight: "bold",
                  borderColor: "#004080",
                  borderWidth: 2,
                  marginTop: 10
                }}
              >
                Créer un compte
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item sm="auto" lg={6} md={6}>
          <Box
            style={{
              backgroundColor: "#004080",
              display: "grid",
              padding: 25,
              alignItems: "center"
            }}
            css={{ height: "60vh" }}
          >
            <Typography
              variant="h4"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Connexion
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Vous avez déjà un compte ?
            </Typography>
            <Typography style={{ color: "white", marginTop: 15 }}>
              Consequat ac felis donec et odio pellentesque. Sed viverra tellus
              in hac mattis vulputate enim nulla aliquet porttitor lacus luctus.
              At consectetur lorem donec massa sapien faucibus, Sagittis nisl
              rhoncus mattis rhoncus urna neque !
            </Typography>
            <Link to="/connexion" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  borderColor: "white",
                  borderWidth: 2,
                  marginTop: 10
                }}
              >
                Se connecter
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
