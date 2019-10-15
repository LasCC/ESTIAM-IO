import React, { useContext, useState } from "react";
import Joi from "joi-browser";
import Routes from "../../Routes";
import { LoginContext } from "../../contexts/LoginContext";
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
  const [errors, setErrors] = useState({ err: "" });
  const handleChange = name => event => {
    if (name === "lastname" || name === "firstname") {
      const pattern = new RegExp("^[a-zA-Z]*$");
      const isWellFormated = pattern.test(event.target.value);
      if (!isWellFormated) return;
    }
    setErrors(validate() || {});
    console.log(errors);
    setValues({ ...values, [name]: event.target.value.trim() });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const [values, setValues] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    submitted: false
  });

  const { handleRegistration, loginState } = useContext(LoginContext);
  console.log(values, handleRegistration);

  const schema = {
    lastname: Joi.string()
      .max(50)
      .required(),
    firstname: Joi.string()
      .max(50)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    submitted: Joi.boolean(),
    showPassword: Joi.boolean()
  };

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
  console.log(errors);
  const handleSubmit = () => {
    const errors = validate();
    console.log(errors);
    setErrors(errors || {});
    setValues({ ...values, submitted: true });
    if (errors) return;
    handleRegistration({
      lastName: values.lastname,
      firstName: values.firstname,
      email: values.email,
      password: values.password
    });
  };
  const lastNameError =
    loginState.loginError ||
    (errors.hasOwnProperty("lastname") && values.submitted)
      ? "#f00"
      : "";
  const firstNameError =
    loginState.loginError ||
    (errors.hasOwnProperty("firstname") && values.submitted)
      ? "#f00"
      : "";
  const emailError =
    loginState.loginError ||
    (errors.hasOwnProperty("email") && values.submitted)
      ? "#f00"
      : "";
  const passwordError =
    loginState.loginError ||
    (errors.hasOwnProperty("password") && values.submitted)
      ? "#f00"
      : "";
  const RegistrationErrorComponent = (
    <Typography variant="subtitle2" color="error" className="shake-horizontal">
      Certains champs n'ont pas été renseigné
    </Typography>
  );

  const PasswordErrormsg = (
    <Typography variant="subtitle2" color="error" className="shake-horizontal">
      Le mot de passe doit contenir au minimum 5 caractères
    </Typography>
  );
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
            <Link to={Routes.HOME} style={{ textDecoration: "none" }}>
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
                {!errors && loginState.loginError && RegistrationErrorComponent}
                {values.submitted &&
                  (lastNameError ||
                    firstNameError ||
                    emailError ||
                    passwordError) &&
                  RegistrationErrorComponent}
                {values.submitted &&
                  errors.hasOwnProperty("password") &&
                  PasswordErrormsg}
                <TextField
                  variant="outlined"
                  label="Nom"
                  value={values.lastname}
                  onChange={handleChange("lastname")}
                  required
                  error={lastNameError}
                  fullWidth
                  type="text"
                  margin="normal"
                  style={{ marginTop: 20 }}
                />
                <TextField
                  variant="outlined"
                  label="Prénom"
                  value={values.firstname}
                  onChange={handleChange("firstname")}
                  required
                  error={firstNameError}
                  type="text"
                  margin="normal"
                  fullWidth
                  style={{ marginTop: 20 }}
                />
                <TextField
                  variant="outlined"
                  value={values.email}
                  label="Email"
                  onChange={handleChange("email")}
                  required
                  error={emailError}
                  fullWidth
                  type="email"
                  style={{ marginTop: 20 }}
                />
                <TextField
                  id="outlined-adornment-password"
                  variant="outlined"
                  fullWidth
                  required
                  error={passwordError}
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

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
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
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
