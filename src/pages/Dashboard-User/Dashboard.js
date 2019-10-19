import React, { useState, useEffect, useContext } from "react";
import { Candidature } from "../../contexts/CandidatureContext";
import NavBar from "./NavBar";
import CardUpper from "./CardUpper";
import CardBellow from "./CardBellow";
import { Container } from "@material-ui/core";
import Loader from "../../components/Loader";

document.body.style.backgroundColor = "white";
export default props => {
  const { fetchDossier, dataloaded } = useContext(Candidature);
  useEffect(() => fetchDossier(), []);
  if (!dataloaded) return <Loader />;
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
