import React, { createContext, useState } from "react";
import jwtdecode from "jwt-decode";
import http from "../services/httpService";

export const LoginContext = createContext();

export const LoginProvider = props => {
  const [loginState, setLoginState] = useState({
    name: "Michel",
    lastname: "Platini",
    numero_dossier: "",
    token: "",
    isLogged: true
  });
  const handleLogin = data => {
    console.log("Login...");
  };

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
      const { exp } = jwt_decode(token);
      const now = new Date().getItem() / 1000;
      if (exp < now) {
        return false;
      }
    } catch (e) {
      return false;
    }
  };

  return (
    <LoginContext.Provider value={loginState}>
      {props.children}
    </LoginContext.Provider>
  );
};
/*
 --> JWT shoould have : 
  name , lastname , dossier_number , step   


*/
