import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
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
            <Avatar alt="avatarLogo" src="https://picsum.photos/200/300" />
          </ListItemAvatar>
          <ListItemText
            primary="Michel Pantini"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  michel.platini@gmail.com
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
