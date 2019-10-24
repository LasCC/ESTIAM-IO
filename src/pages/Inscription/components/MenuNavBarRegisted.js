import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import jwtdecode from "jwt-decode";
import Routes from "../../../Routes";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  Badge
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { LoginContext } from "./../../../contexts/LoginContext";
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

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
export default function TemporaryDrawer() {
  const tokendata = jwtdecode(localStorage.getItem("token"));
  const { firstName, lastName, email } = tokendata;
  const avatarUrl = `https://eu.ui-avatars.com/api/?name=${firstName}+${lastName}&background=1875F0&color=fff`;
  const { handleLogout } = useContext(LoginContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="avatarLogo" src={avatarUrl} />
          </ListItemAvatar>
          <ListItemText
            primary={`${firstName} ${lastName.toUpperCase()}`}
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {email}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />

        <Link
          to={Routes.HOME}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Accueil" />
          </ListItem>
        </Link>

        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Se déconnecter" onClick={handleLogout} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Box p={1} display={{ xs: "none", lg: "block", sm: "block" }}>
        <StyledBadge2
          overlap="circle"
          style={{ cursor: "pointer" }}
          onClick={toggleDrawer("right", true)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          variant="dot"
        >
          <Avatar alt="imageProfile" src={avatarUrl} />
        </StyledBadge2>
      </Box>
      <Box p={1} display={{ xs: "none", lg: "block", sm: "block" }}>
        <Typography
          style={{ color: "white", fontWeight: "500" }}
        >{`${firstName} ${lastName.toUpperCase()}`}</Typography>
      </Box>
      <IconButton
        onClick={toggleDrawer("right", true)}
        style={{ color: "white" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
