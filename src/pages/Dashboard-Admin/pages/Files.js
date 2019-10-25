import React, { useContext, useState, useEffect } from "react";
import clsx from "clsx";
import { AdminDashboardContext } from "../../../contexts/AdminDashboardContext";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  Box,
  Avatar,
  Badge,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  Select,
  DialogActions,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  CircularProgress
} from "@material-ui/core";
import Routes from "../../../Routes";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import MenuIcon from "@material-ui/icons/Menu";
import TimelineIcon from "@material-ui/icons/Timeline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");
document.body.style.backgroundColor = "white";

const drawerWidth = 240;
const StyledBadge2 = withStyles(theme => ({
  badge: {
    backgroundColor: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "70%",
      height: "70%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid #44b700",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#1976d2"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default props => {
  const {
    handleLogout,
    candidaturesReady,
    fetchCandidature,
    candidatures,
    updateBackState
  } = useContext(AdminDashboardContext);
  const { firstName, lastName } = JSON.parse(localStorage.getItem("user"));
  const avatarUrl = `https://eu.ui-avatars.com/api/?name=${firstName}+${lastName}&background=fff&color=1875F0&bold=true`;
  const [state, setState] = React.useState({});
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [specificUser, setSpecificUser] = React.useState({});
  useEffect(() => fetchCandidature(), []);

  // Loader chargement des données
  // if (candidaturesReady)
  //   return (
  //     <Box
  //       display="flex"
  //       alignItems="center"
  //       justifyContent="center"
  //       style={{ height: "90vh" }}
  //     >
  //       <CircularProgress style={{ marginRight: 15, color: "#2979ff" }} />
  //       <Typography color="textSecondary">
  //         Chargement des données en cours...
  //       </Typography>
  //     </Box>
  //   );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [values, setValues] = React.useState({
    step_update: ""
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  // console.log(values);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1}>
            <Typography variant="h5" noWrap style={{ fontWeight: "bold" }}>
              Administration Dashboard
            </Typography>
          </Box>
          <Box display={{ xs: "none", lg: "block", sm: "block" }}>
            <StyledBadge2
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              variant="dot"
            >
              <Avatar alt="imageProfile" src={avatarUrl} />
            </StyledBadge2>
          </Box>
          <Box p={2} display={{ xs: "none", lg: "block", sm: "block" }}>
            <Typography>{`${firstName} ${lastName}`}</Typography>
          </Box>
          <Box display={{ xs: "none", lg: "block", sm: "block" }}>
            <Tooltip title="Déconnexion">
              <IconButton onClick={handleLogout}>
                <PowerSettingsNewIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component="nav" aria-labelledby="navbar">
          <Link
            to={Routes.ADMIN_DASHBOARD}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Tooltip title="Accueil">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Accueil" />
              </ListItem>
            </Tooltip>
          </Link>

          <Link
            to={Routes.ADMIN_DASHBOARD_FILES}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Tooltip title="Dossiers">
              <ListItem button>
                <ListItemIcon>
                  <SupervisedUserCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Dossiers" />
              </ListItem>
            </Tooltip>
          </Link>

          <Link
            to={Routes.ADMIN_DASHBOARD_GLOBALVISION}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Tooltip title="Vue d'ensemble">
              <ListItem button>
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary="Vue d'ensemble" />
              </ListItem>
            </Tooltip>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography color="textSecondary">
          Vous pouvez exporter la liste des candidats
        </Typography>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Liste des utilisateurs inscrits
        </Typography>
        <Typography variant="subtitle1">{moment().format("LLLL")}</Typography>
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />

        <MaterialTable
          title="Dossiers complet des utilisateurs inscrits"
          columns={[
            {
              title: "Avatar",
              field: "avatar",
              render: query => (
                <img
                  style={{ height: 60, width: 60, borderRadius: "50%" }}
                  src={`data:image;base64, ${query.candidat.photo_identitee}`}
                  alt="avatar"
                />
              )
            },
            { title: "Nom", field: "candidat.nom" },
            { title: "Prénom", field: "candidat.prenom" },
            {
              title: "Classe demandée",
              field: "candidat.voeux.annee_demandee"
            },
            {
              title: "Campus demandée",
              field: "candidat.voeux.campus_choix_1"
            },
            { title: "Pays", field: "candidat.informations.pays" },
            { title: "Avancement du dossier", field: "nameAdministrationStep" }
          ]}
          data={candidatures}
          // onClick on row >
          detailPanel={query => {
            return (
              <div style={{ padding: 50 }}>
                <Grid container spacing={2}>
                  <Grid item xs lg={6} md={6} sm={12}>
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>
                      Etat Civil de{" "}
                      {`${query.candidat.nom} ${query.candidat.prenom}`}
                      <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Box display={{ xs: "none", lg: "block", md: "block" }}>
                          <Avatar
                            src={`data:image;base64, ${
                              query.candidat.photo_identitee
                            }`}
                            style={{
                              borderRadius: 2,
                              height: 150,
                              width: 150,
                              marginTop: 15
                            }}
                          />
                        </Box>
                        <Box display="inline" style={{ marginTop: 15 }}>
                          <Typography
                            variant="body1"
                            style={{ marginLeft: 10 }}
                          >
                            Pays de naissance :{" "}
                            {query.candidat.informations.pays_naissance}
                          </Typography>
                          <Typography
                            variant="body1"
                            style={{ marginLeft: 10 }}
                          >
                            Adresse :{" "}
                            {`${query.candidat.informations.numero_rue} ${
                              query.candidat.informations.adresse
                            } ${query.candidat.informations.code_postale} ${
                              query.candidat.informations.ville
                            }`}
                          </Typography>
                          <Typography
                            variant="body1"
                            style={{ marginLeft: 10 }}
                          >
                            N° de téléphone :{" "}
                            <strong>
                              {query.candidat.informations.numero_tel}
                            </strong>
                          </Typography>
                        </Box>
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item xs lg={6} md={6} sm={12}>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: "bold",
                        marginTop: 25,
                        marginBottom: 15
                      }}
                    >
                      Situation actuelle de{" "}
                      {`${query.candidat.nom} ${query.candidat.prenom}`}
                    </Typography>
                    <Typography variant="body1">
                      Intitulé de votre formation :{" "}
                      {query.candidat.situation.choix}
                    </Typography>
                    <Typography variant="body1">
                      Nom de votre formation :{" "}
                      {query.candidat.situation.nom_formation}
                    </Typography>
                    <Typography variant="body1">
                      Formation : {query.candidat.situation.formation}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider style={{ marginTop: 20, marginBottom: 10 }} />
                <Grid container spacing={2}>
                  <Grid lg={6} sm={12} md={6}>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: "bold",
                        marginTop: 25,
                        marginBottom: 15
                      }}
                    >
                      Établissement scolaire fréquenté de{" "}
                      {`${query.candidat.nom} ${query.candidat.prenom}`}
                    </Typography>
                    <Typography variant="body1">
                      Nom de l'établissement :{" "}
                      {query.candidat.situation.nom_etablissement}
                    </Typography>
                    <Typography variant="body1">
                      Pays de l'établissement :{" "}
                      {query.candidat.situation.pays_etablissement}
                    </Typography>
                    <Typography variant="body1">
                      N° de rue :{" "}
                      {query.candidat.situation.numero_rue_etablissement}
                    </Typography>
                    <Typography variant="body1">
                      Adresse : {query.candidat.situation.adresse_etablissement}
                    </Typography>
                    <Typography variant="body1">
                      Département :{" "}
                      {query.candidat.situation.departement_etablissement}
                    </Typography>
                    <Typography variant="body1">
                      Ville : {query.candidat.situation.ville_etablissement}
                    </Typography>
                  </Grid>
                  <Grid lg={6} md={6} sm={12}>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: "bold",
                        marginTop: 25,
                        marginBottom: 15
                      }}
                    >
                      Voeux de formation de{" "}
                      {`${query.candidat.nom} ${query.candidat.prenom}`}
                    </Typography>
                    <Typography variant="body1">
                      Classe demandée : {query.candidat.voeux.annee_demandee}
                    </Typography>
                    <Typography variant="body1">
                      Spécialisation :{" "}
                      {query.candidat.voeux.specialisation || "N/A"}
                    </Typography>
                    <Typography variant="body1">
                      Cursus : {query.candidat.voeux.cursus_formation || "N/A"}
                    </Typography>
                    <Typography variant="body1">
                      Choix campus n°1 : {query.candidat.voeux.campus_choix_1}
                    </Typography>
                    <Typography variant="body1">
                      Choix campus n°2 :{" "}
                      {query.candidat.voeux.campus_choix_2 || "N/A"}
                    </Typography>
                    <Typography variant="body1">
                      Choix campus n°3 :{" "}
                      {query.candidat.voeux.campus_choix_3 || "N/A"}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          }}
          onRowClick={(event, query, togglePanel) => togglePanel()}
          actions={[
            {
              icon: "check",
              tooltip: "Validé l'inscription",
              onClick: (event, query) => {
                updateBackState({ id: query._id, step: 4 });
                alert(
                  "Vous avez validé l'inscription de " +
                    query.candidat.nom +
                    " " +
                    query.candidat.prenom
                );
              }
            },
            {
              icon: "clear",
              tooltip: "Désapprouver l'inscription",
              onClick: (event, query) => {
                updateBackState({ id: query._id, step: 3 });
                alert(
                  "Vous venez de désapprouver l'inscription de " +
                    query.candidat.nom +
                    " " +
                    query.candidat.prenom
                );
              }
            },
            // {
            //   icon: "todayIcon",
            //   tooltip: "Planifié un rendez-vous",
            //   onClick: (event, query) => {
            //     updateBackState({ id: query._id, step: 2 });
            //     alert(
            //       "Vous venez de planifié un rendez-vous de " +
            //         query.candidat.nom +
            //         " " +
            //         query.candidat.prenom
            //     );
            //   }
            // },
            {
              icon: "dashboardicon",
              tooltip: "Mettre à jour l'utilisateur",
              onClick: (event, query) => {
                handleClickOpen();
                setSpecificUser(query);
                console.log(
                  "Utilisateur sélectionné" +
                    " " +
                    query.candidat.nom +
                    " " +
                    query.candidat.prenom
                );
              }
            }
          ]}
          localization={{
            body: {
              deleteTooltip: "Supprimer",
              editTooltip: "Edit",
              emptyDataSourceMessage: "Aucun utilisateur trouvé",
              editRow: {
                deleteText: "Êtes-vous sur de bien vouloir faire ça ?",
                cancelTooltip: "Annuler",
                saveTooltip: "Confirmer"
              }
            },
            toolbar: {
              exportTitle: "Exporter la liste",
              searchTooltip: "Rechercher un utilisateur",
              exportName: "Exporter au format CSV",
              searchPlaceholder: "Rechercher un utilisateur"
            },
            pagination: {
              labelRowsSelect: "rangées",
              labelDisplayedRows: "{from}-{to} sur {count}",
              firstTooltip: "Première page",
              previousTooltip: "Précédent",
              nextTooltip: "Suivant",
              lastTooltip: "Dernière page",
              toolbarExportTitle: "Exporter"
            }
          }}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            exportFileName: "export_user_dashboard",
            headerStyle: {
              backgroundColor: "#1976d2",
              color: "white"
            }
          }}
        />
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={state.open}
          onClose={handleClose}
        >
          <DialogTitle>Mettre à jour le dossier de l'utilisateur</DialogTitle>
          <DialogContent>
            <form>
              <FormControl style={{ height: "25vh", width: "100%" }}>
                <InputLabel>Veuillez sélectionner une valeur</InputLabel>
                <Select
                  value={values.step_update}
                  onChange={handleChange}
                  inputProps={{
                    name: "step_update"
                  }}
                >
                  <MenuItem value={0}>En cours de traitement</MenuItem>
                  <MenuItem value={1}>Dossier incomplet</MenuItem>
                  <MenuItem value={2}>Rendez-vous planifié</MenuItem>
                  <MenuItem value={3}>Dossier rejeté</MenuItem>
                  <MenuItem value={4}>Dossier validé</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Annuler
            </Button>
            <Button
              onClick={() => {
                updateBackState({
                  id: specificUser._id,
                  step: values.step_update
                });
                console.log(specificUser);
                handleClose();
              }}
              color="primary"
            >
              Confirmer
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </div>
  );
};
