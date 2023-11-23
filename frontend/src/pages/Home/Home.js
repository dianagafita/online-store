import React, { useEffect, useReducer, useState } from "react";
import Carousel from "react-multi-carousel";
import { data_phones } from "../../data";
import "react-multi-carousel/lib/styles.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import classes from "./Home.module.css";
import img2 from "./images/166564D6-2FF0-4D52-9856-E0DA7CEF84BF_1_201_a.jpeg";
import img3 from "./images/S23Ultra_groupkv_PC.jpg.avif";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import {
  filterProductsByTag,
  getAll,
  getById,
} from "../../services/productServices";
import Price from "../../components/Price/Price";
import { data_laptops } from "../../data";
import CartModal from "../../components/CartModal";
import { Offcanvas } from "react-bootstrap";

const images = [
  {
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ase-hero-202311?wid=4098&hei=1294&fmt=jpeg&qlt=90&.v=1698431463411",
    text: "Apple",
  },
  {
    img: img2,
    text: "Huawei",
  },
  {
    img: img3,
    text: "Samsung",
  },
];

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const initialStatePhones = { phones: [] };

  const reducerPhone = (state, action) => {
    switch (action.type) {
      case "PRODUCTS_LOADED":
        return { ...state, phones: action.payload };
      default:
        return state;
    }
  };
  const initialStateLaptops = { laptops: [] };

  const reducerLaptop = (state, action) => {
    switch (action.type) {
      case "LAPTOPS_LOADED":
        return { ...state, laptops: action.payload };
      default:
        return state;
    }
  };

  const [statePhone, dispatchPhone] = useReducer(
    reducerPhone,
    initialStatePhones
  );

  const [stateLaptop, dispatchLaptop] = useReducer(
    reducerLaptop,
    initialStateLaptops
  );
  const { phones } = statePhone;
  const { laptops } = stateLaptop;

  useEffect(() => {
    let loadedPhones;
    loadedPhones = filterProductsByTag(["phone"]);
    loadedPhones.then((prod) =>
      dispatchPhone({ type: "PRODUCTS_LOADED", payload: prod })
    );
    let laptopsm = filterProductsByTag(["laptop"]);
    laptopsm.then((prod) =>
      dispatchLaptop({ type: "LAPTOPS_LOADED", payload: prod })
    );
  }, []);
  // const { cart } = useCart();
  // const [showCart, setShowCart] = useState(false);

  // const handleClose = () => setShowCart(false);
  // const handleShow = () => setShowCart(true);

  // return (
  //   <>
  //     <button onClick={handleShow}>Cart ({cart.totalCount})</button>

  //     <Offcanvas show={showCart} onHide={handleClose}>
  //       <Offcanvas.Body>
  //         <CartModal showCart={showCart} handleClose={handleClose} />
  //       </Offcanvas.Body>
  //     </Offcanvas>
  // const { cart } = useCart();
  // const [showCart, setShowCart] = useState(false);

  // const handleClose = () => setShowCart(false);
  // const handleShow = () => setShowCart(true);

  return (
    <>
      {/* <button onClick={handleShow}>Cart ({cart.totalCount})</button>
      <CartModal showCart={showCart} handleClose={handleClose} /> */}

      <div className={classes.slide}>
        <Slide>
          {images.map((imag, index) => (
            <div key={index} className={classes["each-slide-effect"]}>
              <div
                style={{
                  backgroundImage: `url(${imag.img})`,
                }}
              >
                <span>{imag.text}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className={classes.phones}>
        <h2>You might like:</h2>
        <h1>Phones</h1>
        <div>
          <Carousel showDots={true} responsive={responsive}>
            {phones.map((phone, phoneIndex) => (
              <Link to={`/products/${phone.id}`}>
                <div key={phoneIndex} className={classes.card}>
                  <img
                    src={phone.img}
                    className={classes["phoneImage"]}
                    alt={phone.name}
                  />
                  <h1 className={classes.phoneName}>{phone.name}</h1>
                  <p className={classes.phonePrice}>
                    <Price price={phone.price} />
                  </p>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
        <div>
          <h1>Laptops</h1>

          <Carousel showDots={true} responsive={responsive}>
            {laptops.map((phone, phoneIndex) => (
              <div key={phoneIndex} className={classes.card}>
                <img
                  src={phone.img}
                  className={classes["phoneImage"]}
                  alt={phone.name}
                />
                <h1 className={classes.phoneName}>{phone.name}</h1>
                <p className={classes.phonePrice}>
                  <Price price={phone.price} />
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
