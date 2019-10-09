import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { Typography, Divider, Paper } from "@material-ui/core";

const data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "Random data",
			backgroundColor: "rgba(144, 202, 249, 0.25)",
			borderColor: "#2962ff",
			borderWidth: 2,
			hoverBackgroundColor: "rgba(80, 194, 247, 0.45)",
			hoverBorderColor: "rgba(115, 232, 255, 0.25)",
			data: [65, 59, 80, 81, 56, 55, 40, 3]
		}
	]
};

export default props => {
	return (
		<Paper
			style={{
				padding: 30,
				boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
				borderRadius: 10,
				height: "auto"
			}}
		>
			<Typography variant="h5" style={{ fontWeight: "bold" }}>
				Random datasets
			</Typography>
			<Divider style={{ marginTop: 15, marginBottom: 15 }} />
			<HorizontalBar data={data} height="100%" width="100%" />
			<Typography
				variant="subtitle2"
				color="textSecondary"
				style={{ marginTop: 10 }}
			>
				Généralement, on utilise un texte en faux latin (le texte ne veut rien
				dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de
				faire office de texte d'attente.
			</Typography>
		</Paper>
	);
};
