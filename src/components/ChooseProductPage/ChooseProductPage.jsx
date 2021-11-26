import React from "react";
import "./ChooseProductPage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import ProductCardWithDesc from "../ProductCardWithcDesc/ProductCardWithDesc";
import CompareDevicesButton from "../CompareDevicesButton/CompareDevicesButton";

function ChooseProductPage() {
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.products);

  return (
    <div>
      <h1>Choose Devices</h1>
      <div className="compareButton">
        <CompareDevicesButton />
      </div>

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
