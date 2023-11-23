import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CartModal.module.css";
import { useCart } from "../hooks/useCart";
import { Avatar, Button, Drawer, List, Progress } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Price from "./Price/Price";
import { ImBin } from "react-icons/im";
import FavIcon from "./FavIcon/FavIcon";

const CartModal = ({ show, handleClose, cart }) => {
  const navigate = useNavigate();
  const { removeFromCart, changeQuantiy } = useCart();
  const totalPrice = 3000;
  const remainingPrice = totalPrice - cart.totalPrice;
  const percentage =
    Number(cart.totalPrice) >= totalPrice
      ? 100
      : ((cart.totalPrice / totalPrice) * 100).toFixed(2);

  return (
    <>
      <Drawer
        className={classes.cont}
        title={<div className={classes.customTitle}>Yout Cart</div>}
        placement="right"
        onClose={handleClose}
        open={show}
        width={300}
        closeIcon={<div className={classes.close}>X</div>}
        footer={
          <div className={classes.footer}>
            <Button
              className={classes.button}
              key="back"
              onClick={() => {
                navigate("/cart");
                handleClose();
              }}
            >
              Go To Cart
            </Button>
          </div>
        }
        style={{ marginBottom: "-4rem" }}
      >
        <Progress
          style={{ position: "relative", top: "-1.85rem" }}
          className={classes.progress}
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          percent={percentage}
          showInfo={false}
          size={[260, 5]}
        />
        {percentage === 100 ? (
          <p
            style={{ fontSize: "10px", marginTop: "-40px", marginLeft: "10px" }}
          >
            <FaCheckCircle style={{ color: "green", marginRight: "10px" }} />
            {`Free Standard Shipping`}
          </p>
        ) : (
          <p
            style={{ fontSize: "11px", marginTop: "-40px", marginLeft: "10px" }}
          >
            <IoMdCloseCircle
              style={{ color: "darkred", marginRight: "5px", fontSize: "12px" }}
            />
            {`Add $${remainingPrice.toFixed(2)} for Free Standard Shipping`}
          </p>
        )}
        <List
          itemLayout="horizontal"
          dataSource={cart.items}
          renderItem={(item) => (
            <List.Item className={classes.item}>
              <List.Item.Meta
                avatar={<Avatar src={item.prod.img} className={classes.img} />}
                title={
                  <a href={`/products/${item.prod.id}`}>{item.prod.name}</a>
                }
                description={
                  <div className={classes.all}>
                    <span>{item.prod.colour}</span>
                    <div className={classes.price}>
                      <Price price={item.price}>{item.price}</Price>
                    </div>

                    <div className={classes.actions}>
                      <button
                        className={classes.removeBtn}
                        onClick={() => removeFromCart(item.prod.id)}
                      >
                        <ImBin className={classes.bin} />
                      </button>
                      <div className={classes.favoriteIcon}>
                        <FavIcon
                          id={item.prod.id}
                          initialFavoriteState={item.prod.favorite}
                        />
                      </div>
                    </div>
                  </div>
                }
              />
              {/* <QuantitySelector item={item} changeQuantity={changeQuantity} /> */}
              <div className={classes.selectQ}>
                Qty:
                <select
                  className={classes.select}
                  value={item.quanity}
                  onChange={(e) => changeQuantiy(item, Number(e.target.value))}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
            </List.Item>
          )}
        />
        <div className={classes.span}>
          <span>Total</span>
          <Price price={cart.totalPrice}>{cart.totalPrice}</Price>
        </div>
      </Drawer>
    </>
  );
};
export default CartModal;
