import React, { createContext, useState } from "react";
import jwtdecode from "jwt-decode";
import http from "../services/httpService";
import { withRouter } from "react-router-dom";

export const LoginContext = createContext();

const LoginProvider = props => {
  const [loginState, setLoginState] = useState({
    name: "",
    lastname: "",
    email: "test@test.com",
    numero_dossier: "",
    token: "",
    hasRegistred: false,
    isLogged: false,
    isActive: false
  });
  const [httpError, setHttpError] = useState({
    clientError: false,
    serverError: false
  });
  const endpoint = "https://rogo.serveo.net";
  const handleLogin = async data => {
    console.log("login request ....", data);
    // if (data.email === "admin" && data.password === "admin") {
    //   setLoginState({
    //     name: "Michel",
    //     lastname: "Platini",
    //     email: "",
    //     numero_dossier: "",
    //     token: "",
    //     isLogged: true,
    //     loginError: false
    //   });
    //   return props.history.push("/dashboard");
    // } else {
    //   console.log("login failed bad credentials");
    //   setLoginState({
    //     name: "Michel",
    //     lastname: "Platini",
    //     email: "",
    //     numero_dossier: "",
    //     token: "",
    //     isLogged: false,
    //     loginError: true
    //   });
    // }
    // Test LOGIN
    let res;
    try {
      console.log("login try ");
      res = await http.post(endpoint + "/auth/login", data);
      console.log(res);
    } catch (ex) {
      console.log("*****************", ex);
      console.log("ERR DATA*****************", ex.response);
      // if(ex.response)
      const expectedError =
        ex.response && ex.response.status >= 400 && ex.response.status < 500;
      return setHttpError({
        serverError: expectedError,
        clientError: expectedError
      });
    }

    const { token } = res.data;
    try {
      const tokendata = await jwtdecode(token);
      console.log(tokendata);
      localStorage.setItem("token", token);
      await setLoginState({
        name: tokendata.firstName,
        lastname: tokendata.lastName,
        email: tokendata.email,
        numero_dossier: tokendata.candidatureID,
        hasRegistred: true,
        isLogged: true,
        isActive: tokendata.isActive
      });
      setHttpError({ serverError: false, clientError: false });
      if (!tokendata.isActive) return props.history.push("/confirmation");
      if (tokendata.firstlogged) return props.history.push("/renseignement");
      return props.history.push("/dashboard");
    } catch (ex) {
      console.log("invalid Token", ex);
      throw ex;
    }
  };
  const handleRegistration = async data => {
    console.log("register request ...");
    return props.history.push("/confirmation");
  };
  const mailChecking = async data => {
    console.log("mail verification + login request ", data);
    let res;
    try {
      res = await http.post(endpoint + "/auth/verifymail", data);
    } catch (ex) {
      console.log(res);
      const expectedError =
        ex.response && ex.response.status >= 400 && ex.response.status < 500;
      return setHttpError({
        serverError: expectedError,
        clientError: expectedError
      });
    }

    // props.history.push("/dashboard");
  };
  const checkAuth = () => {
    console.log("checking...");

    const token = localStorage.getItem("token");
    // in proddatadatadata
    if (!token || !loginState.isLogged) {
      return false;
    }

    // in TEST
    // return loginState.isLogged;

    try {
      const { exp, isActive } = jwtdecode(token);
      if (!isActive) return false;
      const now = new Date().getTime() / 1000;
      const dateExp = new Date(exp * 1000);
      const dateNow = new Date(now * 1000);

      const dayRelativeDifference =
        dateExp.getHours() * 60 +
        dateExp.getMinutes() -
        dateNow.getHours() * 60 -
        dateNow.getMinutes();
      console.log("isexp", exp < now, dayRelativeDifference, "mn");
      if (exp < now) {
        console.log("TOKEN expired !");
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }

    return true;
  };
  const handleLogout = () => {
    console.log("logged out .....");
    localStorage.removeItem("token");
    setLoginState({
      name: "",
      lastname: "",
      email: "test@test.com",
      numero_dossier: "",
      token: "",
      hasRegistred: false,
      isLogged: false,
      isActive: false
    });
    window.location.replace("/");
  };
  return (
    <LoginContext.Provider
      value={{
        loginState,
        handleLogin,
        checkAuth,
        handleLogout,
        handleRegistration,
        mailChecking
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default withRouter(LoginProvider);
/*
 --> JWT shoould have : 
  name , lastname , dossier_number , step   


*/
