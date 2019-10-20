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
  Typography
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
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
    <div>
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
