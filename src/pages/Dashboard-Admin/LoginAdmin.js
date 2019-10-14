import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Avatar,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
document.body.style.backgroundColor = "#fafafa";

export default props => {
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  console.log(values);
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ height: "90vh" }}
      >
        <Box
          className="fade-in-fwd"
          style={{
            padding: 35,
            boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
            borderRadius: 10,
            backgroundColor: "white"
          }}
        >
          <Grid container justify="center" alignItems="center">
            <Avatar style={{ width: 70, height: 70, backgroundColor: "white" }}>
              <SupervisedUserCircleIcon
                style={{ width: 60, height: 60, color: "#1976d2" }}
              />
            </Avatar>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Typography variant="h6" style={{ marginTop: 15 }}>
              ESTIAM-IO Administration
            </Typography>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Typography style={{ marginTop: 15 }}>
              Connectez-vous pour accéder à la plateforme d'administration
            </Typography>
          </Grid>
          <TextField
            variant="outlined"
            label="Identifiant"
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            fullWidth
            style={{
              marginTop: 20
            }}
          />
          <TextField
            variant="outlined"
            label="Mot de passe"
            value={values.password}
            type={values.showPassword ? "text" : "password"}
            onChange={handleChange("password")}
            fullWidth
            style={{
              marginTop: 20
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Link to="/administration" style={{ textDecoration: "none" }}>
            <Button
              fullWidth
              style={{
                marginTop: 15,
                color: "white",
                backgroundColor: "#1976d2"
              }}
            >
              Connexion
            </Button>
          </Link>
          <Link
            to="/administration/mot-de-passe-oublie"
            style={{ textDecoration: "none" }}
          >
            <Button
              fullWidth
              style={{
                marginTop: 15,
                color: "#1976d2",
                fontWeight: "bold"
              }}
            >
              Mot de passe oublié
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
