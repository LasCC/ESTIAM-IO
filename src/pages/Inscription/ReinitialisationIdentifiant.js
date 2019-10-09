import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Snackbar,
  IconButton,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import NavBar from "./components/NavBar";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));
export default props => {
  const classes = useStyles();
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
    identifiant: "",
    phone_number: ""
  });
  console.log(values);
  return (
    <>
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
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginBottom: 15
                  }}
                >
                  Réinitialisation
                </Typography>
                <Typography style={{ color: "#02B875", fontWeight: "bold" }}>
                  Un email de réinitialisation vous a été envoyé dans votre
                  boîte de réception
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleClick}
                  style={{ color: "#004080", marginTop: 10 }}
                >
                  Renvoyer le code de réinitialisation
                </Button>
                <TextField
                  variant="outlined"
                  label="Adresse email"
                  onChange={handleChange("adresse_mail")}
                  fullWidth
                  type="text"
                  style={{ marginTop: 20 }}
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  label="Nom d'utilisateur"
                  onChange={handleChange("identifiant")}
                  fullWidth
                  type="text"
                  style={{ marginTop: 20 }}
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  label="Numéro de téléphone"
                  onChange={handleChange("phone_number")}
                  fullWidth
                  type="phone"
                  style={{ marginTop: 20 }}
                  autoComplete="current-password"
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
                    onClick={handleClick}
                    style={{
                      color: "white",
                      backgroundColor: "#004080"
                    }}
                  >
                    Réinitialiser
                  </Button>
                  <Snackbar
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left"
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    ContentProps={{
                      "aria-describedby": "message-id"
                    }}
                    message={
                      <span id="message-id">
                        Email de réinitialisation envoyé
                      </span>
                    }
                    action={[
                      <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                      >
                        <CloseIcon />
                      </IconButton>
                    ]}
                  />
                </div>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
