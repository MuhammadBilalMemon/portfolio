import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  Drawer,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import avatar from "../images/avatar.jpg";

// Styles
const navStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const genericListIcons = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portrolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    listPath: "/contact",
  },
];

const NavBar = () => {
  const [visible, setvisible] = useState({
    left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setvisible({ ...visible, [slider]: open });
  };

  const classes = navStyles();

  const sideBar = () => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider("left", false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Muhammad Bilal" />
      <Divider />
      <List>
        {genericListIcons.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.listPath}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#000" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("left", true)}>
              <ArrowBack style={{ color: "#4caf50" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#a5d6a7" }}>
              Porfolio
            </Typography>
            <Drawer
              anchor="left"
              open={visible.left}
              onClose={toggleSlider("left", false)}
            >
              {sideBar()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
