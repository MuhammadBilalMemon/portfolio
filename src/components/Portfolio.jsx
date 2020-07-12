import React from "react";
import NavBar from "./NavBar";

import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import project1 from "../images/portfolio-sample.jpg";

const portfolioStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    // margin: "3rem",
    margin: "3rem auto",
  },
});

const Portfolio = () => {
  const classes = portfolioStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <NavBar />

      <Grid container justify="center">
        {/* Project No 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus incidunt facere assumenda ducimus eos similique,
                  eaque impedit provident! Sapiente nihil ipsum quae dolor
                  placeat? Explicabo sed aperiam officia voluptatum illum!
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project No 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus incidunt facere assumenda ducimus eos similique,
                  eaque impedit provident! Sapiente nihil ipsum quae dolor
                  placeat? Explicabo sed aperiam officia voluptatum illum!
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project No 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus incidunt facere assumenda ducimus eos similique,
                  eaque impedit provident! Sapiente nihil ipsum quae dolor
                  placeat? Explicabo sed aperiam officia voluptatum illum!
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project No 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus incidunt facere assumenda ducimus eos similique,
                  eaque impedit provident! Sapiente nihil ipsum quae dolor
                  placeat? Explicabo sed aperiam officia voluptatum illum!
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
