import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import "./About.css";

export const About = () => {
  return (
    <Grid
      container
      className="main_container"
      justify="space-between"
      direction="column"
    >
      <Grid item className="content">
        <Typography gutterBottom className="h4" variant="h4">
          Hello my name is <b>Binh</b> and I am an aspiring... <br></br>
        </Typography>
        <Typography gutterBottom className="frontend" variant="h3">
          Frontend Developer ✌️
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center" className="skills">
        <Grid item>
          <Typography>My stack</Typography>
        </Grid>
        <Grid
          className="skill_container"
          container
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item>
            <Tooltip title="Javascript">
              <img
                className="logo"
                alt="Javascript"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Typescript">
              <img
                className="logo"
                alt="Typescript"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Python">
              <img
                className="logo"
                alt="Python"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/240px-Python-logo-notext.svg.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="ReactJS">
              <img
                className="logo"
                alt="ReactJs"
                src="https://png2.cleanpng.com/sh/0620947c9142f329ccfa004dfd5b0a81/L0KzQYm3VsA1N5p0iZH0aYP2gLBuTgJmaZR5RdxqdnH2c8PwkQQuaZ9sjd5qcnr2Pbr2jvlkNZJ5h982NXK0RYXphcY6PGg5Tak3M0S6QYq7UcgyPWM9SaQ7M0S1RoGBUb5xdpg=/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="NodeJS">
              <img
                className="logo"
                alt="NodeJs"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1280px-Node.js_logo_2015.svg.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="HTML">
              <img
                className="logo"
                alt="Html"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="CSS">
              <img
                className="logo"
                alt="CSS"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/170px-CSS3_logo_and_wordmark.svg.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Bootstrap">
              <img
                className="logo"
                alt="Bootstrap"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/301px-Bootstrap_logo.svg.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="MongoDB">
              <img
                className="logo"
                alt="MongoDB"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Git">
              <img
                className="logo"
                alt="Git"
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              ></img>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="MaterialUI">
              <img
                className="logo"
                alt="MaterialUI"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Logo_material_design.svg/302px-Logo_material_design.svg.png"
              ></img>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
