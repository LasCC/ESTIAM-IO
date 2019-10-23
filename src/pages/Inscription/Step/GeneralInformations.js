import React, { useEffect, useContext, useState } from "react";
import Joi from "joi-browser";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Container
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";
import { Candidature } from "../../../contexts/CandidatureContext";
import MuiPhoneNumber from "material-ui-phone-number";
import Routes from "../../../Routes";

export default props => {
  const { updateDossier } = useContext(Candidature);
  const [values, setValues] = useState({
    genre: "homme",
    pays: "",
    numero_rue: "",
    adresse: "",
    departement: "",
    ville: "",
    code_postale: "",
    numero_tel: ""
  });
  const [errors, setErrors] = useState({});

  const schema = {
    genre: Joi.string().required(),
    pays: Joi.string().required(),
    numero_rue: Joi.string().required(),
    adresse: Joi.string().required(),
    departement: Joi.string().required(),
    ville: Joi.string().required(),
    code_postale: Joi.string().required(),
    numero_tel: Joi.string().required(),
    submitted: Joi.boolean()
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

  const pays = require("../../../data/pays.json");
  const departement =
    values.pays === "France"
      ? require("../../../data/departement.json")
      : ["99-Autre"];
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChangeTextField = name => event => {
    if (name === "code_postale") {
      const pattern = new RegExp(/^$|^[0-9]{1,7}$/);
      const isWellformated = pattern.test(event.target.value);
      if (!isWellformated) return;
    } else if (name === "ville") {
      const pattern = new RegExp(/^$|^[a-zA-Z ]+$/);
      const isWellformated = pattern.test(event.target.value);
      if (!isWellformated) return;
    } else if (name === "numero_tel") {
      console.log("here");
      const pattern = new RegExp(/^$|^[0-9]{1,14}$/);
      const isWellformated = pattern.test(event.target.value);
      console.log(!isWellformated);
      if (!isWellformated) return;
    }
    setValues({ ...values, [name]: event.target.value });
  };
  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  const handleNextStep = e => {
    const errors = validate();
    console.log(errors);
    setValues({ ...values, submitted: true });
    setErrors(errors || {});
    if (errors) return;
    let dossier = JSON.parse(localStorage.getItem("dossier"));
    console.log("dossier", dossier);
    dossier.candidat.informations = values;
    localStorage.setItem("dossier", JSON.stringify(dossier));
    return props.history.push(Routes.PERSONAL_INFO);
  };
  console.log(values);

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
                <Box
                  display={{
                    xs: "none",
                    sm: "none",
                    lg: "block",
                    md: "block",
                    xl: "block"
                  }}
                >
                  <Box
                    style={{
                      display: "grid",
                      marginLeft: 50
                    }}
                  >
                    <ul className="progressbar">
                      <li className="active">
                        <Typography variant="subtitle2">
                          Renseignement
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">
                          Informations personnelles
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">Fin</Typography>
                      </li>
                    </ul>
                  </Box>
                </Box>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Civilité</FormLabel>
                  <RadioGroup
                    aria-label="genre"
                    name="genre"
                    onChange={handleChange}
                    value={values.genre}
                  >
                    <FormControlLabel
                      value="homme"
                      control={<Radio color="primary" />}
                      label="Homme"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="femme"
                      control={<Radio color="primary" />}
                      label="Femme"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </FormControl>

                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 15
                  }}
                >
                  Adresse
                </Typography>

                <form autoComplete="on">
                  <FormControl
                    variant="outlined"
                    margin="normal"
                    style={{ marginRight: 15, minWidth: 210 }}
                  >
                    <InputLabel
                      ref={inputLabel}
                      htmlFor="paysderesidence"
                      required
                    >
                      Pays de résidence
                    </InputLabel>
                    <Select
                      error={values.submitted && errors.hasOwnProperty("pays")}
                      value={values.pays}
                      onChange={handleChange}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "pays",
                        "aria-label": "Pays de résidence"
                      }}
                    >
                      {pays.map(name => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    style={{ minWidth: 200, marginRight: 15 }}
                    variant="outlined"
                    error={
                      values.submitted && errors.hasOwnProperty("numero_rue")
                    }
                    required
                    value={values.numero_rue}
                    onChange={handleChangeTextField("numero_rue")}
                    label="Numéro de rue"
                    margin="normal"
                    min="0"
                    type="number"
                    inputProps={{
                      "aria-label": "Numéro de rue",
                      min: 0,
                      max: 500
                    }}
                  />
                  <TextField
                    style={{ width: "auto", marginRight: 15 }}
                    variant="outlined"
                    error={values.submitted && errors.hasOwnProperty("adresse")}
                    onChange={handleChangeTextField("adresse")}
                    value={values.adresse}
                    label="Adresse"
                    required
                    type="text"
                    margin="normal"
                    inputProps={{ "aria-label": "Adresse de résidence" }}
                  />
                  <FormControl
                    variant="outlined"
                    style={{ minWidth: 210, marginRight: 15 }}
                    margin="normal"
                  >
                    <InputLabel htmlFor="departement" ref={inputLabel}>
                      Département
                    </InputLabel>
                    <Select
                      value={values.departement}
                      error={
                        values.submitted && errors.hasOwnProperty("departement")
                      }
                      onChange={handleChange}
                      labelWidth={labelWidth}
                      required
                      inputProps={{
                        name: "departement",
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
                    variant="outlined"
                    required
                    onChange={handleChangeTextField("ville")}
                    label="Ville"
                    error={values.submitted && errors.hasOwnProperty("ville")}
                    value={values.ville}
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
                    error={
                      values.submitted && errors.hasOwnProperty("code_postale")
                    }
                    required
                    value={values.code_postale}
                    onChange={handleChangeTextField("code_postale")}
                    type="text"
                    margin="normal"
                    inputProps={{
                      "aria-label": "Code postale"
                    }}
                  />
                  <MuiPhoneNumber
                    defaultCountry={"fr"}
                    margin="normal"
                    variant="outlined"
                    value={values.numero_tel}
                    // onChange={handleChangeTextField("numero_tel")}
                    error={
                      values.submitted && errors.hasOwnProperty("numero_tel")
                    }
                    style={{ width: "auto", marginRight: 15 }}
                  />
                </form>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextStep}
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
