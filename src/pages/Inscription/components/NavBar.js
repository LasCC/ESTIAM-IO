import React from "react";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuNavBar from "./MenuNavBar";
import Routes from "../../../Routes";
export default props => {
  return (
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
      <Box p={1} display={{ xs: "none", md: "block", lg: "block" }}>
        <Link to={Routes.LOGIN} style={{ textDecoration: "none" }}>
          <Button style={{ color: "white" }}>S'identifier</Button>
        </Link>
        <Link to={Routes.REGISTER} style={{ textDecoration: "none" }}>
          <Button style={{ color: "white" }}>S'enregistrer</Button>
        </Link>
      </Box>
      <Box display={{ xs: "block", md: "none", lg: "none" }}>
        <MenuNavBar />
      </Box>
    </Box>
  );
};
