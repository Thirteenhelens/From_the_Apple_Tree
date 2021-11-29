import { useState } from "react";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteProductButton from "../FavoriteProductButton/FavoriteProductButton";

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
