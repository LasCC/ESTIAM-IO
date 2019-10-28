import React, { useState, useContext } from "react";
import { Candidature } from "../../../contexts/CandidatureContext";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormHelperText,
  Container
} from "@material-ui/core";
import Joi from "joi-browser";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";
import Routes from "../../../Routes";

export default props => {
  const { updateDossier } = useContext(Candidature);
  const [errors, setErrors] = useState({});
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [values, setValues] = React.useState({
    cursus_formation: "",
    campus_choix_1: "",
    campus_choix_2: "",
    campus_choix_3: "",
    submitted: false
  });
  const schema = {
    cursus_formation: Joi.string()
      .allow("")
      .optional(),
    campus_choix_1: Joi.string().required(),
    campus_choix_2: Joi.string()
      .allow("")
      .optional(),
    campus_choix_3: Joi.string()
      .allow("")
      .optional(),
    submitted: Joi.boolean()
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
    dossier.candidat.voeux = {
      ...dossier.candidat.voeux,
      ...values
    };
    dossier.step[2].done = true;
    localStorage.setItem("dossier", JSON.stringify(dossier));
    //console.log(dossier);
    updateDossier(
      { candidat: dossier.candidat, step: dossier.step },
      Routes.WISHES_END
    );
  };
  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  //console.log(values);
  //console.log(props);
  let campusList = [
    <MenuItem value={"Paris 75 (Porte de Lilas)"}>
      Paris 75 (Porte de Lilas)
    </MenuItem>,
    <MenuItem value={"Saint-Denis 93 (établissement J.B. de La Salle)"}>
      Saint-Denis 93 (établissement J.B. de La Salle)
    </MenuItem>,
    <MenuItem value={"Bourges 18 (établissement J.B. de La Salle)"}>
      Bourges 18 (établissement J.B. de La Salle)
    </MenuItem>,
    <MenuItem value={"Lyon 69 (av. Jean Jaurès, 7ᵉ)"}>
      Lyon 69 (av. Jean Jaurès, 7ᵉ)
    </MenuItem>,
    <MenuItem value={"Metz 57 (établissement Jean XXIII)"}>
      Metz 57 (établissement Jean XXIII)
    </MenuItem>,
    <MenuItem value={"Tarbes 65 (établissement Pradeau-La Sède)"}>
      Tarbes 65 (établissement Pradeau-La Sède)
    </MenuItem>
  ];
  const disabledLogic =
    JSON.parse(localStorage.getItem("dossier")).candidat.voeux
      .annee_demandee !== "4ème MBA Data Solution Architect & NWoW" &&
    JSON.parse(localStorage.getItem("dossier")).candidat.voeux
      .annee_demandee !== "4ème année Master of Science";
  //console.log(disabledLogic);

  return (
    <Container maxWidth="lg">
      <RegistedUserNav />
      <Grid container spacing={0}>
        <Grid item lg={3} md={3}>
          <Box
            style={{
              padding: 25,
              backgroundImage: `url(https://i.imgur.com/7x6wfMR.png)`,
              backgroundPosition: "top",
              height: "100%",
              backgroundColor: "white"
            }}
            display={{ xs: "none", md: "block", lg: "block" }}
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
            style={{ padding: 25, backgroundColor: "white", height: "100%" }}
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
                Voeux de formation
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
                        Voeux de formation
                      </Typography>
                    </li>
                    <li className="active">
                      <Typography variant="subtitle2">
                        Campus demandée
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
                  marginBottom: 15
                }}
              >
                Cursus disponibles
              </Typography>

              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="cursus_formation"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    disabled={disabledLogic}
                    value="Finance"
                    control={<Radio color="primary" />}
                    label="Finance"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    disabled={disabledLogic}
                    value="E-Industries"
                    control={<Radio color="primary" />}
                    label="E-Industries"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    disabled={disabledLogic}
                    value="Digital Médias"
                    control={<Radio color="primary" />}
                    label="Digital Médias"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    disabled={disabledLogic}
                    value="Entreprise Mobile Management"
                    control={<Radio color="primary" />}
                    label="Entreprise Mobile Management"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    disabled={disabledLogic}
                    value="Retail"
                    control={<Radio color="primary" />}
                    label="Retail"
                    labelPlacement="end"
                  />
                  <FormHelperText>
                    <strong>Attention</strong>, les cursus de formation sont
                    exclusivement réservé aux 4ème et 5ème année.{" "}
                  </FormHelperText>
                </RadioGroup>
              </FormControl>

              <Typography
                variant="h5"
                style={{
                  color: "#004080",
                  fontWeight: "bold",
                  marginBottom: 15,
                  marginTop: 15
                }}
              >
                Campus
              </Typography>

              <form autoComplete="on">
                <FormControl
                  variant="outlined"
                  style={{ minWidth: 210, marginRight: 15 }}
                  margin="normal"
                >
                  <InputLabel htmlFor="campusEcole" required ref={inputLabel}>
                    Choix n°1
                  </InputLabel>
                  <Select
                    value={values.campus_choix_1}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    error={
                      values.submitted &&
                      errors.hasOwnProperty("campus_choix_1")
                    }
                    inputProps={{
                      name: "campus_choix_1",
                      "aria-label": "Campus choix"
                    }}
                  >
                    {campusList.filter(
                      x =>
                        x.props.value !== values.campus_choix_2 &&
                        x.props.value !== values.campus_choix_3
                    )}
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  style={{ minWidth: 210, marginRight: 15 }}
                  margin="normal"
                >
                  <InputLabel htmlFor="campusEcole" ref={inputLabel}>
                    Choix n°2
                  </InputLabel>
                  <Select
                    value={values.campus_choix_2}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    error={
                      values.submitted &&
                      errors.hasOwnProperty("campus_choix_2")
                    }
                    inputProps={{
                      name: "campus_choix_2",
                      "aria-label": "Campus choix"
                    }}
                  >
                    {campusList.filter(
                      x =>
                        x.props.value !== values.campus_choix_1 &&
                        x.props.value !== values.campus_choix_3
                    )}
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  style={{ minWidth: 210, marginRight: 15 }}
                  margin="normal"
                >
                  <InputLabel htmlFor="campusEcole" ref={inputLabel}>
                    Choix n°3
                  </InputLabel>
                  <Select
                    value={values.campus_choix_3}
                    onChange={handleChange}
                    error={
                      values.submitted &&
                      errors.hasOwnProperty("campus_choix_3")
                    }
                    labelWidth={labelWidth}
                    inputProps={{
                      name: "campus_choix_3",
                      "aria-label": "Campus choix"
                    }}
                  >
                    {campusList.filter(
                      x =>
                        x.props.value !== values.campus_choix_1 &&
                        x.props.value !== values.campus_choix_2
                    )}
                  </Select>
                </FormControl>
                <FormHelperText>
                  <strong>Attention</strong>, vous pouvez choisir jusqu'à 3
                  campus en indiquant votre ordre de préférence, votre{" "}
                  <strong>Choix 1</strong> s'occupera de votre admission.
                </FormHelperText>
              </form>
              <div>
                <Link
                  to={Routes.WISHES_FORMATION}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      marginTop: 25,
                      marginRight: 15,
                      color: "#004080"
                    }}
                  >
                    Retour
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextStep}
                  style={{
                    marginTop: 25,
                    color: "white",
                    backgroundColor: "#004080"
                  }}
                >
                  Continuer
                </Button>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
