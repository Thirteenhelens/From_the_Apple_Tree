import "./UserPage.css";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCardNoDesc from "../ProductCardNoDesc/ProductCardNoDesc";
import { Button } from "@mui/material";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.products);

  return (
    <>
      <div>
        <h2 className="welcomeText">Welcome, {user.username}!</h2>
      </div>

      <Button variant="outlined">Compare Devices</Button>
      <Button disabled variant="outlined">
        Compare Devices
      </Button>
      <br />
      {products ? (
        <Box sx={{ flexGrow: 1, m: 2 }}>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {products?.map((product) => {
              return (
                <Grid item xs={4} key={product.id}>
                  <ProductCardNoDesc product={product} key={product.id} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <p className="emptyDevicesText">
          <br />
          It looks Like you don't have any favorite devices! Click{" "}
          <Link to="/info">here</Link> to browse.
        </p>
      )}
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
