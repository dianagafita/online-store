import React, { useRef, useState, useEffect } from "react";
import MegaMenu from "../NavItems/NavItems";
import { Menu, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./NavMenu.module.css";

export default function NavMenu() {
  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const initialSubMenu = {
    label: <MegaMenu onClick={handleItemClick} />,
    style: {
      height: "fit-content",
      padding: 0,
      marginRight: 0,
      backgroundColor: "white",
    },
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <Button className={classes.button} onClick={toggleMenu}>
        Products
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5 }}
            className={classes.menu}
          >
            <Menu
              mode="vertical"
              items={[initialSubMenu]}
              style={{
                background: "rgb(240, 240, 240)",
                color: "white",
                borderRadius: "0 0 1rem 0",
                margin: 0,
              }}
              onClick={handleItemClick}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
