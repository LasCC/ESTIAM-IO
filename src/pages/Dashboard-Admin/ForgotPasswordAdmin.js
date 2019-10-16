import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Avatar
} from "@material-ui/core";
import Routes from "../../Routes";
import { Link } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
document.body.style.backgroundColor = "#fafafa";

export default props => {
  const [values, setValues] = useState({
    email_forgot_password: ""
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
            <Avatar
              style={{ width: 70, height: 70, backgroundColor: "#1976d2" }}
            >
              <SendIcon style={{ width: 40, height: 40 }} />
            </Avatar>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Typography variant="h6" style={{ marginTop: 15 }}>
              Réinitalisation de mot de passe
            </Typography>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Typography style={{ marginTop: 15 }}>
              Veuillez entrer votre adresse email pour réinitaliser votre mot de
              passe
            </Typography>
          </Grid>
          <TextField
            variant="outlined"
            label="Adresse email"
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            fullWidth
            style={{
              marginTop: 20
            }}
            autoComplete="current-password"
          />
          <Link
            to={Routes.ADMIN_DASHBOARD_LOGIN}
            style={{ textDecoration: "none" }}
          >
            <Button
              fullWidth
              style={{
                marginTop: 15,
                color: "white",
                backgroundColor: "#1976d2"
              }}
            >
              Retour
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
