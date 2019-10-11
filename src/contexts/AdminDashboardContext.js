import React, { createContext, useState } from "react";
import http from "../services/httpService";
import { Switch } from "react-router-dom";
export const AdminDashboardContext = createContext();

const AdminDashboardProvider = props => {
  const [data, setData] = useState({});
  const [candidatures, setCandidatures] = useState([]);

  return (
    <AdminDashboardContext.Provider candidature={{ data, candidatures }}>
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
