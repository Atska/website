import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Switch, Route } from "react-router-dom";
import { AppBar } from "./AppBar.js";
import { Projekte } from "./Projekte.js";
import { About } from "./About.js";
import "./MainBar.css";

export const MainBar = () => {
  return (
    <Grid container direction="column" alignItems="center" className="main_bar">
      <AppBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projekte">
          <Projekte />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Grid>
  );
};
