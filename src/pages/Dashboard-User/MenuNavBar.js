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
  Typography,
  Box,
  Badge
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import jwtdecode from "jwt-decode";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { LoginContext } from "../../contexts/LoginContext";
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
            <Avatar
              alt="avatarLogo"
              src={avatarUrl}
              style={{ backgroundColor: "blue" }}
            />
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
        <Typography>{`${firstName} ${lastName.toUpperCase()}`}</Typography>
      </Box>
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
