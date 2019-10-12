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
  Avatar,
  Badge
} from "@material-ui/core";
import { Link } from "react-router-dom";
import OtherData1 from "../OtherData1";
import OtherData2 from "../OtherData2";
import OtherData3 from "../OtherData3";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TimelineIcon from "@material-ui/icons/Timeline";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import Looks3Icon from "@material-ui/icons/Looks3";
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
    backgroundColor: "#004080"
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
            to="/administration"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Accueil" />
            </ListItem>
          </Link>

          <Link
            to="/administration/dossiers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <SupervisedUserCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Dossiers" />
            </ListItem>
          </Link>

          <Link
            to="/administration/vue-ensembre"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="Vue d'ensemble" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Bonjour Michel Platini !
        </Typography>
        <Typography variant="subtitle1">{moment().format("LLLL")}</Typography>
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        <Grid container spacing={3} direction="row" justify="center">
          <Grid item xs sm="auto" lg={3} md={3}>
            <Box
              style={{
                padding: 50,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                backgroundColor: "#2196f3"
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", color: "white" }}
              >
                Utilisateurs inscrits ayant complété l'inscription
              </Typography>
              <Divider style={{ marginTop: 15, marginBottom: 20 }} />
              <Box display="flex" justifyContent="center">
                <SupervisedUserCircleIcon
                  style={{ fontSize: 65, color: "white" }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                style={{ marginTop: 15 }}
              >
                <Typography
                  variant="subtitle2"
                  style={{ fontSize: 15, color: "white" }}
                >
                  7541
                </Typography>
              </Box>
              <Typography
                variant="subtitle2"
                style={{ marginTop: 10, color: "lightgray" }}
              >
                Généralement, on utilise un texte en faux latin (le texte ne
                veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui
                permet donc de faire office de texte d'attente.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs sm="auto" lg={3} md={3}>
            <Box
              style={{
                padding: 50,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                backgroundColor: "#1e88e5"
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", color: "white" }}
              >
                Utilisateurs ayant complété la première étape
              </Typography>
              <Divider
                style={{
                  marginTop: 15,
                  marginBottom: 20
                }}
              />
              <Box display="flex" justifyContent="center">
                <LooksOneIcon style={{ fontSize: 65, color: "white" }} />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                style={{ marginTop: 15 }}
              >
                <Typography
                  variant="subtitle2"
                  style={{ fontSize: 15, color: "white" }}
                >
                  7541
                </Typography>
              </Box>
              <Typography
                variant="subtitle2"
                style={{ marginTop: 10, color: "lightgray" }}
              >
                Généralement, on utilise un texte en faux latin (le texte ne
                veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui
                permet donc de faire office de texte d'attente.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs sm="auto" lg={3} md={3}>
            <Box
              style={{
                padding: 50,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                backgroundColor: "#1976d2"
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", color: "white" }}
              >
                Utilisateurs ayant complété la deuxième étape
              </Typography>
              <Divider style={{ marginTop: 15, marginBottom: 20 }} />
              <Box display="flex" justifyContent="center">
                <LooksTwoIcon style={{ fontSize: 65, color: "white" }} />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                style={{ marginTop: 15 }}
              >
                <Typography
                  variant="subtitle2"
                  style={{ fontSize: 15, color: "white" }}
                >
                  7541
                </Typography>
              </Box>
              <Typography
                variant="subtitle2"
                style={{ marginTop: 10, color: "lightgray" }}
              >
                Généralement, on utilise un texte en faux latin (le texte ne
                veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui
                permet donc de faire office de texte d'attente.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs sm="auto" lg={3} md={3}>
            <Box
              style={{
                padding: 50,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                backgroundColor: "#1565c0"
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", color: "white" }}
              >
                Utilisateurs ayant complété la troisième étape
              </Typography>
              <Divider style={{ marginTop: 15, marginBottom: 20 }} />
              <Box display="flex" justifyContent="center">
                <Looks3Icon style={{ fontSize: 65, color: "white" }} />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                style={{ marginTop: 15 }}
              >
                <Typography
                  variant="subtitle2"
                  style={{ fontSize: 15, color: "white" }}
                >
                  7541
                </Typography>
              </Box>
              <Typography
                variant="subtitle2"
                style={{ marginTop: 10, color: "lightgray" }}
              >
                Généralement, on utilise un texte en faux latin (le texte ne
                veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui
                permet donc de faire office de texte d'attente.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs sm="auto" lg={4} md={4}>
            <OtherData1 />
          </Grid>
          <Grid item xs sm="auto" lg={4} md={4}>
            <OtherData2 />
          </Grid>
          <Grid item xs sm="auto" lg={4} md={4}>
            <OtherData3 />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};
