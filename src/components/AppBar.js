import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./AppBar.css";

export const AppBar = () => {
  const [title, setTitle] = useState("<About/>");
  return (
    <Grid item className="navbar">
      <div className="title">
        <Link className="btn" to="/">
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
        </Link>
      </div>
      <div>
        <Link className="btn" to="/about">
          <Button
            size="large"
            color="primary"
            variant="text"
            onClick={() => {
              setTitle("<About/>");
            }}
          >
            About
          </Button>
        </Link>
      </div>
      <div>
        <Link className="btn" to="/projekte">
          <Button
            color="primary"
            size="large"
            variant="text"
            onClick={() => {
              setTitle("<Projekte/>");
            }}
          >
            Projekte
          </Button>
        </Link>
      </div>
    </Grid>
  );
};
