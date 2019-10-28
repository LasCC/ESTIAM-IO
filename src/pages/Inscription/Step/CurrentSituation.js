import React, { useState } from "react";
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
import Routes from "../../../Routes";
import RegistedUserNav from "../components/RegistedUserNav";

export default props => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [values, setValues] = React.useState({
    choix: "",
    nom_formation: "",
    formation: ""
  });
  const [errors, setErrors] = useState({});
  const handleChangeTextField = name => event => {
    if (name === "choix") {
      const pattern = new RegExp(/^$|^[a-zA-Z ]+$/);
      const isWellformated = pattern.test(event.target.value);
      if (!isWellformated) return;
    } else if (name === "nom_formation") {
      const pattern = new RegExp(/^$|^[a-zA-Z ]+$/);
      const isWellformated = pattern.test(event.target.value);
      if (!isWellformated) return;
    } else if (name === "formation") {
      const pattern = new RegExp(/^$|^[a-zA-Z ]+$/);
      const isWellformated = pattern.test(event.target.value);
      //console.log(!isWellformated);
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
  const schema = {
    choix: Joi.string().required(),
    nom_formation: Joi.string().required(),
    formation: Joi.string().required()
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
  const handleNextStep = e => {
    const errors = validate();
    //console.log(errors);
    setValues({ ...values, submitted: true });
    setErrors(errors || {});
    if (errors) return;
    let dossier = JSON.parse(localStorage.getItem("dossier"));
    //console.log("dossier", dossier);
    dossier.candidat.situation = values;
    localStorage.setItem("dossier", JSON.stringify(dossier));
    return props.history.push(Routes.CURRENT_SITUATION_PREV_SCHOOL);
  };
  //console.log(values);
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
              height: "70vh",
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
                  Situation actuelle
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
                          Situation actuelle
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">
                          Établissement
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">Fin</Typography>
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 15
                  }}
                >
                  Votre situation
                </Typography>

                <FormControl
                  variant="outlined"
                  style={{ minWidth: 210, marginRight: 15 }}
                  margin="normal"
                >
                  <InputLabel htmlFor="choix" required ref={inputLabel}>
                    Faites un choix
                  </InputLabel>
                  <Select
                    value={values.choix}
                    onChange={handleChange}
                    error={values.submitted && errors.hasOwnProperty("choix")}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: "choix",
                      "aria-label": "Situation actuelle"
                    }}
                  >
                    <MenuItem value={"Etudiant"}>Etudiant</MenuItem>
                    <MenuItem value={"En emploi"}>En emploi</MenuItem>
                    <MenuItem value={"En recherche d’emploi"}>
                      En recherche d’emploi
                    </MenuItem>
                    <MenuItem value={"Autre"}>Autre</MenuItem>
                  </Select>
                </FormControl>

                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 15
                  }}
                >
                  Formation actuelle
                </Typography>

                <form autoComplete="on">
                  <TextField
                    style={{ marginRight: 15 }}
                    variant="outlined"
                    onChange={handleChangeTextField("nom_formation")}
                    label="Nom de votre formation"
                    placeholder="Bac S"
                    error={
                      values.submitted && errors.hasOwnProperty("nom_formation")
                    }
                    type="text"
                    margin="normal"
                    inputProps={{ "aria-label": "Nom de votre formation" }}
                  />
                  <FormControl
                    variant="outlined"
                    style={{ minWidth: 210, marginRight: 15 }}
                    margin="normal"
                  >
                    <InputLabel
                      htmlFor="nomformation"
                      required
                      ref={inputLabel}
                    >
                      Votre formation
                    </InputLabel>
                    <Select
                      value={values.formation}
                      onChange={handleChange}
                      error={
                        values.submitted && errors.hasOwnProperty("formation")
                      }
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "formation",
                        "aria-label": "Formation"
                      }}
                    >
                      <MenuItem value={"Terminal"}>Terminal</MenuItem>
                      <MenuItem value={"Terminale-BAC"}>
                        Terminale - J'ai déjà le BAC
                      </MenuItem>
                      <MenuItem value={"BAC+1"}>BAC +1</MenuItem>
                      <MenuItem value={"BAC+2"}>BAC +2</MenuItem>
                      <MenuItem value={"BAC+3"}>BAC +3</MenuItem>
                      <MenuItem value={"BAC+4"}>BAC +4</MenuItem>
                      <MenuItem value={"BAC+5"}>BAC +5</MenuItem>
                    </Select>
                  </FormControl>
                </form>
                <div>
                  <Link to={Routes.END_INFO} style={{ textDecoration: "none" }}>
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
                    variant="contained"
                    onClick={handleNextStep}
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
