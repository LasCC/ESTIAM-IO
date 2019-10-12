import React from "react";
import { Typography, Paper, Divider } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Data", "Data", "Data"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#5e92f3", "#1565c0", "#003c8f"],
      hoverBackgroundColor: ["#5e92f3", "#1565c0", "#003c8f"]
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
      <Doughnut data={data} style={{ height: "100%", width: "100%" }} />
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
