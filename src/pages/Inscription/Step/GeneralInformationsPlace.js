import React, { useState, useContext } from "react";
import { Candidature } from "../../../contexts/CandidatureContext";
import Joi from "joi-browser";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Container
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Routes from "../../../Routes";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

export default props => {
  const { updateDossier } = useContext(Candidature);
  const schema = {
    date_naissance: Joi.date(),
    nationalite_naissance: Joi.string().required(),
    pays_naissance: Joi.string().required(),
    departement_naissance: Joi.string().required(),
    ville_naissance: Joi.string().required(),
    code_postale_naissance: Joi.string().required(),
    submitted: Joi.boolean()
  };
  const [values, setValues] = useState({
    date_naissance: "",
    nationalite_naissance: "",
    pays_naissance: "",
    departement_naissance: "",
    ville_naissance: "",
    code_postale_naissance: ""
  });
  const [errors, setErrors] = useState({});
  const pays = require("../../../data/pays.json");
  const departement =
    values.pays_naissance === "France"
      ? require("../../../data/departement.json")
      : ["99-Autre"];
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [selectedDate, setSelectedDate] = useState(moment());
  const handleDateChange = date => {
    setSelectedDate(date);
    setValues({ ...values, date_naissance: date });
  };
  const handleChangeTextField = name => event => {
    if (name === "nationalite_naissance" || name === "ville_naissance") {
      const pattern = new RegExp(/^$|^[A-Za-z ]+$/);
      const isWellFormated = pattern.test(event.target.value);

      if (!isWellFormated) return;
    } else if (name === "code_postale_naissance") {
      const pattern = new RegExp(/^$|^[0-9]{1,7}$/);
      const isWellFormated = pattern.test(event.target.value);
      if (!isWellFormated) return;
    }
    setValues({ ...values, [name]: event.target.value });
  };
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
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

  const handleSubmit = e => {
    const errors = validate();
    console.log(errors);
    setValues({ ...values, submitted: true });
    setErrors(errors || {});
    if (errors) return;
    let dossier = JSON.parse(localStorage.getItem("dossier"));
    dossier.candidat.informations = {
      ...dossier.candidat.informations,
      ...values
    };
    dossier.step[0].done = true;
    localStorage.setItem("dossier", JSON.stringify(dossier));
    console.log(dossier);
    updateDossier(
      { candidat: dossier.candidat, step: dossier.step },
      Routes.END_INFO
    );
  };

  return (
    <Container maxWidth="lg">
      <RegistedUserNav />
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
              backgroundImage: `url(https://i.imgur.com/7x6wfMR.png)`,
              backgroundPosition: "top",
              height: "90%",
              backgroundColor: "white"
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
            css={{ height: "90%", marginTop: 25 }}
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
                  Renseignements
                </Typography>

                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 15
                  }}
                >
                  Informations personnelles
                </Typography>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{ marginRight: 15 }}
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    margin="normal"
                    required
                    error={
                      values.submitted &&
                      errors.hasOwnProperty("date_naissance")
                    }
                    id="date-picker-inline"
                    label={!values.date_naissance ? "Date de naissance" : ""}
                    value={values.date_naissance}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "date de naissance"
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  style={{ marginRight: 15 }}
                  variant="outlined"
                  required
                  error={
                    values.submitted &&
                    errors.hasOwnProperty("nationalite_naissance")
                  }
                  onChange={handleChangeTextField("nationalite_naissance")}
                  value={values.nationalite_naissance}
                  label="Nationalité"
                  type="text"
                  margin="normal"
                  inputProps={{
                    "aria-label": "Nationalité"
                  }}
                />

                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 15
                  }}
                >
                  Lieu de naissance
                </Typography>

                <form autoComplete="on">
                  <FormControl
                    variant="outlined"
                    style={{ minWidth: 210, marginRight: 15 }}
                    margin="normal"
                  >
                    <InputLabel
                      htmlFor="paysdenaissance"
                      required
                      ref={inputLabel}
                    >
                      Pays de naissance
                    </InputLabel>
                    <Select
                      value={values.pays_naissance}
                      onChange={handleChange}
                      error={
                        values.submitted &&
                        errors.hasOwnProperty("pays_naissance")
                      }
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "pays_naissance",
                        "aria-label": "Pays de naissance"
                      }}
                    >
                      {pays.map(name => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    style={{ minWidth: 255, marginRight: 15 }}
                    margin="normal"
                  >
                    <InputLabel htmlFor="departement" required ref={inputLabel}>
                      Département de naissance
                    </InputLabel>
                    <Select
                      value={values.departement_naissance}
                      onChange={handleChange}
                      error={
                        values.submitted &&
                        errors.hasOwnProperty("departement_naissance")
                      }
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "departement_naissance",
                        "aria-label": "Département de résidence"
                      }}
                    >
                      {departement.map(name => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    style={{ marginRight: 15 }}
                    required
                    variant="outlined"
                    onChange={handleChangeTextField("ville_naissance")}
                    value={values.ville_naissance}
                    error={
                      values.submitted &&
                      errors.hasOwnProperty("ville_naissance")
                    }
                    label="Ville"
                    type="text"
                    margin="normal"
                    inputProps={{
                      "aria-label": "Ville"
                    }}
                  />
                  <TextField
                    style={{ marginRight: 15 }}
                    variant="outlined"
                    label="Code postale"
                    required
                    onChange={handleChangeTextField("code_postale_naissance")}
                    value={values.code_postale_naissance}
                    error={
                      values.submitted &&
                      errors.hasOwnProperty("code_postale_naissance")
                    }
                    type="text"
                    margin="normal"
                    inputProps={{
                      "aria-label": "Code postale"
                    }}
                  />
                </form>
                <div>
                  <Link
                    to={Routes.GENERAL_INFO}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="outlined"
                      style={{
                        marginTop: 15,
                        marginRight: 15,
                        color: "#004080"
                      }}
                    >
                      Retour
                    </Button>
                  </Link>

                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: 15,
                      color: "white",
                      backgroundColor: "#004080"
                    }}
                  >
                    Continuer
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
