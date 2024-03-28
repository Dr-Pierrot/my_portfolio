import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "../assets/hrdmo.png";
import logo2 from "../assets/I DO Logo.svg";
import logo3 from "../assets/dog.png";

const Portfolio = () => {
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
          Portfolio <ArrowForwardIosIcon />
        </Typography>
      </Box>
      <Box sx={{ gridArea: "main" }}>
        <Grid container gap={1} sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            xl={5.5}
            sx={{
              background: "#D3D3D3",
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: 5,
              padding: 1,
            }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: 5,
                background: "transparent",
                justifySelf: "center",
              }}
            >
              <img
                src={logo}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
            <Box>
              <Typography sx={{ textAlign: "center", fontFamily: "monospace" }}>
                DCT - Human Resource Management System
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            xl={5.5}
            sx={{
              background: "#D3D3D3",
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: 5,
              padding: 1,
            }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: 5,
                background: "transparent",
                justifySelf: "center",
              }}
            >
              <img
                src={logo2}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ textAlign: "center", fontFamily: "monospace" }}>
                I DO - Android Mobile Wedding Planner Application
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            xl={5.5}
            sx={{
              background: "#D3D3D3",
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: 5,
              padding: 1,
            }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: 5,
                background: "transparent",
                justifySelf: "center",
              }}
            >
              <img
                src={logo3}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ textAlign: "center", fontFamily: "monospace" }}>
                Veterenary Clinic Patient Information System
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Portfolio;
