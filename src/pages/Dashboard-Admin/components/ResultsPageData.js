import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import { Box, Typography, Tab, Tabs, AppBar, Paper } from "@material-ui/core";
import RoboChart from "@postlight/react-google-sheet-to-chart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Paper
      style={{
        padding: 20,
        boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
        borderRadius: 10,
        height: "auto"
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: 25,
          boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.11)"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          centered
        >
          <Tab label="Résultats de la semaine" {...a11yProps(0)} />
          <Tab label="Résultats sous 14 jours" {...a11yProps(1)} />
          <Tab label="Résultats du mois" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box display={{ sm: "none", xs: "none", lg: "block", xl: "block" }}>
            <RoboChart
              id="1aZ_RyDvlzowiIqVPm2y7ZbvHAW0bknuUir2V_dt8xYg"
              start="A15"
              end="B150"
              type="line"
              title="Rapport de la semaine"
              sheet="Résultats sous 7 jours"
              colors={["#1e88e5", "#1e88e5"]}
              token="AIzaSyBWtOzwt9jSgf8JPGxsi1CWt9BR4w_6IrQ"
            />
          </Box>
          <Box display={{ sm: "block", xs: "block", lg: "none", xl: "none" }}>
            Merci de vous rendre sur un écran plus adapté
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Box display={{ sm: "none", xs: "none", lg: "block", xl: "block" }}>
            <RoboChart
              id="1aZ_RyDvlzowiIqVPm2y7ZbvHAW0bknuUir2V_dt8xYg"
              start="A15"
              end="B150"
              type="line"
              title="Rapport sous 14 jours"
              sheet="Résultats sous 14 jours"
              colors={["#42a5f5", "#90caf9"]}
              token="AIzaSyBWtOzwt9jSgf8JPGxsi1CWt9BR4w_6IrQ"
            />
          </Box>
          <Box display={{ sm: "block", xs: "block", lg: "none", xl: "none" }}>
            Merci de vous rendre sur un écran plus adapté
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Box display={{ sm: "none", xs: "none", lg: "block", xl: "block" }}>
            <RoboChart
              id="1aZ_RyDvlzowiIqVPm2y7ZbvHAW0bknuUir2V_dt8xYg"
              start="A15"
              end="B150"
              type="line"
              title="Rapport du mois"
              sheet="Résultats sous 30 jours"
              colors={["#90caf9", "#90caf9"]}
              token="AIzaSyBWtOzwt9jSgf8JPGxsi1CWt9BR4w_6IrQ"
            />
          </Box>
          <Box display={{ sm: "block", xs: "block", lg: "none", xl: "none" }}>
            Merci de vous rendre sur un écran plus adapté
          </Box>
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
}
