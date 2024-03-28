import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"header header header header"
        "main main main main"`,
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <Typography variant="h4" sx={{ fontFamily: "monospace" }}>
          Contact <ArrowForwardIosIcon />
        </Typography>
      </Box>
      <Box
        sx={{
          gridArea: "main",
          background: "#d3d3d3",
          borderRadius: 5,
          padding: 2,
          display: "grid",
          justifyContent: "center",
          justifySelf: "center",
          alignContent: "center",
          width: "fit-content",
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: "monospace" }}>
          Hi! I'm always open for discussion!
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
          Contact Me!
        </Typography>
        <FormControl sx={{ width: "100%", gap: 3 }}>
          <TextField required variant="standard" label="Name" />
          <TextField required variant="standard" label="Email" />
          <TextField required variant="standard" multiline label="Message" />
          <Button variant="outlined" sx={{ alignSelf: "start" }}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
export default Contact;
