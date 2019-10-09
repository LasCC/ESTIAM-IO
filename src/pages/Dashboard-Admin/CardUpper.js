import React from "react";
import { Grid, Typography } from "@material-ui/core";
import UtilisateursInscrits from "./UtilisateursInscrits";
import Step1User from "./Step1User";
import Step2User from "./Step2User";
import Step3User from "./Step3User";
document.body.style.backgroundColor = "white";

export default props => {
	return (
		<>
			<Typography style={{ color: "gray" }}>Administration</Typography>
			<Typography variant="h4" style={{ fontWeight: "bold", marginBottom: 10 }}>
				Vue d'ensemble des utilisateurs inscrits
			</Typography>
			<Grid container spacing={3} direction="row" justify="center">
				<Grid item xs sm="auto" lg={3} md={3}>
					<UtilisateursInscrits />
				</Grid>
				<Grid item xs sm="auto" lg={3} md={3}>
					<Step1User />
				</Grid>
				<Grid item xs sm="auto" lg={3} md={3}>
					<Step2User />
				</Grid>
				<Grid item xs sm="auto" lg={3} md={3}>
					<Step3User />
				</Grid>
			</Grid>
		</>
	);
};
