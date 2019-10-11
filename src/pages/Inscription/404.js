import React, { useContext } from "react";
import { Box, Typography, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";

export default props => {
  const { checkAuth } = useContext(LoginContext);
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ height: "90vh" }}
      >
        <Box className="fade-in-fwd">
          <img
            src="https://i.imgur.com/EYIL6Yy.png"
            alt="404image"
            style={{ width: 350 }}
          />
          <Box>
            <Typography
              variant="subtitle2"
              style={{ color: "white", fontSize: 15 }}
            >
              Oops ! Vous n'êtes pas censé être ici <br />
              Lorsque le roi des ratons laveurs s'est approché de vous à
              l'automne 2005, vous avez été déconcerté par la générosité de son
              offre et aussi par sa capacité à parler. Vous vivez en harmonie
              depuis. Ils paient 50% de votre loyer et vous "oubliez" de sortir
              les ordures toutes les deux semaines.
            </Typography>
            <Link
              to={checkAuth() ? "/dashboard" : "/"}
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{ color: "#FFEE00", fontWeight: "bold", padding: 0 }}
              >
                Revenir à l'accueil
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
