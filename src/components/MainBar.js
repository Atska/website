import React from "react";
import Grid from "@material-ui/core/Grid";
import { Switch, Route } from "react-router-dom";
import { AppBar } from "./AppBar.js";
import { Projekte } from "./Projekte.js";
import { About } from "./About.js";
import "./MainBar.css";

export const MainBar = () => {
  return (
    <Grid container direction="column" className="main_bar">
      <AppBar />
      <Switch>
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
