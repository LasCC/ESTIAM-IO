import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Routes from "../../Routes";
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
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import jwtdecode from "jwt-decode";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const { handleLogout, loginState } = useContext(LoginContext);
  const { firstName, lastName, email } = jwtdecode(
    localStorage.getItem("token")
  );
  const avatarUrl = `https://eu.ui-avatars.com/api/?name=${firstName}+${lastName}&background=1875F0&color=fff`;
  console.log(firstName, lastName);
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
      <List component="nav">
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="avatarLogo" src={avatarUrl} />
          </ListItemAvatar>
          <ListItemText
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
            primary={`${firstName} ${lastName.toUpperCase()}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  color="textSecondary"
                  variant="body2"
                >
                  {`${email}`}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />

        <Link
          to={Routes.DASHBOARD}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>

        <Link
          to={Routes.DASHBOARD_TASKS}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary="Tâches" />
          </ListItem>
        </Link>

        <Link
          to={Routes.DASHBOARD_HELP}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Tutoriels" />
          </ListItem>
        </Link>
        <Divider />
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
      <IconButton onClick={toggleDrawer("right", true)}>
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
