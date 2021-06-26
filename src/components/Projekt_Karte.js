import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./Projekt_Karte.css";

export const ProjektKarte = (props) => {
  const { name, address } = props;
  return (
    <div className="card_container">
      <CardActionArea>
        <a href={address}>
          <img class="image" alt="1" src={`/static/${name}.png`}></img>
        </a>
      </CardActionArea>
    </div>
  );
};
