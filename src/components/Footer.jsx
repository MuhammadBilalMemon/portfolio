import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import { Facebook, Twitter, Instagram } from "@material-ui/icons";

const footerStyles = makeStyles({
  roort: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWithd: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = footerStyles();
  return (
    <BottomNavigation>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<Twitter />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<Instagram />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default Footer;
