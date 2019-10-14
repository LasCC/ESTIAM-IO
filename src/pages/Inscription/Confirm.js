import React, { useContext, useState } from "react";
import Joi from "joi-browser";
import { LoginContext } from "../../contexts/LoginContext";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Container
} from "@material-ui/core";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { Link, withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import NavBar from "./components/NavBar";

const Confirm = props => {
  const schema = {
    secretCode: Joi.string()
      .min(35)
      .max(35)
      .required(),
    submitted: Joi.boolean()
  };
  const validate = () => {
    const result = Joi.validate(values, schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  const { loginState, mailChecking, checkAuth } = useContext(LoginContext);
  // if ((loginState.isActive && loginState.isLogged) || !loginState.hasRegistred)
  //   return props.history.push("/");
  console.log(checkAuth());
  const InvalidCodeErrorComponent = (
    <Typography variant="subtitle1" color="error" className="shake-horizontal">
      Code invalide
    </Typography>
  );
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value.trim() });
  };
  const [values, setValues] = useState({
    secretCode: ""
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = () => {
    console.log("submitted ...");
    const error = validate();
    setErrors(error || {});
    setValues({ ...values, submitted: true });
    console.log(error);
    if (error) return;
    mailChecking({ secretCode: values.secretCode });
  };
  console.log(values);
  return (
    <Container
      maxWidth="lg"
      className="BlueContainer"
      style={{ backgroundColor: "#0099E6" }}
    >
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
                  réception {loginState.email}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => {
                    store.addNotification({
                      title: "Code de confirmation",
                      showIcon: true,
                      message: "Votre code de confirmation à bien été envoyé",
                      type: "default", // 'default', 'success', 'info', 'warning'
                      container: "bottom-left", // where to position the notifications
                      animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
                      animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
                      dismiss: {
                        duration: 5000
                      }
                    });
                  }}
                  style={{
                    marginTop: 10,
                    color: "#004080",
                    borderColor: "#004080"
                  }}
                >
                  Renvoyer le code de confirmation
                </Button>
                <Typography
                  value={values.secretCodef}
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
                  onChange={handleChange("secretCode")}
                  fullWidth
                  value={values.code}
                  required
                  error={
                    errors.hasOwnProperty("secretCode") && values.submitted
                  }
                  type="text"
                  placeholder="OCB8s.Ztagl58BK83LyIV24Smd6Ken7in8f"
                  style={{ marginTop: 20 }}
                />
                {errors.hasOwnProperty("secretCode") &&
                  InvalidCodeErrorComponent}
                <div style={{ marginTop: 20 }}>
                  {!loginState.isLogged && (
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
                  )}
                  <Button
                    variant="outlined"
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: "#004080",
                      color: "white"
                    }}
                  >
                    Confirmer l'inscription
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

export default withRouter(Confirm);
