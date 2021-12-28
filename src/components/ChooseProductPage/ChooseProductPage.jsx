import React from "react";
import "./ChooseProductPage.css";
import ProductCardWithDesc from "../ProductCardWithcDesc/ProductCardWithDesc";
import CompareDevicesButton from "../CompareDevicesButton/CompareDevicesButton";

// MUI IMPORTS
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";

function ChooseProductPage() {
  const products = useSelector((store) => store.products);

  return (
    <div>
      <h1>Browse Devices</h1>

      <Box className="" sx={{ flexGrow: 2, ml: 10, mr: 10 }}>
        <div className="compareButton">
          <CompareDevicesButton />
        </div>
        <br />

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
                <ProductCardWithDesc product={product} key={product.id} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default ChooseProductPage;
