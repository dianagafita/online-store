// import React from "react";
// import classes from "./Header.module.css";
// import { Menu } from "antd";
// import { BsCart3 } from "react-icons/bs";
// import { useCart } from "../../hooks/useCart";
// import { useAuth } from "../../hooks/useAuth";
// import { HomeFilled } from "@ant-design/icons";
// import MegaMenu from "../NavItems/NavItems";
// import { useNavigate } from "react-router-dom";
// import CartModal from "../CartModal";

// export default function Header() {
//   const { user } = useAuth();

//   const profile_items = user
//     ? [
//         {
//           label: user.name,
//           key: "profile",
//         },
//         {
//           label: "Orders",
//           key: "orders",
//         },
//         {
//           label: "Logout",
//           key: "logout",
//         },
//       ]
//     : [];
//   const getProfileMenu = () => {
//     if (user) {
//       return {
//         label: "Profile",
//         children: profile_items,
//         style: { marginLeft: "auto" },
//       };
//     } else {
//       return {
//         label: "Login",
//         key: "login",
//         style: { marginLeft: "auto", color: "white" },
//       };
//     }
//   };

//   const { cart } = useCart();
//   const { logout } = useAuth();
//   function handleMenuClick(item) {
//     if (item.key === "logout") {
//       logout();
//       navigate("/login");
//     }
//     navigate(`/${item.key}`);
//   }

//   const updatedItems = [
//     {
//       label: <HomeFilled />,
//       key: "",
//       style: { order: -1, flex: "0", right: 0, color: "white" },
//     },
//     getProfileMenu(),
//     {
//       label: "Products",
//       key: "products",
//       children: [
//         {
//           label: <MegaMenu />,

//           style: {
//             height: "fit-content",
//             padding: 0,
//             backgroundColor: "white",
//           },
//         },
//       ],
//       style: { marginRight: "0.5rem" },
//     },
//     {
//       label: <BsCart3 />,
//       key: "cart",
//       style: { marginRight: "1rem", color: "white" },
//     },
//   ];
//   const navigate = useNavigate();
//   return (
//     <header>
//       <Menu
//         onClick={(item) => {
//           if (item.key === "logout") {
//             logout();
//             navigate("/login");
//           }

//           if (item.key === "tmp-0") {
//             navigate("/allProducts");
//             return;
//           }
//           navigate(`/${item.key}`);
//         }}
//         className={classes.menu}
//         mode="horizontal"
//         items={updatedItems.map((item) => {
//           if (item.key === "cart") {
//             return {
//               ...item,
//               label: (
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <span>{item.label}</span>
//                   <span style={{ marginLeft: "0.5rem", color: "white" }}>
//                     {cart.totalCount}
//                   </span>
//                 </div>
//               ),
//             };
//           }
//           return item;
//         })}
//       >
//         {updatedItems.map((item) => (
//           <Menu.Item
//             key={item.key}
//             onClick={() => {
//               handleMenuClick(item.key);
//             }}
//           >
//             {item.label}
//           </Menu.Item>
//         ))}
//       </Menu>
//     </header>
//   );
// }
import React, { useState } from "react";
import classes from "./Header.module.css";
import { Menu } from "antd";
import { BsCart3 } from "react-icons/bs";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { HomeFilled } from "@ant-design/icons";
import MegaMenu from "../NavItems/NavItems";
import { useNavigate } from "react-router-dom";
import CartModal from "../CartModal";
import NavMenu from "../NavMenu/NavMenu";

export default function Header() {
  const { user } = useAuth();
  const { cart } = useCart();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showCartModal, setShowCartModal] = useState(false); // State for cart modal

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
      </Menu>
      {showCartModal && (
        <CartModal
          show={showCartModal}
          handleClose={toggleCartModal}
          cart={cart}
        />
      )}
    </>
  );
}
