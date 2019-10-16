import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Snackbar,
  IconButton,
  Container
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import NavBar from "./components/NavBar";

export default props => {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [values, setValues] = React.useState({
    adresse_mail: "",
    phone_number: ""
  });
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
              backgroundImage: `url(https://i.imgur.com/okouGrD.png)`,
              backgroundPosition: "right",
              height: "70vh",
              backgroundColor: "white"
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
              <Typography
                variant="h4"
                style={{
                  color: "#004080",
                  fontWeight: "bold",
                  marginBottom: 15
                }}
              >
                Réinitialisation
              </Typography>
              <Typography style={{ color: "#02B875", fontWeight: "bold" }}>
                Un code de réinitialisation vous a été envoyé dans votre boîte
                de réception
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleClick}
                style={{ color: "#004080", marginTop: 10 }}
              >
                Renvoyer le code de réinitialisation
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={
                  <span id="message-id">
                    <Box display="flex" alignContent="center">
                      <DoneIcon />
                      <Typography
                        variant="subtitle2"
                        style={{ marginLeft: 10 }}
                      >
                        Email de réinitialisation envoyé
                      </Typography>
                    </Box>
                  </span>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
              <div className="fade-in-fwd">
                <TextField
                  variant="outlined"
                  label="Adresse email"
                  onChange={handleChange("adresse_mail")}
                  fullWidth
                  required
                  width={800}
                  type="mail"
                  style={{ marginTop: 20 }}
                />
                <TextField
                  variant="outlined"
                  label="Numéro de téléphone"
                  onChange={handleChange("phone_number")}
                  fullWidth
                  required
                  width={800}
                  type="phone"
                  style={{ marginTop: 20 }}
                />
                <div style={{ marginTop: 20 }}>
                  <Link to="/connexion" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      style={{
                        marginRight: 15,
                        color: "#004080"
                      }}
                    >
                      Retour
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: "#004080"
                    }}
                  >
                    Réinitialiser
                  </Button>
                </div>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
