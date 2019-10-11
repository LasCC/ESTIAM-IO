import React, { createContext, useState } from "react";
import http from "../services/httpService";

export const Candidature = createContext();

const CandidatureProvider = props => {
  const [dossier, setDossier] = useState({});

  return (
    <Candidature.Provider candidature={{ dossier }}>
      {props.children}
    </Candidature.Provider>
  );
};
export default CandidatureProvider;
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
