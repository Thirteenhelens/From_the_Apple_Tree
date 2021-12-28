import { useState } from "react";
import { useDispatch } from "react-redux";
import FavoriteProductButton from "../FavoriteProductButton/FavoriteProductButton";

// MUI IMPORTS
import {
  Card,
  Checkbox,
  CardMedia,
  Typography,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

function ProductCardNoDesc({ product }) {
  const dispatch = useDispatch();
  // Add & Remove device to & from favorites

  // Add & Remove device to & from compare
  const [checked, setChecked] = useState(false);
  const addToCompare = () => {
    console.log(`adding`);
    dispatch({ type: "ADD_TO_COMPARE", payload: product });
    setChecked(!checked);
  };
  const removeFromCompare = () => {
    console.log(`removing`);
    dispatch({ type: "REMOVE_FROM_COMPARE", payload: product });
    setChecked(!checked);
  };
  // End add & remove device to & from compare

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader title={product.name} subheader={product.price} />
      <CardMedia
        component="img"
        height="350"
        image={product.image_url}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteProductButton product={product} />
        {checked ? (
          <>
            <Checkbox checked={checked} onChange={removeFromCompare} />
            <p>Remove from compare</p>
          </>
        ) : (
          <>
            <Checkbox checked={checked} onChange={addToCompare} />
            <p>Add to compare</p>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default ProductCardNoDesc;
