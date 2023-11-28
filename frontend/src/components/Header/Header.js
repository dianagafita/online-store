import React, { useState } from "react";
import classes from "./Header.module.css";
import { Drawer, Menu, Space } from "antd";
import { BsCart3 } from "react-icons/bs";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { HomeFilled } from "@ant-design/icons";
import MegaMenu, { laptop_items } from "../NavItems/NavItems";
import { useNavigate } from "react-router-dom";
import CartModal from "../CartModal";
import Modal from "../Modal";
import { phone_items } from "../NavItems/NavItems";
import NavMenu from "../NavMenu/NavMenu";

export default function Header() {
  const { user } = useAuth();
  const { cart } = useCart();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showCartModal, setShowCartModal] = useState(false); // State for cart modal
  const [showCartModal2, setShowCartModal2] = useState(false); // State for cart modal

  const profile_items = user
    ? [
        {
          label: user.name,
          key: "profile",
        },
        {
          label: "Orders",
          key: "orders",
        },
        {
          label: "Logout",
          key: "logout",
        },
      ]
    : [];

  const getProfileMenu = () => {
    if (user) {
      return {
        label: "Profile",
        children: profile_items,
        style: { marginLeft: "auto" },
      };
    } else {
      return {
        label: "Login",
        key: "login",
        style: { marginLeft: "auto", color: "white" },
      };
    }
  };

  const updatedItems = [
    {
      label: <HomeFilled />,
      key: "",
      style: { order: -1, flex: "0", right: 0, color: "white" },
    },
    {
      label: "Products",
      key: "prod",
      style: { order: 0, flex: "0", right: 0, color: "white" },
    },
    getProfileMenu(),

    {
      label: <BsCart3 />,
      key: "cart",
      style: { marginRight: "1rem", color: "white" },
    },
  ];

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const toggleCartModal2 = () => {
    setShowCartModal2(!showCartModal2);
  };

  function handleMenuClick(item) {
    if (item.key === "logout") {
      logout();
      navigate("/login");
    }

    navigate(`/${item.key}`);
  }

  return (
    <>
      <Menu
        onClick={(item) => {
          console.log(item.key);

          if (item.key === "prod") {
            toggleCartModal2();
            return;
          }
          if (item.key === "cart") {
            toggleCartModal();
            return;
          }

          if (item.key === "logout") {
            logout();
            navigate("/login");
          }

          if (item.key === "tmp-0") {
            navigate("/allProducts");
            return;
          }
          navigate(`/${item.key}`);
        }}
        className={classes.menu}
        mode="horizontal"
        items={updatedItems.map((item) => {
          if (item.key === "cart") {
            return {
              ...item,
              label: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{item.label}</span>
                  <span style={{ marginLeft: "0.5rem", color: "white" }}>
                    {cart.totalCount}
                  </span>
                </div>
              ),
            };
          }
          return item;
        })}
      >
        {updatedItems.map((item) => (
          <Menu.Item
            key={item.key}
            onClick={() => {
              handleMenuClick(item.key);
            }}
          >
            {item.label}
          </Menu.Item>
        ))}
        <Menu.SubMenu title="Products">
          <Menu.ItemGroup title="Phones">
            {phone_items.map((phone) => (
              <Menu.Item key={phone.key}>{phone.label}</Menu.Item>
            ))}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Laptops">
            {laptop_items.map((laptop) => (
              <Menu.Item key={laptop.key}>{laptop.label}</Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>

      {showCartModal && (
        <CartModal
          show={showCartModal}
          handleClose={toggleCartModal}
          cart={cart}
        />
      )}

      {showCartModal2 && (
        <Modal
          show={showCartModal2}
          handleClose={toggleCartModal2}
          cart={cart}
        />
      )}
    </>
  );
}
