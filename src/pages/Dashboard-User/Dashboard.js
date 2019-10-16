import React, { useState, useEffect, useContext } from "react";
import { Candidature } from "../../contexts/CandidatureContext";
import NavBar from "./NavBar";
import CardUpper from "./CardUpper";
import CardBellow from "./CardBellow";
import { Container } from "@material-ui/core";
import "../../style.css";
export default props => {
  const { fetchDossier } = useContext(Candidature);
  useEffect(() => fetchDossier(), []);
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
