import React, { createContext, useState, useContext } from "react";
import { LoginContext } from "./LoginContext";
import http from "../services/httpService";
import jwtdecode from "jwt-decode";
import { withRouter } from "react-router-dom";
export const Candidature = createContext();

const CandidatureProvider = props => {
  const [dossier, setDossier] = useState({});
  const [dataloaded, setDataLoaded] = useState(false);
  // const [actualdossier, setActualInformations] = useState({});
  const { endpoint } = useContext(LoginContext);
  const tokendata = localStorage.getItem("token")
    ? jwtdecode(localStorage.getItem("token"))
    : "";

  function fetchDossier() {
    console.log("fetching the candidature", tokendata.dossierID);
    console.log(tokendata);
    http
      .get(endpoint + `/api/candidature/${tokendata.candidatureID}`, dossier, {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        setDossier(res.data.data);
        setDataLoaded(true);
        localStorage.setItem("dossier", JSON.stringify(res.data.data));
      })
      .catch(ex => console.log(ex));
  }
  function updateDossier(dossier, path) {
    console.log("update the candidature with the current dossier");
    setDataLoaded(false);
    http
      .put(endpoint + `/api/candidature/${tokendata.candidatureID}`, dossier, {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        setDossier(res.data.data);
        setDataLoaded(true);
        localStorage.setItem("dossier", JSON.stringify(res.data.data));
        if (path) props.history.push(path);
      })
      .catch(ex => console.log(ex));
  }
  return (
    <Candidature.Provider
      value={{ dossier, fetchDossier, dataloaded, updateDossier }}
    >
      {props.children}
    </Candidature.Provider>
  );
};
export default withRouter(CandidatureProvider);
/*Procedure  
  1 -> recuperation du dossier grace au token -> http.post(backURL,{x-auth-token : LoginContext.token || localstorage.getItem(token) })
  [BACK : dechiffrement token , findOnebyID({dossier : tokendata.dossier})]
  reponse obtenu + (step) -->  state "dossier"
  
  2 -> à chaque validation d'etapes ,
    mettre a jour le state avec les info supplementaires +
  une requete POST + (jwt) vers 
  la route update du backend pour mettre a jour le document au backend.
   ** retour etape 1 

   // dashboard reactif par rapport au step
*/

/**
 * etapes d'avancement du dosier --> stepper coté administration 
stepper etapes d'avancement renseignment --> stepper coté client
resultat ??


*appel de la candidature ->  Candidature.fetchDossier() dans useEffect() dans Dashboard 
( la data se trouve a presente dans le contexte)
*recupertion du Candidature.dossier et des etapes  dans le CandidatureCOntext -> dashboard dynamique 
 */
