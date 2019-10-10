import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

const data = {
  labels: ["Voeux de formation", "Situation", "Tests de positionnement"],
  datasets: [
    {
      data: [300, 81, 100],
      backgroundColor: ["#004080", "#508CC9", "#0C69C7"],
      hoverBackgroundColor: ["#004080", "#508CC9", "#0C69C7"]
    }
  ]
};

export default props => ({
  render() {
    return (
      <>
        <Typography
          align="center"
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: 10 }}
        >
          Chart JS with random data
        </Typography>
        <Doughnut data={data} style={{ height: 50, width: 50 }} />
        <Typography
          align="center"
          style={{
            marginTop: 15,
            fontWeight: "normal",
            fontSize: 15,
            color: "rgba(0, 0, 0, 0.38)"
          }}
        >
          Généralement, on utilise un texte en faux latin (le texte ne veut rien
          dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de
          faire office de texte d'attente.
        </Typography>
      </>
    );
  }
});
