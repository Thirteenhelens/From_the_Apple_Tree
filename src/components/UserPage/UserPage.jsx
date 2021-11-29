import "./UserPage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProductCardNoDesc from "../ProductCardNoDesc/ProductCardNoDesc";
import CompareDevicesButton from "../CompareDevicesButton/CompareDevicesButton";

function UserPage() {
  useEffect(() => {
    dispatch({ type: "GET_FAVORITES" });
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const favorites = useSelector((store) => store.favorites);

  return (
    <div 
    // className="userPageBody"
    >
      <div>
        <h1 className="welcomeText"> Welcome, {user.username}!</h1>
      </div>
      {favorites.length > 0 ? (
        <div>
          <Box className="" sx={{ flexGrow: 2, ml: 10, mr: 10 }}>
            <CompareDevicesButton />
            <br />
            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              {favorites?.map((favorite) => {
                return (
                  <Grid item xs={4} key={favorite.id}>
                    <ProductCardNoDesc product={favorite} key={favorite.id} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      ) : (
        <Typography variant="h5" className="emptyDevicesText">
          <br />
          It looks Like you don't have any favorite devices! Please click {""}
          <Link to="/choose">here</Link> to browse devices to choose from.
        </Typography>
      )}
    </div>
  );
}

export default UserPage;
