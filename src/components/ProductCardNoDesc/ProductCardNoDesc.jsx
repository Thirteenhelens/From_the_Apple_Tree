import { useState } from "react";
import Card from "@mui/material/Card";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ProductCardNoDesc({ product }) {
  // Add & Remove device to & from favorites
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    console.log("Adding to favorites", product.id);
    setFavorite(!favorite);
  };
  // End add & remove device to & from favorites

  // Add & Remove device to & from compare
  const [checked, setChecked] = useState(false);
  const removeFromCompare = () => {
    console.log(`adding`);
    setChecked(!checked);
  };
  const addToCompare = () => {
    console.log(`removing`);
    setChecked(!checked);
  };
  // End add & remove device to & from compare

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={product.product_name}
        subheader={product.product_price}
      />
      <CardMedia
        component="img"
        height="250"
        image={product.product_image}
        alt={product.product_name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.product_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
          {favorite ? (
            <FavoriteIcon sx={{ color: pink[500] }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: pink[500] }} />
          )}
        </IconButton>

        {checked ? (
          <>
            {" "}
            <Checkbox checked={checked} onChange={addToCompare} />{" "}
            <p>Remove from compare</p>{" "}
          </>
        ) : (
          <>
            {" "}
            <Checkbox checked={checked} onChange={removeFromCompare} />{" "}
            <p>Add to compare</p>{" "}
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default ProductCardNoDesc;
