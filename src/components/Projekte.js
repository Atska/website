import React from "react";
import { ProjektKarte } from "./Projekt_Karte";
import Grid from "@material-ui/core/Grid";

import "./Projekte.css";

export const Projekte = () => {
  const names = [
    {
      name: "Conway",
      address: "https://github.com/Atska/Conways-Game-Of-Life",
    },
    { name: "Firegram", address: "https://github.com/Atska/firegram" },
    {
      name: "Maze",
      address: "https://atska.github.io/Pathfinding-and-Maze-Visualizer/",
    },
    { name: "website", address: "https://github.com/Atska/website/" },
  ];

  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      className="projekte_container"
      spacing={2}
    >
      {names.map((name) => {
        return (
          <Grid item>
            <ProjektKarte name={name.name} address={name.address} />
          </Grid>
        );
      })}
    </Grid>
  );
};
