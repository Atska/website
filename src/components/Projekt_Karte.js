import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./Projekt_Karte.css";

export const ProjektKarte = () => {
  return (
    <div className="card_container">
      <CardActionArea>
        {" "}
        <img class="image" alt="1" src="/kek.png"></img>
      </CardActionArea>
    </div>
  );
};
