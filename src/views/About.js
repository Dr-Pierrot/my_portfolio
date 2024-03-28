import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReactLogo from "../assets/react-2.svg";

const About = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"header header header header"
        "main main main main"
        "footer footer footer footer"`,
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <Grid container gap={1}>
          <Grid item xs={12}>
            <Typography variant="h4" fontFamily={"monospace"}>
              About <ArrowForwardIosIcon />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="justify"
              sx={{ fontSize: 15 }}
              style={{ textIndent: "2em" }}
              fontFamily={"monospace"}
            >
              Greetings! I'm <strong> Jaycee Capulong</strong>, currently
              enrolled in the BS in Information Technology program at Dominican
              College of Tarlac. I'm deeply passionate about exploring the
              dynamic world of web development and am eagerly absorbing
              knowledge and skills to excel in this field.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="justify"
              sx={{ fontSize: 15 }}
              style={{ textIndent: "2em" }}
              fontFamily={"monospace"}
            >
              As a budding web developer, I'm immersing myself in various
              technologies such as React, JavaScript, and the CodeIgniter
              framework. Through my coursework and personal projects, I'm
              continuously refining my skills and expanding my understanding of
              how to craft innovative and user-centric web solutions.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="justify"
              sx={{ fontSize: 15 }}
              style={{ textIndent: "2em" }}
              fontFamily={"monospace"}
            >
              At 22 years old, I find joy in the process of learning and pushing
              the boundaries of what I can achieve in the digital realm. When
              I'm not engrossed in coding, you'll often find me lost in the
              pages of a captivating book or cruising the open road on my
              motorcycle, finding inspiration in the beauty of the world around
              me.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="justify"
              sx={{ fontSize: 15 }}
              style={{ textIndent: "2em" }}
              fontFamily={"monospace"}
            >
              With a solid foundation in information technology and a hunger for
              growth, I'm excited about the opportunities that lie ahead in my
              journey. I'm committed to leveraging my skills and knowledge to
              make a meaningful impact in the ever-evolving landscape of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ gridArea: "main" }}>
        <Typography variant="h4" fontFamily={"monospace"}>
          What I Do! <ArrowForwardIosIcon />
        </Typography>
        <Grid container gap={2} sx={{ padding: 2 }} justifyContent={"center"}>
          <Grid
            item
            xs
            sx={{
              border: 2,
              borderRadius: 2,
              borderColor: "green",
              padding: 1,
              "&:hover": { color: "white", background: "green" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignContent: "start",
                justifyContent: "start",
              }}
              fontFamily={"monospace"}
              fontSize={18}
            >
              <img
                src={ReactLogo}
                width={25}
                height={25}
                style={{ marginRight: 5 }}
                alt="Logo"
              />{" "}
              React App Development
            </Box>
            <Box marginTop={1}>
              <Typography
                fontFamily={"monospace"}
                sx={{ fontSize: 11 }}
                align="justify"
                style={{ textIndent: "2em" }}
              >
                Enthusiastic and eager React developer with a foundation in
                JavaScript. Learning React components, state management, and JSX
                syntax. Passionate about creating engaging user experiences.
                Committed to continuous growth and contributing to innovative
                projects. Ready to make a mark in the React community.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs
            sx={{
              border: 2,
              borderRadius: 2,
              borderColor: "green",
              padding: 1,
              "&:hover": { color: "white", background: "green" },
            }}
            fontSize={18}
            fontFamily={"monospace"}
          >
            <Box
              sx={{
                display: "flex",
                alignContent: "start",
                justifyContent: "start",
              }}
            >
              <img
                src={ReactLogo}
                width={25}
                height={25}
                style={{ marginRight: 5 }}
                alt="Logo"
              />{" "}
              Web Development
            </Box>
            <Box marginTop={1}>
              <Typography
                fontFamily={"monospace"}
                sx={{ fontSize: 11 }}
                align="justify"
                style={{ textIndent: "2em" }}
              >
                Enthusiastic and eager React developer with a foundation in
                JavaScript. Learning React components, state management, and JSX
                syntax. Passionate about creating engaging user experiences.
                Committed to continuous growth and contributing to innovative
                projects. Ready to make a mark in the React community.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs
            sx={{
              border: 2,
              borderRadius: 2,
              borderColor: "green",
              padding: 1,
              "&:hover": { color: "white", background: "green" },
            }}
            fontSize={18}
            fontFamily={"monospace"}
          >
            <Box
              sx={{
                display: "flex",
                alignContent: "start",
                justifyContent: "start",
              }}
            >
              <img
                src={ReactLogo}
                width={25}
                height={25}
                style={{ marginRight: 5 }}
                alt="Logo"
              />{" "}
              Mobile Android Application Development
            </Box>
            <Box marginTop={1}>
              <Typography
                fontFamily={"monospace"}
                sx={{ fontSize: 11 }}
                align="justify"
                style={{ textIndent: "2em" }}
              >
                Enthusiastic and eager React developer with a foundation in
                JavaScript. Learning React components, state management, and JSX
                syntax. Passionate about creating engaging user experiences.
                Committed to continuous growth and contributing to innovative
                projects. Ready to make a mark in the React community.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs
            sx={{
              border: 2,
              borderRadius: 2,
              borderColor: "green",
              padding: 1,
              "&:hover": { color: "white", background: "green" },
            }}
            fontSize={18}
            fontFamily={"monospace"}
          >
            <Box
              sx={{
                display: "flex",
                alignContent: "start",
                justifyContent: "start",
              }}
            >
              <img
                src={ReactLogo}
                width={25}
                height={25}
                style={{ marginRight: 5 }}
                alt="Logo"
              />{" "}
              Software Application Development
            </Box>
            <Box marginTop={1}>
              <Typography
                fontFamily={"monospace"}
                sx={{ fontSize: 11 }}
                align="justify"
                style={{ textIndent: "2em" }}
              >
                Enthusiastic and eager React developer with a foundation in
                JavaScript. Learning React components, state management, and JSX
                syntax. Passionate about creating engaging user experiences.
                Committed to continuous growth and contributing to innovative
                projects. Ready to make a mark in the React community.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default About;
