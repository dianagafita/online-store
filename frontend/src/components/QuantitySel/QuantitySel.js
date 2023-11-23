import React from "react";
import classes from "./QuantitySel.module.css";

function QuantitySelector({ item, changeQuantity }) {
  const handleIncrement = () => {
    changeQuantity(item, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      changeQuantity(item, item.quantity - 1);
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={handleDecrement}>
        <span className={classes.q}>-</span>
      </button>
      <span>{item.quantity}</span>
      <button className={classes.button} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
