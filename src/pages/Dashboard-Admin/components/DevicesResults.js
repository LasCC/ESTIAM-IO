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
          <Tab label="Tout" {...a11yProps(0)} />
          <Tab label="Mobile" {...a11yProps(1)} />
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
              end="C5000"
              type="doughnut"
              title="Plateforme des utilisateurs"
              sheet="Traffic des utilisateurs"
              colors={[
                "#0d47a1",
                "#e3f2fd",
                "#bbdefb",
                "#90caf9",
                "#64b5f6",
                "#42a5f5",
                "#2196f3",
                "#1e88e5",
                "#1976d2",
                "#1565c0"
              ]}
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
              end="D5000"
              type="line"
              title="Utilisateurs mobile"
              sheet="Traffic des utilisateurs mobile"
              colors={[
                "#0d47a1",
                "#e3f2fd",
                "#bbdefb",
                "#90caf9",
                "#64b5f6",
                "#42a5f5",
                "#2196f3",
                "#1e88e5",
                "#1976d2",
                "#1565c0"
              ]}
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
