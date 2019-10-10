import React, { useContext } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Divider,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { LoginContext } from "../../contexts/LoginContext";
import NavBar from "./components/NavBar";

export default props => {
  const [values, setValues] = React.useState({
    identifiant: "",
    password: ""
  });
  const { handleLogin } = useContext(LoginContext);
  handleLogin(values);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  console.log(values);
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Grid container spacing={0}>
        <Grid item lg={3} md={3}>
          <Box
            display={{
              xs: "none",
              md: "block",
              lg: "block"
            }}
            style={{
              padding: 25,
              height: "70vh",
              backgroundColor: "#004080"
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }}>
                <ArrowBackIosIcon />
                Accueil
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs lg={9} md={9}>
          <Box
            display="flex"
            alignItems="center"
            css={{ height: "70vh", marginTop: 25 }}
          >
            <Box
              style={{
                padding: 25,
                backgroundColor: "white",
                width: "100%",
                height: "100%"
              }}
            >
              <div className="fade-in-fwd">
                <Typography
                  variant="h4"
                  style={{ color: "#004080", fontWeight: "bold" }}
                >
                  Connexion
                </Typography>
                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 20
                  }}
                >
                  Identifiant
                </Typography>
                <TextField
                  variant="outlined"
                  label="Identifiant"
                  onChange={handleChange("identifiant")}
                  type="email"
                  fullWidth
                  style={{ marginTop: 20 }}
                  autoComplete="current-password"
                />
                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 20
                  }}
                >
                  Mot de passe
                </Typography>
                <TextField
                  variant="outlined"
                  label="Mot de passe"
                  onChange={handleChange("password")}
                  fullWidth
                  type="password"
                  style={{ marginTop: 20 }}
                  autoComplete="current-password"
                />
                <div style={{ marginTop: 20 }}>
                  <Link
                    to="/reinitialisation-mot-de-passe"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#004080",
                        fontStyle: "italic",
                        fontWeight: "bold"
                      }}
                    >
                      Mot de passe oublié?
                    </Typography>
                  </Link>
                  <Link
                    to="/reinitialisation-identifiant"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#004080",
                        fontStyle: "italic",
                        fontWeight: "bold"
                      }}
                    >
                      Nom d'utilisateur oublié
                    </Typography>
                  </Link>
                </div>
                <Link to="/dashboard">
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      marginTop: 20,
                      backgroundColor: "#004080",
                      color: "white"
                    }}
                  >
                    Continuer
                  </Button>
                </Link>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
