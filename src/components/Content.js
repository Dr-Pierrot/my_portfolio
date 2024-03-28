import React from "react";
import { Box, Paper } from "@mui/material";
import About from "../views/About";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";
import Contact from "../views/Contact";

const Content = ({ selected }) => {
  let selectedView;

  switch (selected) {
    case "about":
      selectedView = <About />;
      break;
    case "resume":
      selectedView = <Resume />;
      break;
    case "portfolio":
      selectedView = <Portfolio />;
      break;
    case "contact":
      selectedView = <Contact />;
      break;
    default:
      selectedView = <About />;
  }

  return (
    <Box
      component={Paper}
      sx={{ width: "50vw", marginTop: -5, padding: 2, boxShadow: 10 }}
    >
      {selectedView}
    </Box>
  );
};

export default Content;
