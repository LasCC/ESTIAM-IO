import React, { useEffect } from "react";
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
import Routes from "../../../Routes";

export default props => {
  const [values, setValues] = React.useState({
    gender: "homme",
    pays: "",
    numero_rue: "",
    adresse: "",
    departement: "",
    ville: "",
    code_postale: "",
    numero_tel: ""
  });

  const schema = {
    pays: Joi.string().required(),
    numero_rue: Joi.string().required(),
    adresse: Joi.string().required(),
    departement: Joi.string().required(),
    ville: Joi.string().required(),
    code_postale: Joi.string().required(),
    nummero_tel: Joi.string().required()
  };
  const validate = () => {};

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

                <FormControl component="fieldset">
                  <FormLabel component="legend">Civilité</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    onChange={handleChange}
                    value={values.gender}
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
                    required
                    value={values.code_postale}
                    onChange={handleChangeTextField("code_postale")}
                    type="text"
                    margin="normal"
                    inputProps={{
                      "aria-label": "Code postale"
                    }}
                  />
                  <TextField
                    style={{ width: "auto", marginRight: 15 }}
                    variant="outlined"
                    value={values.numero_tel}
                    label="Numéro de téléphone"
                    required
                    onChange={handleChangeTextField("numero_tel")}
                    type="tel"
                    margin="normal"
                    inputProps={{
                      "aria-label": "Numéro de téléphone"
                    }}
                  />
                </form>
                <div>
                  <Link
                    to={Routes.MAILCONFIRMATION}
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
                  <Link
                    to={Routes.PERSONAL_INFO}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
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
                  </Link>
                </div>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
