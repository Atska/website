import React from "react";
import "./ProfileBar.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FaCloudDownloadAlt } from "react-icons/fa";
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
      justify="space-evenly"
      className="profile_container"
      noWrap>
      <Grid item>
        <img src="/pic.png" alt="avatar" className="profile_pic"></img>
      </Grid>
      <Grid item className="identity">
        <Typography variant="h4">Binh Nguyen</Typography>
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
          <HiOutlineMail className="icon" />
          <a href="mailto:Binh.Nguyen93@web.de">Binh.Nguyen93@web.de</a>
        </Typography>
        <Typography variant="button" noWrap>
          <a className="contact_unit" href={"https://github.com/Atska"}>
            <FaGithub className="icon" /> github.com/Atska
          </a>
        </Typography>
      </Grid>
      <Grid item className="about">
        <Typography>
          Ursprünglich komme ich aus den Wirtschaftswissenschaften, habe jedoch
          gegen Ende des Studiums das Programmieren entdeckt und lieben gelernt.
          Meine Reise begann mit simplen Pythonbots und ist mittlerweise beim
          Frontend angekommen. Ich genieße es simple, aber stylishe Apps zu
          bauen. Mein Lieblinge sind momentan Typescript und React.
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" size="small" variant="outlined">
          <FaCloudDownloadAlt href="CV.pdf" className="icon" />
          <a className="CV" href="CV.pdf">
            Lebenslauf
          </a>
        </Button>
      </Grid>
    </Grid>
  );
};
