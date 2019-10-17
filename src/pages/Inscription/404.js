import React from "react";
import { Box, Typography, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Routes from "../../Routes";

export default props => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={1}
        m={1}
        css={{ height: "90vh" }}
      >
        <Box p={1}>
          <img
            src="https://i.imgur.com/kZNTPqI.png"
            alt="404image"
            style={{ width: 350 }}
          />
          <Box p={1}>
            <Typography
              variant="subtitle2"
              style={{ color: "white", fontSize: 15 }}
            >
              Oh non !
              <br />
              Une boîte à pizza parfaitement séduisante, assise sur une table.
              Vous l'ouvrez rempli d'anticipation. Et ne trouver... rien d'autre
              que des miettes. Peut-être une croûte à moitié mangée. Et beaucoup
              de graisse. L'attente se transforme en déception profonde et en
              désespoir. Il n'y a plus rien !
            </Typography>
            <Link to={Routes.HOME} style={{ textDecoration: "none" }}>
              <Button
                style={{ color: "#ffea00", fontWeight: "bold", padding: 0 }}
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
