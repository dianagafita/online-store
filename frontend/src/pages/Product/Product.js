import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../services/productServices";
import Price from "../../components/Price/Price";
import { useCart } from "../../hooks/useCart";

export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getById(id).then(setProduct);
  }, [id]);

  const handleAddTooCart = () => {
    addToCart(product);
    navigate("/cart");
  };
  return (
    <>
      {product && (
        <>
          <div className={classes.container}>
            <img
              className={classes.image}
              src={`${product.img}`}
              alt={product.name}
            />
            <div className={classes.details}>
              <div className={classes.header}>
                <span className={classes.name}>{product.name}</span>
              </div>
              <div className={classes.color}>
                <span>
                  Color: <strong>{product.colour}</strong>
                </span>
              </div>
              <div className={classes.memory}>
                <span>
                  Memory: <strong>{product.memory}</strong>
                </span>
              </div>
              <div className={classes.price}>
                <Price price={product.price} />
              </div>
              <button className={classes.button} onClick={handleAddTooCart}>
                Add To Cart
              </button>
            </div>
          </div>
          <div className={classes.description}>
            <h1>Details:</h1>
            {product.description}
          </div>
        </>
      )}
    </>
  );
}
