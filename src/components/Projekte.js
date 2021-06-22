import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Projekte.css";

export const Projekte = () => {
  return (
    <Grid container className="projekte_container">
      <h1>Projekte Hello</h1>
      <Button>Hallo Welt</Button>
    </Grid>
  );
};
