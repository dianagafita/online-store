import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CartModal.module.css";
import { useCart } from "../hooks/useCart";
import { Drawer, Menu } from "antd";

import "./Modal.css";
import { logout } from "../services/userService";

const Modal = ({ show, handleClose }) => {
  const navigate = useNavigate();

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
        style={{ marginTop: "2.6rem" }}
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
