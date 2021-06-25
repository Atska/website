import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { FaHandPeace } from "react-icons/fa";
import "./About.css";

export const About = () => {
  return (
    <Grid container className="main_container">
      <Grid item className="content">
        <Typography gutterBottom className="h4" variant="h4">
          Hallo, mein Name ist <b>Binh</b> und ich bin ein<br></br>
        </Typography>
        <Typography gutterBottom className="frontend" variant="h3">
          <b>Frontend Developer</b> <FaHandPeace />
        </Typography>
      </Grid>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className="skills">
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Mein Stack
          </Typography>
        </Grid>
        <Grid
          className="skill_container"
          container
          alignItems="center"
          justify="center"
          spacing={2}>
          <Grid item>
            <Tooltip title="Javascript">
              <img
                className="logo"
                alt="Javascript"
                src="static/Javascript.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Typescript">
              <img
                className="logo"
                alt="Typescript"
                src="static/Typescript.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Python">
              <img className="logo" alt="Python" src="static/Python.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="ReactJS">
              <img className="logo" alt="ReactJs" src="static/React.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="NodeJS">
              <img className="logo" alt="NodeJs" src="static/NodeJs.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="HTML">
              <img className="logo" alt="Html" src="static/html.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="CSS">
              <img className="logo" alt="CSS" src="static/Css.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Bootstrap">
              <img
                className="logo"
                alt="Bootstrap"
                src="static/bootstrap.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="MongoDB">
              <img
                className="logo"
                alt="MongoDB"
                src="static/mongodb.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Git">
              <img className="logo" alt="Git" src="static/git.png"></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="MaterialUI">
              <img
                className="logo"
                alt="MaterialUI"
                src="static/MaterialUI.png"></img>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
