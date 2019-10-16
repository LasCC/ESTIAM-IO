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
  Tooltip
} from "@material-ui/core";
import MaterialTable from "material-table";
import Routes from "../../../Routes";
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
    padding: theme.spacing(4)
  }
}));

export default props => {
  const [state, setState] = React.useState({
    columns: [
      { title: "Nom", field: "firstname" },
      { title: "Prénom", field: "lastname" },
      { title: "Campus", field: "campus" },
      {
        title: "Pays",
        field: "city",
        lookup: { 75: "France", 93: "Afrique" }
      }
    ],
    data: [
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Michel",
        lastname: "Platini",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Mehmet",
        lastname: "Baran",
        campus: "Paris",
        city: 75
      },
      {
        firstname: "Zerya Betül",
        lastname: "Baran",
        campus: "Saint-Denis",
        city: 93
      }
    ]
  });
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            <Typography variant="h6" noWrap style={{ fontWeight: "bold" }}>
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
              <Avatar alt="imageProfile" src="https://picsum.photos/200/300" />
            </StyledBadge2>
          </Box>
          <Box p={2} display={{ xs: "none", lg: "block", sm: "block" }}>
            <Typography>Michel Platini</Typography>
          </Box>
          <Box display={{ xs: "none", lg: "block", sm: "block" }}>
            <Link to={Routes.ADMIN_DASHBOARD_LOGIN}>
              <Tooltip title="Déconnexion">
                <IconButton>
                  <PowerSettingsNewIcon style={{ color: "white" }} />
                </IconButton>
              </Tooltip>
            </Link>
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
          Vous pouvez exporter la liste des utilisateurs
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
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  data[data.indexOf(oldData)] = newData;
                  setState({ ...state, data });
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  data.splice(data.indexOf(oldData), 1);
                  setState({ ...state, data });
                }, 600);
              })
          }}
          detailPanel={rowData => {
            return (
              <div style={{ padding: 50 }}>
                <Typography variant="h6">
                  Etat Civil de {state.data[0].firstname}{" "}
                  {state.data[0].lastname}
                </Typography>
                <Typography>Michel Platini</Typography>
                <Typography>Pays de naissance : France</Typography>
                <Typography>
                  Adresse : 12 rue des fleures 75001 Paris
                </Typography>
                <Typography>N° de téléphone : 0603109750</Typography>

                <Divider style={{ marginTop: 15, marginBottom: 15 }} />

                <Typography variant="h6">
                  Situation actuelle de {state.data[0].firstname}{" "}
                  {state.data[0].lastname}
                </Typography>
                <Typography>Intitulé de votre formation : Etudiant</Typography>
                <Typography>Nom de votre formation : BAC S</Typography>
                <Typography>Nom de votre formation : Terminale</Typography>

                <Divider style={{ marginTop: 15, marginBottom: 15 }} />

                <Typography variant="h6">
                  Etablissement de {state.data[0].firstname}{" "}
                  {state.data[0].lastname}
                </Typography>
                <Typography>Nom de l'établissement : Gustave Eiffel</Typography>
                <Typography>Pays de l'établissement : Paris</Typography>
                <Typography>N° de rue : 34</Typography>
                <Typography>Adresse : Rue du maine</Typography>
                <Typography>Département : Seine-Saint-denis</Typography>
                <Typography>Ville : Sevran</Typography>

                <Divider style={{ marginTop: 15, marginBottom: 15 }} />

                <Typography variant="h6">
                  Voeux de formation de {state.data[0].firstname}{" "}
                  {state.data[0].lastname}
                </Typography>
                <Typography>Classe demandée : 1ère année</Typography>
                <Typography>Spécialisation : Pas disponible</Typography>
                <Typography>Cursus : Pas disponible</Typography>
                <Typography>Choix campus n°1 : Paris 75</Typography>
                <Typography>Choix campus n°2 : Saint-Denis 93</Typography>
                <Typography>Choix campus n°3 : Lyon 69</Typography>
              </div>
            );
          }}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
          localization={{
            body: {
              deleteTooltip: "Supprimer",
              editTooltip: "Edit",
              emptyDataSourceMessage: "Aucun utilisateurs trouvé",
              editRow: {
                deleteText: "Êtes-vous sur de bien vouloirs faire ça ?",
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
      </main>
    </div>
  );
};
