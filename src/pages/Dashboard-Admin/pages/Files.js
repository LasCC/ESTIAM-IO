import React from "react";
import clsx from "clsx";
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
  Grid
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
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Photo d'identité",
        field: "imageUrl",
        render: rowData => (
          <img
            alt="imageProfile"
            src={rowData.imageUrl}
            style={{ borderRadius: 50, width: 50, height: 50 }}
          />
        )
      },
      { title: "Nom", field: "firstname" },
      { title: "Prénom", field: "lastname" },
      { title: "Campus", field: "choice_1" },
      {
        title: "Pays",
        field: "country"
      },
      {
        title: "Avancement du dossier",
        field: "avancement"
      }
    ],

    data: [
      {
        imageUrl: "https://picsum.photos/200/300",
        firstname: "Mehmet",
        lastname: "Baran",
        country: "France",
        adress: "12 rue des fleures 75001 Paris",
        tel: "0603310775",
        formation: "Etudiant",
        name_formation: "BAC S",
        class_formation: "Terminale",
        name_school: "Lycée Gustave Eiffel",
        country_school: "Pairs",
        number_adress_school: "2",
        adress_school: "Rue du maine",
        department_school: "Seine-Saint-Denis",
        city_school: "Sevran",
        class_whises: "1ère année",
        spe_whises: "Pas disponible",
        cursus_whisies: "Pas disponible",
        choice_1: "Paris 75e",
        choice_2: "Saint-Denis 93",
        choice_3: "Lyon 69",
        avancement: "Dossier incomplet"
      },
      {
        imageUrl: "https://picsum.photos/200/300",
        firstname: "Boubi",
        lastname: "Bouba",
        country: "France",
        adress: "12 rue des fleures 75001 Paris",
        tel: "0603310775",
        formation: "Etudiant",
        name_formation: "BAC S",
        class_formation: "Terminale",
        name_school: "Lycée Gustave Eiffel",
        country_school: "Pairs",
        number_adress_school: "2",
        adress_school: "Rue du maine",
        department_school: "Seine-Saint-Denis",
        city_school: "Sevran",
        class_whises: "1ère année",
        spe_whises: "Pas disponible",
        cursus_whisies: "Pas disponible",
        choice_1: "Saint-Denis 93",
        choice_2: "Lyon 69",
        choice_3: "Paris 75",
        avancement: "Dossier validé"
      }
    ]
  });
  const avatarUrl = `https://eu.ui-avatars.com/api/?name=michel+platini&background=fff&color=1875F0&bold=true`;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
  console.log(values);
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
            <Typography>Michel Platini</Typography>
          </Box>
          <Box display={{ xs: "none", lg: "block", sm: "block" }}>
            <Tooltip title="Déconnexion">
              <IconButton>
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
          title="Dossiers des utilisateurs inscrits"
          columns={state.columns}
          data={state.data}
          detailPanel={rowData => {
            return (
              <div style={{ padding: 50 }}>
                <Grid container spacing={2}>
                  <Grid item xs lg={6} md={6} sm={12}>
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>
                      Etat Civil de {rowData.firstname}{" "}
                      {rowData.lastname.toUpperCase()}
                      <Box display="flex" justifyContent="flex-start">
                        <Box display={{ xs: "none", lg: "block", md: "block" }}>
                          <Avatar
                            src="https://picsum.photos/200/300"
                            style={{
                              borderRadius: 2,
                              height: 150,
                              width: 150,
                              marginTop: 15
                            }}
                          />
                        </Box>
                        <Box display="inline" style={{ marginTop: 15 }}>
                          <Typography style={{ marginLeft: 10 }}>
                            {rowData.firstname} {rowData.lastname.toUpperCase()}
                          </Typography>
                          <Typography style={{ marginLeft: 10 }}>
                            Pays de naissance : {rowData.country}
                          </Typography>
                          <Typography style={{ marginLeft: 10 }}>
                            Adresse : {rowData.adress}
                          </Typography>
                          <Typography style={{ marginLeft: 10 }}>
                            N° de téléphone : {rowData.tel}
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
                      Situation actuelle de {rowData.firstname}{" "}
                      {rowData.lastname.toUpperCase()}
                    </Typography>
                    <Typography>
                      Intitulé de votre formation : {rowData.formation}
                    </Typography>
                    <Typography>
                      Nom de votre formation : {rowData.name_formation}
                    </Typography>
                    <Typography>
                      Classe de votre formation : {rowData.class_formation}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
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
                      Etablissement de {rowData.firstname}{" "}
                      {rowData.lastname.toUpperCase()}
                    </Typography>
                    <Typography>
                      Nom de l'établissement : {rowData.name_school}
                    </Typography>
                    <Typography>
                      Pays de l'établissement : {rowData.country_school}
                    </Typography>
                    <Typography>
                      N° de rue : {rowData.number_adress_school}
                    </Typography>
                    <Typography>Adresse : {rowData.adress_school}</Typography>
                    <Typography>
                      Département : {rowData.department_school}
                    </Typography>
                    <Typography>Ville : {rowData.city_school}</Typography>
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
                      Voeux de formation de {rowData.firstname}{" "}
                      {rowData.lastname.toUpperCase()}
                    </Typography>
                    <Typography>
                      Classe demandée : {rowData.class_whises}
                    </Typography>
                    <Typography>
                      Spécialisation : {rowData.spe_whises}
                    </Typography>
                    <Typography>Cursus : {rowData.cursus_whisies}</Typography>
                    <Typography>
                      Choix campus n°1 : {rowData.choice_1}
                    </Typography>
                    <Typography>
                      Choix campus n°2 : {rowData.choice_2}
                    </Typography>
                    <Typography>
                      Choix campus n°3 : {rowData.choice_3}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          }}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
          actions={[
            {
              icon: "check",
              tooltip: "Validé l'inscription",
              onClick: (event, rowData) =>
                alert(
                  "Vous avez validé l'utilisateur " +
                    rowData.firstname +
                    " " +
                    rowData.lastname
                )
            },
            {
              icon: "clear",
              tooltip: "Désapprouver l'inscription",
              onClick: (event, rowData) =>
                alert(
                  "Vous venez de désapprouver l'inscription de " +
                    rowData.firstname +
                    " " +
                    rowData.lastname
                )
            },
            {
              icon: "dashboardicon",
              tooltip: "Mettre à jour l'utilisateur",
              onClick: (event, rowData) => {
                handleClickOpen();
                console.log(
                  "Utilisateur sélectionné" +
                    " " +
                    rowData.firstname +
                    " " +
                    rowData.lastname
                );
              }
            }
          ]}
          localization={{
            body: {
              deleteTooltip: "Supprimer",
              editTooltip: "Edit",
              emptyDataSourceMessage: "Aucun utilisateurs trouvé",
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
              labelDisplayedRows: "{from}-{to} of {count}",
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
            // exportCsv: (columns, data) => {
            //   // alert(
            //   //   "Faut export tout le bordel y'a" + data.length + " rangées"
            //   // Actuellement il export que les lignes qui il y a sur la page, mais il faut trouver un moyen de tout export d'un coup avec data.lenght
            //   // );
            // },
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
                  <MenuItem value={"Dossier incomplet"}>
                    Dossier incomplet
                  </MenuItem>
                  <MenuItem value={"En cours de traitement"}>
                    En cours de traitement
                  </MenuItem>
                  <MenuItem value={"Rendez-vous planifié"}>
                    Rendez-vous planifié
                  </MenuItem>
                  <MenuItem value={"Dossier rejeté"}>Dossier rejeté</MenuItem>
                  <MenuItem value={"Dossier validé"}>Dossier validé</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Annuler
            </Button>
            <Button onClick={handleClose} color="primary">
              Confirmer
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </div>
  );
};
