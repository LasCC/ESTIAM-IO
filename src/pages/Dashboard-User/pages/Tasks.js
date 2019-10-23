import React, { useState, useContext, useEffect } from "react";
import NavBar from "../NavBar";
import Routes from "../../../Routes";
import Task from "./Task";

import {
  Box,
  Paper,
  Typography,
  Container,
  Button,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Candidature } from "../../../contexts/CandidatureContext";
import Loader from "../../../components/Loader";

document.body.style.backgroundColor = "white";
export default props => {
  const { dossier, dataloaded, fetchDossier } = useContext(Candidature);
  useEffect(() => fetchDossier(), []);
  if (!dataloaded) return <Loader />;
  const { step } = JSON.parse(localStorage.getItem("dossier"));
  console.log(step);
  const filteredSteps = step
    .filter(singlestep => !singlestep.done)
    .map(task => task.nom);
  console.log(filteredSteps);
  const pageArray = [
    {
      id: 1,
      title: "Renseignement généraux",
      route: Routes.GENERAL_INFO,
      name: "step1",
      completed: JSON.parse(localStorage.getItem("dossier")).step[0].done
    },
    {
      id: 2,
      title: "Situation actuelle",
      route: Routes.CURRENT_SITUATION,
      name: "step2",
      completed: JSON.parse(localStorage.getItem("dossier")).step[1].done
    },
    {
      id: 3,
      title: "Voeux de formation",
      route: Routes.WISHES_FORMATION,
      name: "step3",
      completed: JSON.parse(localStorage.getItem("dossier")).step[2].done
    },
    {
      id: 4,
      title: "Pièces complementaires",
      route: Routes.UPLOAD_FILE,
      name: "step4",
      completed: JSON.parse(localStorage.getItem("dossier")).step[3].done
    }
  ];
  const Todolists = pageArray
    // .filter(task => filteredSteps.includes(task.name))
    .map(task => (
      <Task
        id={task.id}
        title={task.title}
        route={task.route}
        color={task.color}
        completed={task.completed}
      />
    ));

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Paper
          style={{
            padding: 15,
            boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
            borderRadius: 10
          }}
        >
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Formulaires à compléter
              </Typography>
            </Box>
            <Box p={1}>
              <Link
                to={Routes.DASHBOARD}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#1875F0", color: "white" }}
                >
                  Retour
                </Button>
              </Link>
            </Box>
          </Box>

          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          {Todolists}
        </Paper>
      </Container>
    </>
  );
};

/*
Upload : 
  <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginTop: 25 }}
          >
            Pièces complémentaires
          </Typography>

          <Divider style={{ marginTop: 10, marginBottom: 10 }} />

          <Typography
            variant="subtitle2"
            color="textSecondary"
            style={{ marginTop: 25, marginBottom: 15 }}
          >
            <strong>Formats autorisés :</strong> <br />
            JPG, PDF, PNG (les CV et lettre de motivation peuvent aussi être au
            format Word).
          </Typography>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Vos trois derniers bulletins de notes
          </Typography>

          <Grid>
            <Button
              variant="outlined"
              component="label"
              style={{ color: "#004080" }}
            >
              Choisir un fichier
              <input type="file" style={{ display: "none" }} />
            </Button>
            <Button
              variant="outlined"
              component="label"
              style={{ marginRight: 15, marginLeft: 15, color: "#004080" }}
            >
              Choisir un fichier
              <input type="file" style={{ display: "none" }} />
            </Button>
            <Button
              variant="outlined"
              component="label"
              style={{ color: "#004080" }}
            >
              Choisir un fichier
              <input type="file" style={{ display: "none" }} />
            </Button>
          </Grid>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Votre pièce d'identité (passeport, CNI)
          </Typography>
          <Button
            variant="outlined"
            component="label"
            style={{ color: "#004080" }}
          >
            Choisir un fichier
            <input type="file" style={{ display: "none" }} />
          </Button>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Votre CV
          </Typography>
          <Button
            variant="outlined"
            component="label"
            style={{ color: "#004080" }}
          >
            Choisir un fichier
            <input type="file" style={{ display: "none" }} />
          </Button>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Votre lettre de motivation
          </Typography>
          <Button
            variant="outlined"
            component="label"
            style={{ color: "#004080" }}
          >
            Choisir un fichier
            <input type="file" style={{ display: "none" }} />
          </Button>

          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", marginTop: 25, marginBottom: 15 }}
          >
            Votre photo d'identité
          </Typography>
          <Button
            variant="outlined"
            component="label"
            style={{ color: "#004080" }}
          >
            Choisir un fichier
            <input type="file" style={{ display: "none" }} />
          </Button>
          <Box display="flex" flexDirection="row-reverse">
            <Button
              variant="contained"
              type="submit"
              component="label"
              style={{ color: "white", backgroundColor: "#004080" }}
            >
              Envoyer
            </Button>
          </Box> 
*/
