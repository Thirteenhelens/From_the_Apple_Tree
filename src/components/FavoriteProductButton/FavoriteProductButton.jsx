import { useState } from "react";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function FavoriteProductButton({ product }) {
  // filter(selectedProduct => action.payload.id !== selectedProduct.id);
  // favorites.filter(favorite)

  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState(false);

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
