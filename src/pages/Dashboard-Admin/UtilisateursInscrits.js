import React from "react";
import { Typography, Box, Divider } from "@material-ui/core";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

export default props => {
	return (
		<Box
			style={{
				padding: 50,
				boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
				borderRadius: 10,
				backgroundColor: "#2196f3",
				height: "80%"
			}}
		>
			<Typography variant="h5" style={{ fontWeight: "bold", color: "white" }}>
				Utilisateurs inscrits ayant compléter l'inscription
			</Typography>
			<Divider style={{ marginTop: 15, marginBottom: 20 }} />
			<Box display="flex" justifyContent="center">
				<SupervisedUserCircleIcon style={{ fontSize: 65, color: "white" }} />
			</Box>
			<Box display="flex" justifyContent="center" style={{ marginTop: 15 }}>
				<Typography
					variant="subtitle2"
					style={{ fontSize: 15, color: "white" }}
				>
					7541
				</Typography>
			</Box>
			<Typography
				variant="subtitle2"
				style={{ marginTop: 10, color: "lightgray" }}
			>
				Généralement, on utilise un texte en faux latin (le texte ne veut rien
				dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de
				faire office de texte d'attente.
			</Typography>
		</Box>
	);
};
