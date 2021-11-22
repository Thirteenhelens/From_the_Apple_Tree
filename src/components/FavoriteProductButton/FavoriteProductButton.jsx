import { useState } from "react";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { use } from "passport";

function FavoriteProductButton({ product }) {
  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState(false);
  const products = useSelector((store) => store.products);

  const handleFavorite = () => {
    dispatch({ type: "ADD_FAVORITE", payload: product });
    setFavorite(!favorite);
  };

  const handleRemoveFavorite = () => {
    dispatch({ type: "REMOVE_FAVORITE", payload: product });
    setFavorite(!favorite);
  };

  return (
    <div>
      {favorite ? (
        <IconButton onClick={handleRemoveFavorite}>
          <FavoriteIcon sx={{ color: pink[500] }} />
        </IconButton>
      ) : (
        <IconButton onClick={handleFavorite}>
          <FavoriteBorderIcon sx={{ color: pink[500] }} />
        </IconButton>
      )}
    </div>
  );
}

export default FavoriteProductButton;
