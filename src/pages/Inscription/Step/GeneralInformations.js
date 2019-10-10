import React from "react";
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
  const pays = require("../../../data/pays.json");
  const departement =
    values.pays === "France"
      ? require("../../../data/departement.json")
      : ["99-Autre"];
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChangeTextField = name => event => {
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
              height: "90%",
              backgroundColor: "#004080"
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
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
                    label="Adresse"
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
                    onChange={handleChangeTextField("ville")}
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
                    label="Numéro de téléphone"
                    onChange={handleChangeTextField("numero_tel")}
                    type="tel"
                    margin="normal"
                    inputProps={{
                      "aria-label": "Numéro de téléphone"
                    }}
                  />
                </form>
                <div>
                  <Link to="/confirmation" style={{ textDecoration: "none" }}>
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
                    to="/renseignement/informations-personnelles"
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
