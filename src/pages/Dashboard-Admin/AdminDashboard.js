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
  Grid,
  Box,
  Paper,
  Avatar,
  Badge,
  Tooltip
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Routes from "../../Routes";
import ResultsPageData from "./components/ResultsPageData";
import DevicesResults from "./components/DevicesResults";
import RoboChart from "@postlight/react-google-sheet-to-chart";
import TimelineIcon from "@material-ui/icons/Timeline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
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
      transform: "scale(2.6)",
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
    padding: theme.spacing(6)
  }
}));

export default props => {
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
            style={{ height: "100%", width: "" }}
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
          Mise à jour des données toutes les heures
        </Typography>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Données Google Analytics
        </Typography>
        <Typography variant="subtitle1">{moment().format("LLLL")}</Typography>
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              {/* The google sheet > https://docs.google.com/spreadsheets/d/1aZ_RyDvlzowiIqVPm2y7ZbvHAW0bknuUir2V_dt8xYg/edit#gid=1006376999 */}
              <iframe
                title="nombreUtilisateur"
                width="100%"
                height="371"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6opVYsc7yeWQJY-Ik8zJQ2IQZS5kCc09XEkE-v0Z2n4hTCTPqyEYbYol5XC8NanpTmYV1e7pd18DB/pubchart?oid=238319360&format=interactive"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <iframe
                title="payscarte"
                width="100%"
                height="371"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6opVYsc7yeWQJY-Ik8zJQ2IQZS5kCc09XEkE-v0Z2n4hTCTPqyEYbYol5XC8NanpTmYV1e7pd18DB/pubchart?oid=671500211&amp;format=interactive"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <Box
                display={{ sm: "none", xs: "none", lg: "block", xl: "block" }}
              >
                <RoboChart
                  id="1aZ_RyDvlzowiIqVPm2y7ZbvHAW0bknuUir2V_dt8xYg"
                  start="A15"
                  end="C5000"
                  type="semi-doughnut"
                  sheet="Résultat de la journée"
                  colors={[
                    "#e3f2fd",
                    "#bbdefb",
                    "#90caf9",
                    "#64b5f6",
                    "#42a5f5",
                    "#2196f3",
                    "#1e88e5",
                    "#1976d2",
                    "#1565c0",
                    "#0d47a1",
                    "#01579b",
                    "#0288d1",
                    "#03a9f4",
                    "#039be5",
                    "#80d8ff",
                    "#0091ea"
                  ]}
                  token="AIzaSyBWtOzwt9jSgf8JPGxsi1CWt9BR4w_6IrQ"
                />
              </Box>
              <Box
                display={{ sm: "block", xs: "block", lg: "none", xl: "none" }}
              >
                Merci de vous rendre sur un écran plus adapté
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <Box
                display={{ sm: "none", xs: "none", lg: "block", xl: "block" }}
              >
                <RoboChart
                  id="1aZ_RyDvlzowiIqVPm2y7ZbvHAW0bknuUir2V_dt8xYg"
                  start="A15"
                  end="D5000"
                  type="semi-doughnut"
                  sheet="Source des utilisateurs"
                  colors={[
                    "#90caf9",
                    "#2196f3",
                    "#e3f2fd",
                    "#bbdefb",
                    "#64b5f6",
                    "#42a5f5",
                    "#1e88e5",
                    "#1976d2",
                    "#1565c0",
                    "#0d47a1"
                  ]}
                  token="AIzaSyBWtOzwt9jSgf8JPGxsi1CWt9BR4w_6IrQ"
                />
              </Box>
              <Box
                display={{ sm: "block", xs: "block", lg: "none", xl: "none" }}
              >
                Merci de vous rendre sur un écran plus adapté
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <Box
                display={{ sm: "none", xs: "none", lg: "block", xl: "block" }}
              >
                <RoboChart
                  id="1aZ_RyDvlzowiIqVPm2y7ZbvHAW0bknuUir2V_dt8xYg"
                  start="A15"
                  end="B5000"
                  type="line"
                  sheet="Utilisateurs inscrits par jour"
                  colors={[
                    "#64b5f6",
                    "#1976d2",
                    "#e3f2fd",
                    "#42a5f5",
                    "#bbdefb",
                    "#90caf9",
                    "#2196f3",
                    "#1e88e5",
                    "#1565c0",
                    "#0d47a1"
                  ]}
                  token="AIzaSyBWtOzwt9jSgf8JPGxsi1CWt9BR4w_6IrQ"
                />
              </Box>
              <Box
                display={{ sm: "block", xs: "block", lg: "none", xl: "none" }}
              >
                Merci de vous rendre sur un écran plus adapté
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <DevicesResults />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <ResultsPageData />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};
