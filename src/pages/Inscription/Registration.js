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
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import NavBar from "./components/NavBar";

export default props => {
  const [errors, setErrors] = useState({ err: "" });
  const handleChange = name => event => {
    if (name === "lastname" || name === "firstname") {
      const pattern = new RegExp(/^$|^[a-zA-Z ]+$/);
      const isWellFormated = pattern.test(event.target.value);
      if (!isWellFormated) return;
    }
    setErrors(validate() || {});
    //console.log(errors);
    setValues({ ...values, [name]: event.target.value });
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

  const { handleRegistration, loginState, httpError } = useContext(
    LoginContext
  );
  //console.log(httpError);

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
    //console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  //console.log(errors);
  const handleSubmit = () => {
    const errors = validate();
    //console.log(errors);
    setErrors(errors || {});
    setValues({ ...values, submitted: true });
    if (errors) return;
    handleRegistration({
      lastName: values.lastname.trim().toUpperCase(),
      firstName:
        values.firstname
          .trim()
          .toUpperCase()
          .charAt(0) + values.firstname.toLowerCase().trim(),
      email: values.email.trim(),
      password: values.password
    });
  };
  const lastNameError =
    errors.hasOwnProperty("lastname") && values.submitted ? "#f00" : "";
  const firstNameError =
    errors.hasOwnProperty("firstname") && values.submitted ? "#f00" : "";
  const emailError =
    errors.hasOwnProperty("email") && values.submitted ? "#f00" : "";
  const passwordError =
    errors.hasOwnProperty("password") && values.submitted ? "#f00" : "";
  const RegistrationErrorComponent = (
    <Typography
      variant="subtitle2"
      color="error"
      className="shake-horizontal"
      style={{ marginTop: 5 }}
    >
      Certains champs n'ont pas été renseigné
    </Typography>
  );

  const PasswordErrormsg = (
    <Typography variant="subtitle2" color="error" className="shake-horizontal">
      Le mot de passe doit contenir au minimum 5 caractères
    </Typography>
  );
  const LoginErrorComponent = (
    <Typography variant="subtitle2" color="error" className="shake-horizontal">
      Adresse email déjà enregistré
    </Typography>
  );
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Box css={{ height: "90vh" }}>
        <Grid container spacing={0}>
          <Grid lg={6} md={6} sm={12}>
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
                Éstiam, ça veut dire : <br />
                École supérieure des technologies de l’information appliquées
                aux métiers
              </Typography>
            </Box>
          </Grid>
          <Grid lg={6} md={6} sm={12}>
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
                  style={{ fontWeight: "bold", color: "rgb(0, 64, 128)" }}
                >
                  <PersonAddIcon
                    className="iconregister"
                    style={{ marginRight: 10 }}
                  />
                  Inscription
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  style={{ marginTop: 10 }}
                >
                  <strong>Attention</strong> : Veuillez entrer une adresse email
                  valide qui vous servira à valider votre compte
                </Typography>
                <Divider style={{ marginTop: 15, marginBottom: 15 }} />
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
                {httpError.status === 409 && LoginErrorComponent}
                <TextField
                  variant="outlined"
                  label="Nom"
                  value={values.lastname}
                  onChange={handleChange("lastname")}
                  required
                  error={values.submitted && errors.hasOwnProperty("lastname")}
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
                  error={
                    (values.submitted && errors.hasOwnProperty("emailError")) ||
                    httpError.status === 409
                  }
                  fullWidth
                  type="email"
                  style={{ marginTop: 20 }}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  error={values.submitted && errors.hasOwnProperty("password")}
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
                  fullWidth
                  onClick={handleSubmit}
                  variant="contained"
                  style={{
                    marginTop: 25,
                    color: "white",
                    backgroundColor: "rgb(0, 64, 128)"
                  }}
                >
                  Créer mon compte
                </Button>
                <Link
                  to={Routes.LOGIN}
                  style={{ color: "rgb(0, 64, 128)", textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    style={{ marginTop: 10, color: "rgb(0, 64, 128)" }}
                    fullWidth
                  >
                    Vous avez déjà un compte ?
                  </Button>
                </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
