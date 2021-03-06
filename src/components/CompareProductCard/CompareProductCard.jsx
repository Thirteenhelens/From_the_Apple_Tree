import { useState } from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteProductButton from "../FavoriteProductButton/FavoriteProductButton";

function CompareProductCard({ product }) {
  const dispatch = useDispatch();
  // Add & Remove device to & from favorites
  const [favorite, setFavorite] = useState(true);
  const handleFavorite = () => {
    console.log("Adding to favorites", product.id);
    setFavorite(!favorite);
  };
  // End add & remove device to & from favorites

  // Remove device from compare
  const removeFromCompare = () => {
    dispatch({ type: "REMOVE_FROM_COMPARE", payload: product });
  };
  // End add & remove device to & from compare
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={product.name} subheader={product.price} />
      <CardMedia
        component="img"
        height="250"
        image={product.image_url}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.product_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteProductButton product={product} />
        <Button
          variant="contained"
          onClick={removeFromCompare}
          startIcon={<CloseIcon />}
        >
          Remove from compare
        </Button>
      </CardActions>
    </Card>
  );
}

export default CompareProductCard;
