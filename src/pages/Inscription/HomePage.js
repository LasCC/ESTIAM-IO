import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button, Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

export default props => {
  return (
    <Container maxWidth="lg" id="Homepage">
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
              className="fade-in-fwd"
              variant="h3"
              style={{ color: "#004080", fontWeight: "bold" }}
            >
              <PersonAddIcon
                className="iconregister"
                style={{ marginRight: 10 }}
              />
              Inscription
            </Typography>
            <Typography
              className="fade-in-fwd"
              variant="h5"
              style={{ color: "#004080", fontWeight: "bold" }}
            >
              Vous n'avez pas encore de compte ?
            </Typography>
            <Typography
              style={{ color: "#004080", marginTop: 15 }}
              className="fade-in-fwd"
            >
              Vous souhaitez déposer votre candidature ? <br />
              Complétez le formulaire d’inscription (lien ci-dessous), ajoutez
              les pièces demandées et le tour est joué !
            </Typography>
            <Link to="/inscription" style={{ textDecoration: "none" }}>
              <Button
                className="fade-in-fwd"
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
              backgroundImage: `url(https://i.imgur.com/8d2H5Ww.png)`,
              backgroundPosition: "center",
              display: "grid",
              padding: 25,
              alignItems: "center"
            }}
            css={{ height: "60vh" }}
          >
            <Typography
              className="fade-in-fwd"
              variant="h3"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <LockOpenIcon className="iconlogin" style={{ marginRight: 10 }} />
              Connexion
            </Typography>
            <Typography
              className="fade-in-fwd"
              variant="h5"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Vous avez déjà un compte ?
            </Typography>
            <Typography
              style={{ color: "white", marginTop: 15 }}
              className="fade-in-fwd"
            >
              Consequat ac felis donec et odio pellentesque. Sed viverra tellus
              in hac mattis vulputate enim nulla aliquet porttitor lacus luctus.
              At consectetur lorem donec massa sapien faucibus, Sagittis nisl
              rhoncus mattis rhoncus urna neque !
            </Typography>
            <Link to="/connexion" style={{ textDecoration: "none" }}>
              <Button
                className="fade-in-fwd"
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
    </Container>
  );
};
