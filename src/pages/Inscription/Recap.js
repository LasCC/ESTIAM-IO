import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Divider,
  Avatar,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import BusinessIcon from "@material-ui/icons/Business";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "./components/RegistedUserNav";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Routes from "../../Routes";

export default props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="lg">
      <RegistedUserNav />
      <Grid container spacing={0}>
        <Grid item xs sm="auto" lg={3} md={3}>
          <Box
            display={{
              xs: "none",
              md: "block",
              lg: "block"
            }}
            style={{
              padding: 25,
              backgroundImage: `url(https://i.imgur.com/7x6wfMR.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "95%",
              backgroundColor: "white"
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
        <Grid item lg={9} md={9}>
          <Box
            display="flex"
            alignItems="center"
            css={{ height: "95%", marginTop: 25 }}
          >
            <Box
              style={{
                padding: 25,
                backgroundColor: "white",
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
                  Récapitulatif
                </Typography>
                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  style={{ marginBottom: 10 }}
                >
                  Cette partie est <strong>importante</strong>, elle permet
                  d'énumérer tous vos choix que vous avez renseigné, veuillez
                  prendre le temps de bien vous relire pour éviter les mauvaises
                  surprises.
                </Typography>
                <Box
                  style={{
                    padding: 15,
                    boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.13)"
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{ color: "#004080", fontWeight: "bold" }}
                  >
                    État Civil
                  </Typography>
                  <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                  <Box display="flex" justifyContent="flex-start">
                    <Box display={{ xs: "none", lg: "block", md: "block" }}>
                      <Avatar
                        src="https://picsum.photos/200/300"
                        style={{ borderRadius: 2, height: 100, width: 100 }}
                      />
                    </Box>
                    <Box display="inline" alignItems="center">
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: 15, marginLeft: 10 }}
                      >
                        Michel Platini
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: 15, marginLeft: 10 }}
                      >
                        Pays de naissance : France
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: 15, marginLeft: 10 }}
                      >
                        Adresse: 12 rue des fleures 75001 Paris
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: 15, marginLeft: 10 }}
                      >
                        Numéro de téléphone : 0602305564
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Situation Actuelle */}
                <Paper
                  style={{
                    padding: 15,
                    marginTop: 25,
                    boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.13)"
                  }}
                  square={true}
                >
                  <Typography
                    variant="h5"
                    style={{ color: "#004080", fontWeight: "bold" }}
                  >
                    Situation Actuelle
                  </Typography>
                  <ExpansionPanel style={{ boxShadow: "none", marginTop: 15 }}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <InfoIcon style={{ marginRight: 10, color: "gray" }} />
                      <Typography>Votre formation actuelle</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Intitulé de votre formation : Etudiant
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Nom de votre formation : BAC S
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Nom de votre formation : Terminale
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Link
                        to={Routes.CURRENT_SITUATION}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="outlined"
                          fullWidth
                          style={{ color: "#004080", borderColor: "#004080" }}
                        >
                          <EditIcon style={{ marginRight: 15 }} />
                          <Typography>Modifier</Typography>
                        </Button>
                      </Link>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <ExpansionPanel style={{ boxShadow: "none" }}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <ApartmentIcon
                        style={{ marginRight: 10, color: "gray" }}
                      />
                      <Typography>Etablissement de votre formation</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Nom de l'établissement : Gustave Eiffel
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Pays de l'établissement : Paris
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        N° de rue : 34
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Adresse : Rue du maine
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Département : Seine-Saint-denis
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Ville : Sevran
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Link
                        to={Routes.CURRENT_SITUATION_PREV_SCHOOL}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="outlined"
                          fullWidth
                          style={{ color: "#004080", borderColor: "#004080" }}
                        >
                          <EditIcon style={{ marginRight: 15 }} />
                          <Typography>Modifier</Typography>
                        </Button>
                      </Link>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Paper>

                {/* Voeux formation */}
                <Paper
                  style={{
                    padding: 15,
                    marginTop: 25,
                    boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.13)"
                  }}
                  square={true}
                >
                  <Typography
                    variant="h5"
                    style={{
                      color: "#004080",
                      fontWeight: "bold",
                      marginBottom: 15
                    }}
                  >
                    Voeux de formation
                  </Typography>
                  <ExpansionPanel style={{ boxShadow: "none" }}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <AssignmentIndIcon
                        style={{ marginRight: 10, color: "gray" }}
                      />
                      <Typography>Voeux de formation</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Classe demandée : 1ère année
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Spécialisation : Pas disponible
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Link
                        to={Routes.WISHES_FORMATION}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="outlined"
                          fullWidth
                          style={{ color: "#004080", borderColor: "#004080" }}
                        >
                          <EditIcon style={{ marginRight: 15 }} />
                          <Typography>Modifier</Typography>
                        </Button>
                      </Link>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <ExpansionPanel style={{ boxShadow: "none" }}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <BusinessIcon
                        style={{ marginRight: 10, color: "gray" }}
                      />
                      <Typography>Campus demandée</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Cursus : Pas disponible
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Choix campus n°1 : Paris 75
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Choix campus n°2 : Saint-Denis 93
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Typography variant="subtitle2">
                        Choix campus n°3 : Lyon 69
                      </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                      <Link
                        to={Routes.WISHES_CAMPUS}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="outlined"
                          fullWidth
                          style={{ color: "#004080", borderColor: "#004080" }}
                        >
                          <EditIcon style={{ marginRight: 15 }} />
                          <Typography>Modifier</Typography>
                        </Button>
                      </Link>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Paper>
                <Box display="flex">
                  <Box flexGrow={1}>
                    <Link
                      to={Routes.UPLOAD_FILE}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="outlined"
                        type="submit"
                        component="label"
                        style={{ color: "#004080", marginTop: 15 }}
                      >
                        Retour
                      </Button>
                    </Link>
                  </Box>
                  <Box>
                    <Button
                      onClick={handleClickOpen}
                      variant="contained"
                      style={{
                        color: "white",
                        backgroundColor: "#004080",
                        marginTop: 15
                      }}
                    >
                      Confirmer votre inscription
                    </Button>
                  </Box>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Êtes-vous sur de bien vouloir confirmer ? "}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Merci de bien vouloir vérifier que toutes vos
                        informations renseignées sont correctes.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="textSecondary">
                        Retour
                      </Button>
                      <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <Button
                          onClick={handleClose}
                          autoFocus
                          style={{ color: "#004080" }}
                        >
                          Confirmer
                        </Button>
                      </Link>
                    </DialogActions>
                  </Dialog>
                </Box>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
