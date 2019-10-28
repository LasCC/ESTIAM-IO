import React, { createContext, useState } from "react";
import http from "../services/httpService";
import { Switch } from "react-router-dom";
import jwtdecode from "jwt-decode";
export const AdminDashboardContext = createContext();

const AdminDashboardProvider = props => {
  const [data, setData] = useState({});
  const [loginState, setLoginState] = useState({});
  const [stat, setStat] = useState({});
  const [statReady, setStatReady] = useState(false);
  const [candidatures, setCandidatures] = useState([]);
  const [candidaturesReady, setCandidaturesReady] = useState(false);
  const [httpError, setHttpError] = useState({
    clientError: false,
    serverError: false
  });
   const endpoint = "https://test-estiam-io-x-app.herokuapp.com";
  //const endpoint = "http://localhost:5000";

  const handleAdminLogin = async (data, path) => {
    let res;
    //console.log(data);
    try {
      //console.log("login try ");
      res = await http.post(endpoint + "/admin/login", data);
      //console.log(res);
    } catch (ex) {
      const expectedError =
        ex.response && ex.response.status >= 400 && ex.response.status < 500;
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
      //console.log("######firsttime logged : ", tokendata.firstLogged);
      props.history.push(path);
    } catch (ex) {
      //console.log("invalid Token", ex);
      throw ex;
    }
  };
  const handleLogout = () => {
    //console.log("logged out .....");
    localStorage.removeItem("admintoken");
    window.location.replace("/connexion/administration");
  };
  const checkAuth = () => {
    //console.log("checking...");

    const token = localStorage.getItem("admintoken");

    if (!token) {
      return false;
    }

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
      //console.log("isexp", exp < now, dayRelativeDifference, "mn");
      if (exp < now) {
        //console.log("TOKEN expired !");
        handleLogout();
        return false;
      }
    } catch (ex) {
      //console.log(ex);
      return false;
    }

    return true;
  };
  const fetchCandidature = () => {
    const token = localStorage.getItem("admintoken");
    http
      .get(endpoint + "/api/candidature/all", {
        headers: {
          "x-auth-token": token
        }
      })
      .then(res => {
        //console.log(res);
        const administrationStepsName = [
          "En cours de traitement",
          "Dossier Incomplet",
          "Rendez-vous plannifié",
          "Dossier rejeté",
          "Dossier validé"
        ];
        res.data.map(
          c =>
            (c.nameAdministrationStep =
              administrationStepsName[c.administrationStep])
        );
        setCandidatures(res.data);
        setCandidaturesReady(true);
      })
      .catch(err => console.log(err));
  };
  const updateBackState = data => {
    const token = localStorage.getItem("admintoken");
    http
      .put(
        endpoint + `/api/candidature/step/${data.id}`,
        { step: data.step },
        {
          headers: {
            "x-auth-token": token
          }
        }
      )
      .then(res => {
        const administrationStepsName = [
          "En cours de traitement",
          "Dossier Incomplet",
          "Rendez-vous plannifié",
          "Dossier rejeté",
          "Dossier validé"
        ];
        res.data.data.map(
          c =>
            (c.nameAdministrationStep =
              administrationStepsName[c.administrationStep])
        );
        setCandidatures(res.data.data);
        //console.log("done !");
      })
      .catch(err => console.log(err));
    //console.log("updating ... ");
  };
  const fetchStat = () => {
    const token = localStorage.getItem("admintoken");
    http
      .get(endpoint + "/api/candidature/stat/", {
        headers: {
          "x-auth-token": token
        }
      })
      .then(res => {
        setStat(res.data.data);
        //console.log(res);
        setStatReady(true);
      })
      .catch(err => console.log(err));
  };
  return (
    <AdminDashboardContext.Provider
      value={{
        data,
        candidatures,
        handleAdminLogin,
        checkAuth,
        httpError,
        handleLogout,
        fetchCandidature,
        candidaturesReady,
        endpoint,
        updateBackState,
        fetchStat,
        stat,
        statReady
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
