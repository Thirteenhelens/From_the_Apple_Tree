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

function ProductCardNoDesc() {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    console.log("Clicked fav");
    setFavorite(!favorite);
  };

  const [compare, setCompare] = useState(false);
  const handleCompare = () => {
    console.log("Clicked compare");
    setCompare(!compare);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Product Name" subheader="$1000" />
      <CardMedia
        component="img"
        height="250"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2018%2F11%2Fmacbook-air-2108-hero2-100779122-orig.jpeg&f=1&nofb=1"
        alt="MacBook Air"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Product Description
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
          {favorite ? (
            <FavoriteIcon sx={{ color: pink[500] }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        <Checkbox onClick={handleCompare} />
        {compare ? <p>Remove from compare</p> : <p>Add to compare</p>}
      </CardActions>
    </Card>
  );
}

export default ProductCardNoDesc;
