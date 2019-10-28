import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import jwtdecode from "jwt-decode";
import Routes from "../../Routes";
import { Box } from "@material-ui/core";
import MenuNavBar from "./MenuNavBar";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

export default props => {
  const { loginState } = useContext(LoginContext);
  //console.log("dashboard", loginState);
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
        <Box p={1}>
          <MenuNavBar />
        </Box>
      </Box>
    </div>
  );
};
