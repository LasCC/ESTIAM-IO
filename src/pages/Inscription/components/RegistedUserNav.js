import React from "react";
import { Box } from "@material-ui/core";
import jwtdecode from "jwt-decode";
import MenuNavBarRegisted from "./MenuNavBarRegisted";
import { Link } from "react-router-dom";
import Routes from "../../../Routes";

export default props => {
  const tokendata = jwtdecode(localStorage.getItem("token"));
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
        <Box p={1}>
          <MenuNavBarRegisted />
        </Box>
      </Box>
    </div>
  );
};
