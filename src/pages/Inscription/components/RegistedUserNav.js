import React from "react";
import { Typography, Box, Avatar, Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuNavBarRegisted from "./MenuNavBarRegisted";
import { Link } from "react-router-dom";
import Routes from "../../../Routes";
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
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" p={4} alignItems="center">
        <Box p={1} flexGrow={1}>
          <Link to={Routes.HOME}>
            <img
              src="https://i.imgur.com/hsaZGPb.png"
              alt="estiamLogo"
              style={{ height: 35 }}
            />
          </Link>
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
          <Typography style={{ color: "white", fontWeight: "500" }}>
            Michel Platini
          </Typography>
        </Box>
        <Box p={1}>
          <MenuNavBarRegisted />
        </Box>
      </Box>
    </div>
  );
};
