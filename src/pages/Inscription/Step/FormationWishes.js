import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Container
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";
import Routes from "../../../Routes";

export default props => {
  const [values, setValues] = React.useState({
    annee_demandee: "",
    specialisation: ""
  });
  const handleChange = event => {
    /*    if(values.annee_demandee.split(" ")[0] !== "4th")
    setValues(oldValues => ({specialisation : ""}))  TO FIX LATER*/
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  console.log(values);
  const radiologic =
    values.annee_demandee === "1st year" ||
    values.annee_demandee === "2nd year" ||
    values.annee_demandee === "3rd year" ||
    values.annee_demandee === "";
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
                Classe demandée
              </Typography>

              <FormControl component="fieldset">
                <FormHelperText>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.estiam.education/l-ecole-pourquoi-etudier-a-estiam/cursus-specialisations/"
                    style={{
                      textDecoration: "none",
                      color: "#004080",
                      fontWeight: "bold"
                    }}
                  >
                    En savoir plus sur les cursus métier
                  </a>
                </FormHelperText>
                <RadioGroup
                  aria-label="gender"
                  name="annee_demandee"
                  onChange={handleChange}
                  value={values.name}
                >
                  <FormControlLabel
                    value="1st year"
                    control={<Radio color="primary" />}
                    label="1ère année"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="2nd year"
                    control={<Radio color="primary" />}
                    label="2ème année"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="3rd year"
                    control={<Radio color="primary" />}
                    label="3ème année"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="4th année Master of Science"
                    control={<Radio color="primary" />}
                    label="4ème année Master of Science"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="4th MBA Data Solution Architect & NWoW"
                    control={<Radio color="primary" />}
                    label="4ème année MBA Data Solution Architect & NWoW"
                    labelPlacement="end"
                  />
                  <FormHelperText>
                    <strong>Attention</strong>, l’admission en 5ᵉ année n’est
                    pas possible pour les étudiants n’ayant pas d’abord effectué
                    leur 4ᵉ année à Éstiam.
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
                Spécialisation
              </Typography>

              <FormControl component="fieldset">
                <FormHelperText>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.estiam.education/l-ecole-pourquoi-etudier-a-estiam/cursus-specialisations/"
                    style={{
                      textDecoration: "none",
                      color: "#004080",
                      fontWeight: "bold"
                    }}
                  >
                    En savoir plus sur les cursus métier
                  </a>
                </FormHelperText>
                <RadioGroup
                  aria-label="gender"
                  name="specialisation"
                  onChange={handleChange}
                  value={values.name}
                >
                  <FormControlLabel
                    disabled={radiologic}
                    value="Cybersecurity, Cloud, Systems & Networks"
                    control={<Radio color="primary" />}
                    label="Cybersecurity, Cloud, Systems & Networks"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    disabled={radiologic}
                    value="Big Data & Business Intelligence"
                    control={<Radio color="primary" />}
                    label="Big Data & Business Intelligence"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    disabled={radiologic}
                    value="Web & Mobile Développment"
                    control={<Radio color="primary" />}
                    label="Web & Mobile Développment"
                    labelPlacement="end"
                  />
                </RadioGroup>
                <FormHelperText>
                  <strong>Attention</strong>, les spécialisations sont réservées
                  pour les étudiants en 4ème année.
                </FormHelperText>
              </FormControl>
              <div>
                <Link
                  to={Routes.CURRENT_SITUATION_END}
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
                <Link
                  to={Routes.WISHES_CAMPUS}
                  style={{ textDecoration: "none" }}
                >
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
