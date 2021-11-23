import "./UserPage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardNoDesc from "../ProductCardNoDesc/ProductCardNoDesc";
import CompareDevicesButton from "../CompareDevicesButton/CompareDevicesButton";

function UserPage() {
  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS" });
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const favorites = useSelector((store) => store.favorites);

  return (
    <>
      <div>
        <h2 className="welcomeText">Welcome, {user.username}!</h2>
        <CompareDevicesButton />
      </div>
      {favorites ? (
        <Box sx={{ flexGrow: 1, m: 2 }}>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {favorites?.map((favorite) => {
              return (
                <Grid item xs={4} key={favorite.id + 100}> 
                {/* YOU NEED TO CHANGE THIS ASAP */}
                  <ProductCardNoDesc product={favorite} key={favorite.id} />
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
