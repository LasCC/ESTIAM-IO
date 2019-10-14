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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
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
  const { handleLogin, loginState } = useContext(LoginContext);
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
  console.log(loginState);
  const validate = () => {
    const result = Joi.validate(values, schema, { abortEarly: false });
    console.log(result);
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
    console.log(errors);
    if (errors) return;
    handleLogin({ email: values.email, password: values.password });
    handleReset();
  };
  console.log(values);
  const emailerror =
    loginState.loginError ||
    (errors.hasOwnProperty("email") && values.submitted)
      ? "#f00"
      : "";
  const passworderror =
    loginState.loginError ||
    (errors.hasOwnProperty("password") && values.submitted)
      ? "#f00"
      : "";
  const LoginErrorComponent = (
    <Typography variant="subtitle2" color="error" className="shake-horizontal">
      Identifiant ou mot de passe incorrect
    </Typography>
  );

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
            <Link to={Routes.HOME} style={{ textDecoration: "none" }}>
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
            style={{ height: "70vh", marginTop: 25 }}
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
                {!errors && loginState.loginError && LoginErrorComponent}
                {values.submitted &&
                  (emailerror || passworderror) &&
                  LoginErrorComponent}
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
                  label="Identifiant ou email"
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
                <>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      marginTop: 20,
                      backgroundColor: "#004080",
                      color: "white"
                    }}
                    onClick={handleSubmit}
                  >
                    Continuer
                  </Button>
                </>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
