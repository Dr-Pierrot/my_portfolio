import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Resume = () => {
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
        <Typography variant="h4" fontFamily={"monospace"}>
          Resume <ArrowForwardIosIcon />
        </Typography>
      </Box>
      <Box sx={{ gridArea: "main" }}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Grid container gap={1}>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
                  Education-
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ background: "#D3D3D3", borderRadius: 2, padding: 1 }}
              >
                <Box>
                  <Typography sx={{ fontSize: 10, fontFamily: "monospace" }}>
                    2020-Present
                  </Typography>
                  <Typography sx={{ fontFamily: "monospace" }}>
                    Dominican College of Tarlac
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontFamily: "monospace" }}>
                    Bachelor of Science in Information Technology
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ background: "#D3D3D3", borderRadius: 2, padding: 1 }}
              >
                <Box>
                  <Typography sx={{ fontSize: 10, fontFamily: "monospace" }}>
                    2018-2020
                  </Typography>
                  <Typography sx={{ fontFamily: "monospace" }}>
                    Dominican College of Tarlac
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontFamily: "monospace" }}>
                    Information Communication and Technology
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontFamily: "monospace" }}>
                    Senior High School
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ background: "#D3D3D3", borderRadius: 2, padding: 1 }}
              >
                <Box>
                  <Typography sx={{ fontSize: 10, fontFamily: "monospace" }}>
                    2014-2018
                  </Typography>
                  <Typography sx={{ fontFamily: "monospace" }}>
                    Cristo Rey High School
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontFamily: "monospace" }}>
                    Junior High School
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ background: "#D3D3D3", borderRadius: 2, padding: 1 }}
              >
                <Box>
                  <Typography sx={{ fontSize: 10, fontFamily: "monospace" }}>
                    2008-2014
                  </Typography>
                  <Typography sx={{ fontFamily: "monospace" }}>
                    Cristo Rey Central Elementary School
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontFamily: "monospace" }}>
                    Elementary
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container gap={1}>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
                  Experience-
                </Typography>
              </Grid>
              <Grid
                item
                xs
                sx={{ background: "#D3D3D3", borderRadius: 2, padding: 1 }}
              >
                <Box>
                  <Typography sx={{ fontSize: 10, fontFamily: "monospace" }}>
                    2024-Present
                  </Typography>
                  <Typography sx={{ fontFamily: "monospace" }}>
                    Dominican College of Tarlac
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontFamily: "monospace" }}>
                    Intern Programmer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Resume;
