import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import jwtdecode from "jwt-decode";
import Routes from "../../Routes";
import {
  Typography,
  Box,
  Avatar,
  Badge,
  IconButton,
  Drawer
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuNavBar from "./MenuNavBar";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

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

export default props => {
  const { loginState } = useContext(LoginContext);
  const { firstName, lastName } = jwtdecode(localStorage.getItem("token"));
  const avatarUrl = `https://eu.ui-avatars.com/api/?name=${firstName}+${lastName}&background=1875F0&color=fff`;
  console.log("dashboard", loginState);
  // const time = moment()
  //   .startOf("hour")
  //   .fromNow();
  // const handleMenuItemClick = (event, index) => {
  //   setAnchorEl(null);
  //   console.log("Notification selectionné > " + index);
  // };
  // V2 DE L'APP
  // const notifs = [
  //   "Mettre à jour vos documents",
  //   "Terminier de remplir voeux de formation",
  //   "Vous avez reçu une mise à jour",
  //   "J'ai plus d'idée frerot abuse pas",
  //   "Test d'une update avec momentJS"
  // ];
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" p={2} alignItems="center">
        <Box p={1} flexGrow={1}>
          <Link to={Routes.DASHBOARD}>
            <img
              src="https://i.imgur.com/LbKnIx0.png"
              alt="estiamLogo"
              style={{ height: 35 }}
            />
          </Link>
        </Box>
        {/* 
        V2 DE L'APP
        <Box p={1}>
          <Tooltip title="Notifications">
            <IconButton aria-label="add an alarm" onClick={handleClick}>
              <Badge color="primary" badgeContent={5}>
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Box display="flex">
              <Box flexGrow={1} style={{ marginRight: 15, padding: 10 }}>
                <Typography variant="subtitle2">Notifications</Typography>
              </Box>
              <Link to={Routes.PARAMETER_NOTIFICATION}>
                <Box style={{ padding: 10, color: "gray" }}>
                  <SettingsIcon />
                </Box>
              </Link>
            </Box>
            {notifs.map((option, index) => (
              <ListItem
                key={option}
                onClick={event => handleMenuItemClick(event, index)}
              >
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src="https://placebeard.it/640x360"
                      alt="image_notifs"
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={option} secondary={time} />
              </ListItem>
            ))}
          </Menu>
        </Box> */}
        <Box p={1} display={{ xs: "none", lg: "block", sm: "block" }}>
          <StyledBadge2
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            variant="dot"
          >
            {/* <IconButton onClick={toggleDrawer("right", true)}> */}
            <Avatar alt="imageProfile" src={avatarUrl} />
            {/* </IconButton> */}
          </StyledBadge2>
        </Box>
        <Box p={1} display={{ xs: "none", lg: "block", sm: "block" }}>
          <Typography>{`${firstName} ${lastName.toUpperCase()}`}</Typography>
        </Box>
        <Box p={1}>
          <MenuNavBar />
        </Box>
      </Box>
    </div>
  );
};
