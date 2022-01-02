import "./AboutPage.css";
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function AboutPage() {
  return (
      <Grid container>
        {/* Start Container */}
        <Grid item xs={12}>
          <h1>A bit about this app</h1>
        </Grid>
        {/* End grid item #1 */}
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ m: 3 }}>
            <Typography sx={{ p: 2 }}>
              Made by: Jack B.
              <br />
              <br />
              From the Apple Tree is an application aimed at the non-tech-savvy
              Apple user on the hunt for a new computer. With an account, a user
              can peruse Apple’s product lineup through a simple table view, or
              recommend devices through a questionnaire. Users also have the
              ability to compare two devices, and ‘favorite’ ones that they are
              interested in to view or compare later on. This app helps the user
              navigate the confusing world of buying a computer and can help
              save them big in the long run.
              <br />
              <br />
              With the help of my friends at Prime, My instructors, Family, and
              my partner, Emile.
              <br />
              <br />
              Thanks to you all <FavoriteBorderIcon />
            </Typography>
          </Paper>
        </Grid>
        {/* End grid item #2 */}
      </Grid>
  );
}

export default AboutPage;
