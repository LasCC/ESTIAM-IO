import React, { useContext, useState } from "react";
import { AdminDashboardContext } from "../../contexts/AdminDashboardContext";
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
import Routes from "../../Routes";
import { Link } from "react-router-dom";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Joi from "joi-browser";
document.body.style.backgroundColor = "#fafafa";

export default props => {
  const { handleAdminLogin, httpError } = useContext(AdminDashboardContext);
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
    submitted: false
  });
  const schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
    submitted: Joi.boolean().required(),
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

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = () => {
    const errors = validate();
    setValues({ ...values, submitted: true });
    setErrors(errors || {});
    console.log(errors);
    if (errors) return;
    handleAdminLogin(
      { email: values.email, password: values.password },
      Routes.ADMIN_DASHBOARD
    );
  };
  const LoginErrorComponent = httpError.clientError && (
    <Typography
      variant="subtitle2"
      color="error"
      className="shake-horizontal"
      style={{ marginTop: 15 }}
    >
      Identifiant ou mot de passe incorrect
    </Typography>
  );
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
            <Grid container justify="center" alignItems="center">
              {LoginErrorComponent}
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            label="Identifiant"
            value={values.email}
            onChange={handleChange("email")}
            error={
              httpError.clientError ||
              (values.submitted && errors.hasOwnProperty("email"))
            }
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
            error={
              httpError.clientError ||
              (values.submitted && errors.hasOwnProperty("password"))
            }
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

          <Button
            fullWidth
            onClick={handleAdminLogin}
            style={{
              marginTop: 15,
              color: "white",
              backgroundColor: "#1976d2"
            }}
          >
            Connexion
          </Button>

          <Link
            to={Routes.ADMIN_DASHBOARD_FORGOT_PASSWORD}
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
