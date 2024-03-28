import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import self from "../assets/skull.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Profile = () => {
  const handleDownload = () => {
    const pdfPath = "/assets/CVJaycee.pdf"; // Updated path to PDF file
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "JayceeCapulongCV.pdf"; // Filename to download
    link.click();
  };

  return (
    <Box
      component={Paper}
      sx={{
        padding: 2,
        width: 250,
        textAlign: "center",
        display: "grid",
        boxShadow: 10,
      }}
      gap={2}
    >
      <Paper
        component={Box}
        sx={{
          width: "fit-content",
          justifySelf: "center",
          marginTop: -10,
          boxShadow: 5,
          marginBottom: 2,
        }}
      >
        <img
          src={self}
          alt="Profile"
          style={{ width: 150, height: 150, objectFit: "contain" }}
        />
      </Paper>
      <Typography fontFamily={"monospace"} variant="h5">
        Jaycee Capulong
      </Typography>
      <Typography
        fontFamily={"monospace"}
        sx={{
          fontSize: 10,
          background: "#C3C3C3",
          width: "fit-content",
          padding: 1,
          justifySelf: "center",
          borderRadius: 1,
        }}
      >
        Programmer
      </Typography>
      <Box>
        <Tooltip title="Jaycee Capulong">
          <IconButton
            size="large"
            href="https://www.facebook.com/PierrotDKlawn/"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Dr-Pierrot">
          <IconButton
            size="large"
            href="https://github.com/Dr-Pierrot"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Jaycee Capulong">
          <IconButton
            size="large"
            href="https://www.linkedin.com/in/jaycee-capulong-9a37922b9/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Grid container sx={{ background: "#C3C3C3", borderRadius: 2 }}>
        <Grid item xs={12} display={"flex"} padding={1} gap={1}>
          <Box sx={{ alignContent: "center" }}>
            <CallIcon />
          </Box>
          <Box>
            <Typography
              fontFamily={"monospace"}
              sx={{ fontSize: 7, textAlign: "start" }}
            >
              Contact No.
            </Typography>
            <Typography fontFamily={"monospace"} sx={{ fontSize: 11 }}>
              09468455810
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} display={"flex"} padding={1} gap={1}>
          <Box sx={{ alignContent: "center" }}>
            <EmailIcon />
          </Box>
          <Box>
            <Typography
              fontFamily={"monospace"}
              sx={{ fontSize: 7, textAlign: "start" }}
            >
              Email
            </Typography>
            <Typography fontFamily={"monospace"} sx={{ fontSize: 11 }}>
              jayceecapulong.151@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} display={"flex"} padding={1} gap={1}>
          <Box sx={{ alignContent: "center" }}>
            <HomeIcon />
          </Box>
          <Box>
            <Typography
              fontFamily={"monospace"}
              sx={{ fontSize: 7, textAlign: "start" }}
            >
              Address
            </Typography>
            <Typography fontFamily={"monospace"} sx={{ fontSize: 11 }}>
              Capas, Tarlac, Philippines
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} display={"flex"} padding={1} gap={1}>
          <Box sx={{ alignContent: "center" }}>
            <CalendarMonthIcon />
          </Box>
          <Box>
            <Typography
              fontFamily={"monospace"}
              sx={{ fontSize: 7, textAlign: "start" }}
            >
              Birthday
            </Typography>
            <Typography fontFamily={"monospace"} sx={{ fontSize: 11 }}>
              11/05/2001{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{ background: "#30322F" }}
        onClick={handleDownload}
      >
        <Typography fontFamily={"monospace"}>View CV</Typography>
      </Button>
    </Box>
  );
};

export default Profile;
