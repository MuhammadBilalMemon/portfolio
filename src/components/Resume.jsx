import React from "react";
import NavBar from "./NavBar";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const resumeStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
  },
  timeLineItem: {
    padding: "1rem",
    BorderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "auto",
    margin: "2rem auto",
    fontSize: "1rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "1rem 0",
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = resumeStyles();

  return (
    <>
      <NavBar />
      <Box componet="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working Experience
        </Typography>
        <Box componet="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Company Name
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores illo cumque ex obcaecati veritatis quia a sed
              quibusdam. Sequi, voluptate!
            </Typography>
          </Box>
        </Box>
        <Box componet="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              HTML & CSS
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Company Name
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores illo cumque ex obcaecati veritatis quia a sed
              quibusdam. Sequi, voluptate!
            </Typography>
          </Box>
        </Box>
        <Box componet="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              React JS
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Company Name
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores illo cumque ex obcaecati veritatis quia a sed
              quibusdam. Sequi, voluptate!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
