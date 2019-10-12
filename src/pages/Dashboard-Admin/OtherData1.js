import React from "react";
import { Line } from "react-chartjs-2";
import { Typography, Divider, Paper } from "@material-ui/core";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Random data",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(144, 202, 249, 0.25)",
      borderColor: "#2962ff",
      borderCapStyle: "butt",
      borderJoinStyle: "miter",
      pointHoverBackgroundColor: "#4fc3f7",
      pointHoverBorderColor: "#73e8ff",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
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
      <Line data={data} style={{ height: "100%", width: "100%" }} />
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
