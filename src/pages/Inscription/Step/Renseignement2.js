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
  TextField
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

export default props => {
  const pays = require("../../../data/pays.json");
	const departement = require("../../../data/departement.json");
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [selectedDate, setSelectedDate] = React.useState(moment());
  const handleDateChange = date => {
    setSelectedDate(date);
    console.log(date);
  };
  const [values, setValues] = React.useState({
    date_naissance: "",
    nationalite_naissance: "",
    pays_naissance: "",
    departement_naissance: "",
    ville_naissance: "",
    code_postale_naissance: ""
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
    <>
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
                    id="date-picker-inline"
                    label="Date de naissance"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "date de naissance"
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  style={{ marginRight: 15 }}
                  variant="outlined"
                  onChange={handleChangeTextField("nationalite_naissance")}
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
                    style={{ minWidth: 210, marginRight: 15 }}
                    margin="normal"
                  >
                    <InputLabel htmlFor="departement" required ref={inputLabel}>
                      Département de naissance
                    </InputLabel>
                    <Select
                      value={values.departement_naissance}
                      onChange={handleChange}
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
                    variant="outlined"
                    onChange={handleChangeTextField("ville_naissance")}
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
                    onChange={handleChangeTextField("code_postale_naissance")}
                    type="text"
                    margin="normal"
                    inputProps={{
                      "aria-label": "Code postale"
                    }}
                  />
                </form>
                <div>
                  <Link to="/renseignement" style={{ textDecoration: "none" }}>
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
                    to="/renseignement/fin"
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
    </>
  );
};
