import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Divider,
  Container
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import NavBar from "./components/NavBar";

export default props => {
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const [values, setValues] = React.useState({
    identifiant: "",
    nom_famille: "",
    prenom: "",
    email: "",
    password: ""
  });
  console.log(values);
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Grid container spacing={0}>
        <Grid item xs sm="auto" lg={3} md={3}>
          <Box
            display={{
              xs: "none",
              md: "block",
              lg: "block"
            }}
            style={{
              padding: 25,
              height: "90%",
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
        <Grid item lg={9} md={9}>
          <Box
            display="flex"
            alignItems="center"
            css={{ height: "90%", marginTop: 25 }}
          >
            <Box
              style={{
                padding: 25,
                backgroundColor: "white",
                height: "100%",
                width: "100%"
              }}
            >
              <div className="fade-in-fwd">
                <Typography
                  variant="h4"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginBottom: 15
                  }}
                >
                  Inscription
                </Typography>
                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                <TextField
                  variant="outlined"
                  label="Identifiant"
                  onChange={handleChange("identifiant")}
                  required
                  fullWidth
                  type="text"
                  margin="normal"
                  style={{ marginTop: 20 }}
                />
                <TextField
                  variant="outlined"
                  label="Nom"
                  onChange={handleChange("nom_famille")}
                  required
                  fullWidth
                  type="text"
                  margin="normal"
                  style={{ marginTop: 20 }}
                />
                <TextField
                  variant="outlined"
                  label="Prénom"
                  onChange={handleChange("prenom")}
                  required
                  fullWidth
                  type="text"
                  style={{ marginTop: 20 }}
                />
                <TextField
                  variant="outlined"
                  label="Email"
                  onChange={handleChange("email")}
                  required
                  fullWidth
                  type="email"
                  style={{ marginTop: 20 }}
                />
                <TextField
                  id="outlined-adornment-password"
                  variant="outlined"
                  fullWidth
                  type={values.showPassword ? "text" : "password"}
                  label="Mot de passe"
                  style={{ marginTop: 20 }}
                  value={values.password}
                  onChange={handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Link to="/confirmation" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    style={{
                      display: "block",
                      direction: "flex-end",
                      marginTop: 25,
                      backgroundColor: "#004080",
                      color: "white"
                    }}
                  >
                    Confirmer l'inscription
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
