import React from "react";
import NavBar from "./NavBar";
import { Container } from "@material-ui/core";
import CardUpper from "./CardUpper";
import CardBellow from "./CardBellow";

export default props => {
	return (
		<>
			<NavBar />
			<Container maxWidth="lg">
				<CardUpper />
				<CardBellow />
			</Container>
		</>
	);
};
