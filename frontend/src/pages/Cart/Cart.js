import React from "react";
import { useCart } from "../../hooks/useCart";
import classes from "./Cart.module.css";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";
import NotFound from "../Notfound/NotFound";
import QuantitySelector from "../../components/QuantitySel/QuantitySel";

export default function Cart() {
  const { cart, removeFromCart, changeQuantiy } = useCart();

  const changeQuantity = (item, newQuantity) => {
    changeQuantiy(item, newQuantity);
  };

  return (
    <div className={classes.page}>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" fontSize="1.5rem" />
      {cart.items.length === 0 ? (
        <NotFound message="The Cart Is Empty" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map((item) => (
              <li key={item.prod.id}>
                <div>
                  <img src={`${item.prod.img}`} alt={item.prod.name} />
                </div>
                <div>
                  <Link
                    className={classes.name}
                    to={`/products/${item.prod.id}`}
                  >
                    {item.prod.name}
                  </Link>
                </div>
                <div>
                  <QuantitySelector
                    item={item}
                    changeQuantity={changeQuantity}
                  />
                </div>
                <div className={classes.price}>
                  <Price price={item.price} />
                </div>

                <div>
                  <button
                    className={classes.removeBtn}
                    onClick={() => removeFromCart(item.prod.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={classes.checkout}>
        <div>
          <div className={classes.foods_count}>{cart.totalCount}</div>
          <div className={classes.total_price}>
            <Price price={cart.totalPrice} />
          </div>
        </div>
        <Link to="/checkout">Proceed To Checkout</Link>
      </div>
    </div>
  );
}
