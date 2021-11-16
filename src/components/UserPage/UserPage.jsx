import "./UserPage.css";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCardNoDesc from "../ProductCardNoDesc/ProductCardNoDesc";
import CompareDevicesButton from "../CompareDevicesButton/CompareDevicesButton";

function UserPage() {
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.products);

  return (
    <>
      <div>
        <h2 className="welcomeText">Welcome, {user.username}!</h2>
        <CompareDevicesButton />
      </div>
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
