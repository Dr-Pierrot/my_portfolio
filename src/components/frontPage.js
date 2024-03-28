import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Profile from "./Profile";
import Content from "./Content";
import SideBar from "./SideBar";

const FrontPage = () => {
  const [selected, setSelected] = useState("about");

  return (
    <Grid
      container
      spacing={5}
      gap={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 3,
        paddingTop: 10,
      }}
    >
      <Grid item xs={"auto"}>
        <Profile />
      </Grid>
      <Grid item xs={"auto"}>
        <Content selected={selected} />
      </Grid>
      <Grid item xs={"auto"}>
        <SideBar selected={selected} setSelected={setSelected} />
      </Grid>
    </Grid>
  );
};

export default FrontPage;
