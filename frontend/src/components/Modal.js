import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CartModal.module.css";
import { useCart } from "../hooks/useCart";
import { Avatar, Button, Drawer, List, Menu, Progress } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Price from "./Price/Price";
import { ImBin } from "react-icons/im";
import FavIcon from "./FavIcon/FavIcon";
import MegaMenu from "./NavItems/NavItems";
import "./Modal.css";
import { logout } from "../services/userService";
const Modal = ({ show, handleClose, cart }) => {
  const navigate = useNavigate();
  const { removeFromCart, changeQuantiy } = useCart();
  const totalPrice = 3000;
  const remainingPrice = totalPrice - cart.totalPrice;

  const percentage =
    Number(cart.totalPrice) >= totalPrice
      ? 100
      : ((cart.totalPrice / totalPrice) * 100).toFixed(2);

  function handleMenuClick(item) {
    if (item.key === "logout") {
      logout();
      navigate("/login");
    }

    navigate(`/${item.key}`);
    handleClose(true);
  }

  return (
    <>
      <Drawer
        className={classes.cont}
        title={"Products"}
        placement="left"
        classNames="draw"
        onClose={handleClose}
        open={show}
        style={{ marginTop: "2.6rem" }} // Move the Drawer 20 pixels down
        width={200}
      >
        <div className="cont">
          <Menu
            onClick={handleMenuClick}
            items={[{ label: "Show All", key: "allProducts" }]}
          />
          <Menu
            onClick={handleMenuClick}
            items={[
              { label: "Phones", type: "group" },
              { label: "All Phones", key: "allPhones" },
              { label: "Apple", key: "apple" },
              { label: "Samsung", key: "samsungPhone" },
              { label: "Huawei", key: "huaweiPhone" },
            ]}
          />
          <Menu
            onClick={handleMenuClick}
            items={[
              { label: "Laptops", type: "group" },
              { label: "All Laptops", key: "allLaptops" },
              { label: "Mac", key: "mac" },
              { label: "Samsung", key: "samsungLaptop" },
              { label: "Huawei", key: "huaweiLaptop" },
            ]}
          />
        </div>
      </Drawer>
    </>
  );
};
export default Modal;
