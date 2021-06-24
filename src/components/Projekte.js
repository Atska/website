import React from "react";
import { ProjektKarte } from "./Projekt_Karte";
import Grid from "@material-ui/core/Grid";

import "./Projekte.css";

export const Projekte = () => {
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      className="projekte_container"
      spacing={2}
    >
      <Grid item>
        <ProjektKarte />
      </Grid>
      <Grid item>
        <ProjektKarte />
      </Grid>
      <Grid item>
        <ProjektKarte />
      </Grid>
      <Grid item>
        <ProjektKarte />
      </Grid>
      <Grid item>
        <ProjektKarte />
      </Grid>
      <Grid item>
        <ProjektKarte />
      </Grid>
    </Grid>
  );
};
