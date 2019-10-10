import React from "react";
import { Box, Typography, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={1}
        m={1}
        css={{ height: "100vh" }}
      >
        <Box p={1} className="fade-in-fwd">
          <img
            src="https://i.imgur.com/EYIL6Yy.png"
            alt="404image"
            style={{ width: 350 }}
          />
          <Box p={1}>
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
            <Link to="/" style={{ textDecoration: "none" }}>
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
