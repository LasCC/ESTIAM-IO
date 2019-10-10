import React from "react";
import {
  Typography,
  Box,
  Avatar,
  IconButton,
  Badge,
  Tooltip,
  Menu,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { withStyles } from "@material-ui/core/styles";
import MenuNavBar from "./MenuNavBar";
import SettingsIcon from "@material-ui/icons/Settings";
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
  const time = moment()
    .startOf("hour")
    .fromNow();
  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    console.log("Notification selectionné > " + index);
  };
  const notifs = [
    "Mise en place des notifications",
    "Les notifications sont mappés"
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" p={4} alignItems="center">
        <Box p={1} flexGrow={1}>
          <Link to="/administration">
            <img
              src="https://i.imgur.com/LbKnIx0.png"
              alt="estiamLogo"
              style={{ height: 35 }}
            />
          </Link>
        </Box>
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
              <Link to="/parametre-notification">
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
        </Box>
        <Box p={1} display={{ xs: "none", lg: "block", sm: "block" }}>
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
        <Box p={1} display={{ xs: "none", lg: "block", sm: "block" }}>
          <Typography>Michel Platini</Typography>
        </Box>
        <Box p={1}>
          <MenuNavBar />
        </Box>
      </Box>
    </div>
  );
};
