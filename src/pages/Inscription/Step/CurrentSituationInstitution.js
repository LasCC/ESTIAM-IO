import React from "react";
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

export default props => {
  const [values, setValues] = React.useState({
    nom_etablissement: "",
    pays_etablissement: "",
    numero_rue_etablissement: "",
    adresse_etablissement: "",
    departement_etablissement: "",
    ville_etablissement: ""
  });
  const pays = require("../../../data/pays.json");
  const departement =
    values.pays_etablissement === "France"
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
                  Situation actuelle
                </Typography>

                <Typography
                  variant="h5"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginTop: 15
                  }}
                >
                  Etablissement
                </Typography>

                <form autoComplete="on">
                  <TextField
                    style={{ marginRight: 15 }}
                    variant="outlined"
                    onChange={handleChangeTextField("nom_etablissement")}
                    label="Nom de l'établissement"
                    placeholder="Gustave EIFFEL"
                    type="text"
                    margin="normal"
                    inputProps={{ "aria-label": "Nom de votre établissement" }}
                  />
                  <FormControl
                    variant="outlined"
                    style={{ minWidth: 210, marginRight: 15 }}
                    margin="normal"
                  >
                    <InputLabel
                      htmlFor="paysetablissement"
                      required
                      ref={inputLabel}
                    >
                      Pays de l'établissement
                    </InputLabel>
                    <Select
                      value={values.pays_etablissement}
                      onChange={handleChange}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "pays_etablissement",
                        "aria-label": "Pays de l'établissement"
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
                    style={{ marginRight: 15, minWidth: 200 }}
                    variant="outlined"
                    onChange={handleChangeTextField("numero_rue_etablissement")}
                    label="Numéro de rue"
                    placeholder=""
                    type="number"
                    margin="normal"
                    inputProps={{
                      "aria-label": "Numéro de rue",
                      min: 0,
                      max: 500
                    }}
                  />
                  <TextField
                    style={{ marginRight: 15 }}
                    variant="outlined"
                    onChange={handleChangeTextField("adresse_etablissement")}
                    label="Adresse"
                    placeholder=""
                    type="text"
                    margin="normal"
                    inputProps={{ "aria-label": "Adresse de l'etablissement" }}
                  />
                  <FormControl
                    variant="outlined"
                    style={{ minWidth: 210, marginRight: 15 }}
                    margin="normal"
                  >
                    <InputLabel
                      htmlFor="departementetablissement"
                      required
                      ref={inputLabel}
                    >
                      Département
                    </InputLabel>
                    <Select
                      value={values.departement_etablissement}
                      onChange={handleChange}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "departement_etablissement",
                        "aria-label": "Département"
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
                    onChange={handleChangeTextField("ville_etablissement")}
                    label="Ville de l'établissement"
                    type="text"
                    margin="normal"
                    inputProps={{ "aria-label": "Ville de l'établissement" }}
                  />
                </form>
                <div>
                  <Link
                    to="/situation-actuelle"
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
                    to="/situation-actuelle/fin"
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
