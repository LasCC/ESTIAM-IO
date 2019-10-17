import React, { useState, useEffect, useContext } from "react";
import { Candidature } from "../../contexts/CandidatureContext";
import NavBar from "./NavBar";
import CardUpper from "./CardUpper";
import CardBellow from "./CardBellow";
import { Container } from "@material-ui/core";
document.body.style.backgroundColor = "white";
export default props => {
  const { fetchDossier, dataloaded } = useContext(Candidature);
  useEffect(() => fetchDossier(), []);
  if (!dataloaded)
    return (
      <div className="loader">
        <div className="outer" />
        <div className="middle" />
        <div className="inner" />
      </div>
    );
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" style={{ marginTop: 15 }}>
        <CardUpper />
        <CardBellow />
      </Container>
    </>
  );
};
