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
              backgroundImage: `url(https://i.imgur.com/okouGrD.png)`,
              backgroundPosition: "right",
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
                    type="text"
                    margin="normal"
                    inputProps={{ "aria-label": "Numéro de rue" }}
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
                      Nom de votre formation
                    </InputLabel>
                    <Select
                      value={values.formation}
                      onChange={handleChange}
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
                  <Link
                    to={Routes.CURRENT_SITUATION_PREV_SCHOOL}
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
