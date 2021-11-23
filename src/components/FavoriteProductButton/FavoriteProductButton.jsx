import { useState } from "react";
import React, { useEffect } from "react";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function FavoriteProductButton({ product }) {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const favorites = useSelector((store) => store.favorites);

  const inFavorites = () => {
    for (let fav of favorites) {
      if (fav.id === product.id) {
        setFavorite(true);
      }
    }
  };

  useEffect(() => {
    inFavorites();
  }, [favorites]);

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
