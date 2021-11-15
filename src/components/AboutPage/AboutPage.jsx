import React from "react";
import './AboutPage.css';
import { Paper } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
      <div>
        <h2>A little bit about this app:</h2>
      </div>
      <div className="container">
        <Paper elevation={4}>
          <p>
            From the Apple Tree is an application aimed at the non-tech-savvy
            Apple user on the hunt for a new computer. With an account, a user
            can peruse Apple’s product lineup through a simple table view, or
            recommend devices through a questionnaire. Users also have the
            ability to compare two devices, and ‘favorite’ ones that they are
            interested in to view or compare later on. This app helps the user
            navigate the confusing world of buying a computer and can help save
            them big in the long run.
          </p>
        </Paper>
      </div>

      <div className="thanksContainer">
        <p>Made by: Jack B.</p>
        <p>
          With the help of my friends at Prime, My instructors, Family, and my
          partner, Emile.
          <br />
          Thanks to you all <FavoriteBorderIcon />
        </p>
      </div>

    </>
  );
}

export default AboutPage;
