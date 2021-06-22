import React from "react";
import pic from "./pic.jpg";
import "./ProfileBar.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

export const ProfileBar = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-around"
      className="profile_container"
      noWrap
    >
      <Grid item>
        <img src={pic} alt="avatar" className="profile_pic"></img>
      </Grid>
      <Grid item className="identity">
        <Typography variant="h5">Binh Nguyen</Typography>
        <Typography variant="h4">Frontend Developer</Typography>
      </Grid>
      <Grid item className="contact">
        <Typography variant="button" className="contact_unit" noWrap>
          <HiLocationMarker className="icon" />
          Düren, Deutschland
        </Typography>
        <Typography variant="button" className="contact_unit" noWrap>
          <FiPhoneCall className="icon" />
          0176 / 73507879
        </Typography>
        <Typography variant="button" className="contact_unit" noWrap>
          <HiOutlineMail className="icon" /> Binh.Nguyen93@web.de
        </Typography>
        <Typography variant="button" noWrap>
          <a className="contact_unit" href={"https://github.com/Atska"}>
            <FaGithub className="icon" /> github.com/Atska
          </a>
        </Typography>
      </Grid>
      <Grid item className="about">
        <Typography>
          Search for the keywords to learn more about each warning. To ignore,
          add // eslint-disable-next-line to the line before.44Profile
          .......This defines the alignment along the main axis. It
        </Typography>
      </Grid>
    </Grid>
  );
};
