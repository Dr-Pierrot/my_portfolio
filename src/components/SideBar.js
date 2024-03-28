import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const SideBar = ({ selected, setSelected }) => {
  return (
    <Box
      component={Paper}
      sx={{ width: "fit-content", marginTop: -5, padding: 2, boxShadow: 10 }}
    >
      <Grid container>
        <Grid item xs>
          <List>
            <ListItem sx={{ display: "grid", gap: 2 }}>
              <ListItemButton
                alignItems="center"
                sx={{
                  display: "grid",
                  justifyItems: "center",
                  border: 2,
                  borderRadius: 2,
                  borderColor: "#343734",
                  "&:hover": {
                    bgcolor: "#343734",
                    color: "white",
                  },
                  background: selected === "about" ? "#343734" : "",
                  color: selected === "about" ? "white" : "black",
                  boxShadow: 5,
                }}
                onClick={() => setSelected("about")}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                ></ListItemIcon>
                <PersonOutlineIcon />
                <ListItemText primary="About" />
              </ListItemButton>
              <ListItemButton
                alignItems="center"
                sx={{
                  display: "grid",
                  justifyItems: "center",
                  border: 2,
                  borderRadius: 2,
                  borderColor: "#343734",
                  "&:hover": {
                    bgcolor: "#343734",
                    color: "white",
                  },
                  background: selected === "resume" ? "#343734" : "",
                  color: selected === "resume" ? "white" : "black",
                  boxShadow: 5,
                }}
                onClick={() => setSelected("resume")}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                ></ListItemIcon>
                <PersonOutlineIcon />
                <ListItemText primary="Resume" />
              </ListItemButton>
              <ListItemButton
                alignItems="center"
                sx={{
                  display: "grid",
                  justifyItems: "center",
                  border: 2,
                  borderRadius: 2,
                  borderColor: "#343734",
                  "&:hover": {
                    bgcolor: "#343734",
                    color: "white",
                  },
                  background: selected === "portfolio" ? "#343734" : "",
                  color: selected === "portfolio" ? "white" : "black",
                  boxShadow: 5,
                }}
                onClick={() => setSelected("portfolio")}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                ></ListItemIcon>
                <PersonOutlineIcon />
                <ListItemText primary="Portfolio" />
              </ListItemButton>
              <ListItemButton
                alignItems="center"
                sx={{
                  display: "grid",
                  justifyItems: "center",
                  border: 2,
                  borderRadius: 2,
                  borderColor: "#343734",
                  "&:hover": {
                    bgcolor: "#343734",
                    color: "white",
                  },
                  background: selected === "contact" ? "#343734" : "",
                  color: selected === "contact" ? "white" : "black",
                  boxShadow: 5,
                }}
                onClick={() => setSelected("contact")}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                ></ListItemIcon>
                <PersonOutlineIcon />
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideBar;
