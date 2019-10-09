import React, { createContext, useState } from "react";
import http from "../services/httpService";

export const Candidature = createContext();

export const CandidatureProvider = props => {
  const [dossier, setDossier] = useState({});

  return <Candidature.Provider>{props.children}</Candidature.Provider>;
};

/*Procedure  
  1 -> recuperation du dossier et le mettre dans le state
      (JWT to backend)
    JWT shoould have : name , lastname , dossier_number ,     
  2 -> 

*/
