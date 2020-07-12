import React from "react";
import avatar from "../images/avatar.jpg";
import Typed from "react-typed";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <Box>
        <Avatar src={avatar} alt="Muhammad Bilal" />
        <Typography variant="h4"></Typography>
      </Box>
    </>
  );
};

export default Header;
