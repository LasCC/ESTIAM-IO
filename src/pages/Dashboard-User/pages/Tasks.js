import React from "react";
import NavBar from "../NavBar";
import Routes from "../../../Routes";
import {
  Box,
  Paper,
  Typography,
  Container,
  Button,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";

document.body.style.backgroundColor = "white";

export default props => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Paper
          style={{
            padding: 15,
            boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
            borderRadius: 10
          }}
        >
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Formulaires à compléter
              </Typography>
            </Box>
            <Box p={1}>
              <Link
                to={Routes.DASHBOARD}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#1875F0", color: "white" }}
                >
                  Retour
                </Button>
              </Link>
            </Box>
          </Box>

          <Divider style={{ marginTop: 10, marginBottom: 10 }} />

          <Paper
            style={{
              borderRadius: 10,
              backgroundColor: "#508CC9",
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
              Terminer "path"
            </Typography>
            <Typography variant="subtitle2" style={{ color: "white" }}>
              Généralement, on utilise un texte en faux latin (le texte ne veut
              rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet
              donc de faire office de texte d'attente.
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              style={{ color: "white", marginTop: 10, borderColor: "white" }}
            >
              Remplir le formulaire
            </Button>
          </Paper>
          <Paper
            style={{
              borderRadius: 10,
              backgroundColor: "#508CC9",
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
              Terminer "path"
            </Typography>
            <Typography variant="subtitle2" style={{ color: "white" }}>
              Généralement, on utilise un texte en faux latin (le texte ne veut
              rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet
              donc de faire office de texte d'attente.
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              style={{ color: "white", marginTop: 10, borderColor: "white" }}
            >
              Remplir le formulaire
            </Button>
          </Paper>
          <Paper
            style={{
              borderRadius: 10,
              backgroundColor: "#508CC9",
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
              Terminer "path"
            </Typography>
            <Typography variant="subtitle2" style={{ color: "white" }}>
              Généralement, on utilise un texte en faux latin (le texte ne veut
              rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet
              donc de faire office de texte d'attente.
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              style={{ color: "white", marginTop: 10, borderColor: "white" }}
            >
              Remplir le formulaire
            </Button>
          </Paper>

          {/* <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginTop: 25 }}
          >
            Pièces complémentaires
          </Typography>

          <Divider style={{ marginTop: 10, marginBottom: 10 }} />

          <Typography
            variant="subtitle2"
            color="textSecondary"
            style={{ marginTop: 25, marginBottom: 15 }}
          >
            <strong>Formats autorisés :</strong> <br />
            JPG, PDF, PNG (les CV et lettre de motivation peuvent aussi être au
            format Word).
          </Typography>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Vos trois derniers bulletins de notes
          </Typography>

          <Grid>
            <Button
              variant="outlined"
              component="label"
              style={{ color: "#004080" }}
            >
              Choisir un fichier
              <input type="file" style={{ display: "none" }} />
            </Button>
            <Button
              variant="outlined"
              component="label"
              style={{ marginRight: 15, marginLeft: 15, color: "#004080" }}
            >
              Choisir un fichier
              <input type="file" style={{ display: "none" }} />
            </Button>
            <Button
              variant="outlined"
              component="label"
              style={{ color: "#004080" }}
            >
              Choisir un fichier
              <input type="file" style={{ display: "none" }} />
            </Button>
          </Grid>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Votre pièce d'identité (passeport, CNI)
          </Typography>
          <Button
            variant="outlined"
            component="label"
            style={{ color: "#004080" }}
          >
            Choisir un fichier
            <input type="file" style={{ display: "none" }} />
          </Button>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Votre CV
          </Typography>
          <Button
            variant="outlined"
            component="label"
            style={{ color: "#004080" }}
          >
            Choisir un fichier
            <input type="file" style={{ display: "none" }} />
          </Button>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Votre lettre de motivation
          </Typography>
          <Button
            variant="outlined"
            component="label"
            style={{ color: "#004080" }}
          >
            Choisir un fichier
            <input type="file" style={{ display: "none" }} />
          </Button>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Votre photo d'identité
          </Typography>
          <Button
            variant="outlined"
            component="label"
            style={{ color: "#004080" }}
          >
            Choisir un fichier
            <input type="file" style={{ display: "none" }} />
          </Button>
          <Box display="flex" flexDirection="row-reverse">
            <Button
              variant="contained"
              type="submit"
              component="label"
              style={{ color: "white", backgroundColor: "#004080" }}
            >
              Envoyer
            </Button>
          </Box> */}
        </Paper>
      </Container>
    </>
  );
};
