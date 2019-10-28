import React, { useContext, useState } from "react";
import Joi from "joi-browser";
import Routes from "../../Routes";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Divider,
  Container,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { LoginContext } from "../../contexts/LoginContext";
import NavBar from "./components/NavBar";

export default props => {
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const [values, setValues] = useState({
    email: "",
    emailTouched: false,
    password: "",
    passwordTouched: false,
    submitted: false,
    showPassword: false
  });
  const [errors, setErrors] = useState({});
  const { handleLogin, loginState, httpError } = useContext(LoginContext);
  const schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string()
      .max(255)
      .required(),
    submitted: Joi.boolean(),
    emailTouched: Joi.boolean(),
    passwordTouched: Joi.boolean(),
    showPassword: Joi.boolean()
  };
  //console.log(loginState);
  const validate = () => {
    const result = Joi.validate(values, schema, { abortEarly: false });
    //console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleChange = name => event => {
    let eventTouched = [name].toString() + "Touched";
    setValues({ ...values, [name]: event.target.value, [eventTouched]: true });
  };
  const handleReset = () => {
    setValues({
      email: "",
      password: ""
    });
  };
  const handleSubmit = () => {
    const errors = validate();
    setValues({ ...values, submitted: true });
    setErrors(errors || {});
    //console.log(errors);
    if (errors) return;
    handleLogin({ email: values.email, password: values.password });
    handleReset();
  };
  //console.log(values);
  const emailerror =
    httpError.clientError ||
    (errors.hasOwnProperty("email") && values.submitted)
      ? "#f00"
      : "";
  const passworderror =
    httpError.clientError ||
    (errors.hasOwnProperty("password") && values.submitted)
      ? "#f00"
      : "";
  const LoginErrorComponent = (
    <Typography variant="subtitle2" color="error" className="shake-horizontal">
      Adresse email ou mot de passe incorrect
    </Typography>
  );
  const ServerErrorComponent = (
    <Typography variant="subtitle2" color="error" className="shake-horizontal">
      Connexion au serveur echoué (erreur 500)
    </Typography>
  );

  return (
    <Container maxWidth="lg">
      <NavBar />
      <Box css={{ height: "90vh" }}>
        <Grid container spacing={0}>
          <Grid item xs lg={6} md={6} sm={12}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 35
              }}
              css={{ height: "100%" }}
            >
              <div className="fade-in-fwd">
                <Typography
                  variant="h3"
                  style={{ fontWeight: "bold", color: "#004080" }}
                >
                  <LockOpenIcon
                    className="iconlogin"
                    style={{ marginRight: 10 }}
                  />
                  Connexion
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  style={{ marginTop: 10 }}
                >
                  Merci de bien vouloir mettre vos informations pour pouvoir
                  accéder à l'application
                </Typography>
                <Divider style={{ marginTop: 15, marginBottom: 15 }} />
                {httpError.clientError && LoginErrorComponent}
                {values.submitted &&
                  (emailerror || passworderror) &&
                  LoginErrorComponent}
                {httpError.serverError && ServerErrorComponent}
                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 10
                  }}
                >
                  Identifiant
                </Typography>
                <TextField
                  variant="outlined"
                  label="Adresse email"
                  value={values.email}
                  onChange={handleChange("email")}
                  type="email"
                  fullWidth
                  error={emailerror}
                  style={{
                    marginTop: 20
                  }}
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
                  value={values.password}
                  fullWidth
                  type={values.showPassword ? "text" : "password"}
                  error={passworderror}
                  style={{ marginTop: 20 }}
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
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSubmit}
                  style={{
                    marginTop: 25,
                    color: "white",
                    backgroundColor: "rgb(0, 64, 128)"
                  }}
                >
                  Se connecter
                </Button>
                <Button variant="outlined" style={{ marginTop: 10 }} fullWidth>
                  <Link
                    to={Routes.REGISTER}
                    style={{ color: "rgb(0, 64, 128)", textDecoration: "none" }}
                  >
                    Vous n'avez pas de compte ?
                  </Link>
                </Button>
                <Divider style={{ marginTop: 25, marginBottom: 15 }} />
                <Link
                  to={Routes.PASSWORD_RESET}
                  style={{ color: "rgb(0, 64, 128)", textDecoration: "none" }}
                >
                  <Typography
                    variant="subtitle2"
                    style={{ fontStyle: "italic" }}
                  >
                    Mot de passe oublié?
                  </Typography>
                </Link>
                <Link
                  to={Routes.USER_RESET}
                  style={{ color: "rgb(0, 64, 128)", textDecoration: "none" }}
                >
                  <Typography
                    variant="subtitle2"
                    style={{ fontStyle: "italic" }}
                  >
                    Nom d'utilisateur oublié ?
                  </Typography>
                </Link>
              </div>
            </Box>
          </Grid>
          <Grid item xs lg={6} md={6} sm={12}>
            <Box
              display={{
                xs: "none",
                sm: "none",
                lg: "block",
                md: "block",
                xl: "block"
              }}
              alignItems="flex-end"
              style={{
                backgroundImage: `url(https://i.imgur.com/8d2H5Ww.png)`,
                backgroundPosition: "center",
                padding: 35
              }}
              css={{ height: "100%", display: "flex" }}
            >
              <Box
                display="flex"
                alignItems="center"
                style={{ marginBottom: 15 }}
              >
                <ChatBubbleOutlineIcon
                  style={{
                    color: "white",
                    height: 35,
                    width: 35,
                    marginRight: 10
                  }}
                />
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  Le saviez-vous ?
                </Typography>
              </Box>
              <Typography variant="subtitle2" style={{ color: "white" }}>
                Éstiam prépare à des titres enregistrés par l'État au Répertoire
                national des certifications professionnelles (RNCP). Éstiam
                propose 3 Spécialisations technologiques et 1 MBA, des parcours
                conçus autour des technologies en demande et en émergence en
                entreprise.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
