import React, { createContext, useState } from "react";
import http from "../services/httpService";
import { Switch } from "react-router-dom";
import jwtdecode from "jwt-decode";
import { withRouter } from "react-router-dom";
export const AdminDashboardContext = createContext();

const AdminDashboardProvider = props => {
  const [data, setData] = useState({});
  const [loginState, setLoginState] = useState({});
  const [candidatures, setCandidatures] = useState([]);
  const [httpError, setHttpError] = useState({
    clientError: false,
    serverError: false
  });
  const endpoint = "https://test-estiam-io-x-app.herokuapp.com";
  const handleAdminLogin = async (data, path) => {
    let res;
    console.log(data);
    try {
      console.log("login try ");
      res = await http.post(endpoint + "/admin/login", data);
      console.log(res);
    } catch (ex) {
      console.log("*****************", ex);
      console.log("ERR DATA*****************", ex.response);
      // if(ex.response)
      const expectedError =
        ex.response && ex.response.status >= 400 && ex.response.status < 500;
      console.dir(expectedError);

      setHttpError({
        serverError: !expectedError,
        clientError: expectedError
      });
      return;
    }

    const { token } = res.data;
    try {
      const tokendata = await jwtdecode(token);
      if (!tokendata.isAdmin) {
        setHttpError({ clientError: true, serverError: false });
        return;
      }
      localStorage.setItem("admintoken", token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName: tokendata.firstName,
          lastName: tokendata.lastName,
          isAdmin: tokendata.isAdmin
        })
      );
      setHttpError({ serverError: false, clientError: false });
      console.log("######firsttime logged : ", tokendata.firstLogged);
      props.history.push(path);
    } catch (ex) {
      console.log("invalid Token", ex);
      throw ex;
    }
  };

  const handleLogout = () => {
    console.log("logged out .....");
    localStorage.removeItem("admintoken");
    window.location.replace("/connexion/administration");
  };
  const checkAuth = () => {
    console.log("checking...");

    const token = localStorage.getItem("admintoken");
    // in proddatadatadata
    if (!token) {
      return false;
    }

    // in TEST
    // return loginState.isLogged;

    try {
      const { exp, isAdmin } = jwtdecode(token);
      if (!isAdmin) return false;
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
        handleLogout();
        return false;
      }
    } catch (ex) {
      console.log(ex);
      return false;
    }

    return true;
  };
  return (
    <AdminDashboardContext.Provider
      value={{
        data,
        candidatures,
        handleAdminLogin,
        checkAuth,
        httpError,
        handleLogout
      }}
    >
      <Switch>{props.children}</Switch>
    </AdminDashboardContext.Provider>
  );
};
export default AdminDashboardProvider;

/*
envoie une requete post vers le serveur avec un token admin
[BACK : dechiffre token + crer un objet contenant les stat 
   a partir de requetes sur la cache-BDD]
[+ fetch toutes les candidatures en cours / achevé ]
[mapage de candiatures , key = _id , ]
*/
