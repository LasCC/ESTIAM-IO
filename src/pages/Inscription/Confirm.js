import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Snackbar,
  IconButton,
  Box,
  Container
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
    code: ""
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
                  Confirmation
                </Typography>
                <Typography style={{ color: "#02B875", fontWeight: "bold" }}>
                  Un code de confirmation vous a été envoyé dans votre boîte de
                  réception
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleClick}
                  fullWidth
                  style={{
                    marginTop: 10,
                    color: "#004080",
                    borderColor: "#004080"
                  }}
                >
                  Renvoyer le code de confirmation
                </Button>
                <Snackbar
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  ContentProps={{
                    "aria-describedby": "message-id"
                  }}
                  message={<span id="message-id">Code envoyé</span>}
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
                <Typography
                  variant="h5"
                  style={{
                    marginTop: 20,
                    color: "#004080",
                    fontWeight: "bold"
                  }}
                >
                  Code de confirmation
                </Typography>
                <TextField
                  variant="outlined"
                  label="Code de confirmation"
                  onChange={handleChange("code")}
                  fullWidth
                  required
                  type="text"
                  placeholder="OCB8s.Ztagl58BK83LyIV24Smd6Ken7in8f"
                  style={{ marginTop: 20 }}
                />
                <div style={{ marginTop: 20 }}>
                  <Link to="/inscription" style={{ textDecoration: "none" }}>
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
                  <Link to="/renseignement" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      style={{
                        backgroundColor: "#004080",
                        color: "white"
                      }}
                    >
                      Confirmer l'inscription
                    </Button>
                  </Link>
                </div>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
