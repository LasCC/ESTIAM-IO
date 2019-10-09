import React from "react";
import NavBar from "./NavBar";
import CardUpper from "./CardUpper";
import CardBellow from "./CardBellow";
import { Container } from "@material-ui/core";

export default props => {
	document.body.style.backgroundColor = "white";
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
