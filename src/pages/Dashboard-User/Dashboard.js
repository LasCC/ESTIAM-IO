import React from "react";
import NavBar from "./NavBar";
import CardUpper from "./CardUpper";
import CardBellow from "./CardBellow";
import { Container } from "@material-ui/core";
import "../../style.css";

export default props => {
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
