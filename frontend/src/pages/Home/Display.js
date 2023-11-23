import React from "react";
import classes from "./Home.module.css";
import Price from "../../components/Price/Price";
import FavIcon from "../../components/FavIcon/FavIcon";
import { Link } from "react-router-dom";
export default function Display({ product }) {
  return (
    <li key={product.id} className={classes.container}>
      <div className={classes.content}>
        <Link to={`/products/${product.id}`} className={classes.link}>
          <img
            className={classes.prodImg}
            src={product.img}
            alt={product.name}
          />
          <div className={classes.info}>
            <div className={classes.productName}>{product.name}</div>
          </div>
        </Link>
        <div className={classes.favoriteIcon}>
          <FavIcon id={product.id} initialFavoriteState={product.favorite} />
        </div>
        <div className={classes.additionalInfo}>
          <span className={classes.colour}>
            <span>Color: </span>
            {product.colour}
          </span>
          <div className={classes.price}>
            <Price price={product.price} />
          </div>
        </div>
      </div>
    </li>
  );
}
