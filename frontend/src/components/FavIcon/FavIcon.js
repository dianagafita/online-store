import React, { useState } from "react";
import classes from "../../components/Thumbnails/Thumbnails.module.css";
import { IoMdHeart } from "react-icons/io";
import { updateFavorite } from "../../services/productServices"; // Update the path

export default function FavIcon({ id, initialFavoriteState }) {
  const [isFavorited, setIsFavorited] = useState(initialFavoriteState);

  const handleClick = async (productId) => {
    try {
      setIsFavorited(!isFavorited);
      await updateFavorite(productId, isFavorited);
    } catch (error) {
      console.error("Failed to update favorite:", error);
    }
  };

  return (
    <span
      onClick={() => handleClick(id)}
      className={`${classes.favorite} ${isFavorited ? "" : classes.not}`}
    >
      <IoMdHeart style={{ fontSize: "1.2rem" }} />
    </span>
  );
}
