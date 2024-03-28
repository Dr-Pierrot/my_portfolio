import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    if(window.confirm('Send the Message?')){
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');}
  }
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
          borderColor: "#d3d3d3",
          border:2,
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
        <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: "100%", gap: 3 }}>
          <TextField required variant="standard" label="Name" value={name} onChange={(e)=>setName(e.currentTarget.value)} />
          <TextField required variant="standard" label="Email" type="email" value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />
          <TextField required variant="standard" multiline label="Message" value={message} onChange={(e)=>setMessage(e.currentTarget.value)}/>
          <Button variant="outlined" type="submit" sx={{ alignSelf: "start", '&:hover':{transform:'scale(1.1)'}, color:'#232623'}} >
            Submit
          </Button>
        </FormControl>
        </form>
        
      </Box>
    </Box>
  );
};
export default Contact;
