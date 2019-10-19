import React from "react";
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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";
import Routes from "../../../Routes";

export default props => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [values, setValues] = React.useState({
    cursus_formation: "",
    campus_choix_1: "",
    campus_choix_2: "",
    campus_choix_3: ""
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  console.log(values);
  console.log(props);
  let campusList = [
    <MenuItem value={"Paris"}>Paris 75 (Porte de Lilas)</MenuItem>,
    <MenuItem value={"Saint-Denis"}>
      Saint-Denis 93 (établissement J.B. de La Salle)
    </MenuItem>,
    <MenuItem value={"Bourges"}>
      Bourges 18 (établissement J.B. de La Salle)
    </MenuItem>,
    <MenuItem value={"Lyon"}>Lyon 69 (av. Jean Jaurès, 7ᵉ)</MenuItem>,
    <MenuItem value={"Metz"}>Metz 57 (établissement Jean XXIII)</MenuItem>,
    <MenuItem value={"Trabes"}>
      Tarbes 65 (établissement Pradeau-La Sède)
    </MenuItem>
  ];
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
                    value="finance"
                    control={<Radio color="primary" />}
                    label="Finance"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="e_industries"
                    control={<Radio color="primary" />}
                    label="E-Industries"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="digital_medias"
                    control={<Radio color="primary" />}
                    label="Digital Médias"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="mobile_management"
                    control={<Radio color="primary" />}
                    label="Entreprise Mobile Management"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="retail"
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
                  <InputLabel htmlFor="campusEcole" required ref={inputLabel}>
                    Choix n°2
                  </InputLabel>
                  <Select
                    value={values.campus_choix_2}
                    onChange={handleChange}
                    labelWidth={labelWidth}
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
                  <InputLabel htmlFor="campusEcole" required ref={inputLabel}>
                    Choix n°3
                  </InputLabel>
                  <Select
                    value={values.campus_choix_3}
                    onChange={handleChange}
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
                <Link to={Routes.WISHES_END} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: 25,
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
        </Grid>
      </Grid>
    </Container>
  );
};
