import React from "react";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

const NavBar = () => {
  return (
    <Box component="nav">
      <AppBar position="static" style={{ background: "#000" }}>
        <Toolbar>
          <IconButton>
            <ArrowBack style={{ color: "#4caf50" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <h1>Nav Bar Component</h1>
    </Box>
  );
};

export default NavBar;
