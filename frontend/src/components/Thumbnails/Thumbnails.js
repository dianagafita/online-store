// import classes from "./Thumbnails.module.css";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import Price from "../Price/Price";
// import { IoIosHeart } from "react-icons/io";

// export default function Thumbnails({ products,onClick }) {

//   return (
//     <>
//       <ul className={classes.display}>
//         {products.map((prod) => (
//           <li key={prod.id} className={classes.container}>
//             <div className={classes.content}>
//               <Link to={`/products/${prod.id}`} className={classes.link}>
//                 <img
//                   className={classes.prodImg}
//                   src={prod.img}
//                   alt={prod.name}
//                 />
//                 <div className={classes.info}>
//                   <div className={classes.productName}>{prod.name}</div>
//                 </div>
//               </Link>
//               <div className={classes.favoriteIcon}>
//                 <span
//                   onClick={() => handleClick(prod.id)}
//                   className={`${classes.favorite} ${
//                     isFavorite(prod.id) ? "" : classes.not
//                   }`}
//                 >
//                   <IoIosHeart />
//                 </span>
//               </div>
//               <div className={classes.additionalInfo}>
//                 <div className={classes.memory}>{prod.memory}</div>
//                 <span className={classes.colour}>
//                   <span>Color: </span>
//                   {prod.colour}
//                 </span>
//                 <div className={classes.price}>
//                   <Price price={prod.price} />
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// Thumbnails.jsx
// import React from "react";
// import classes from "./Thumbnails.module.css";
// import { Link } from "react-router-dom";
// import Price from "../Price/Price";
// import FavIcon from "../FavIcon/FavIcon";

// export default function Thumbnails({ products }) {
//   const [favorite, setFavorite] = React.useState({});

//   const handleClick = (id) => {
//     setFavorite((prevFavorites) => ({
//       ...prevFavorites,
//       [id]: !prevFavorites[id] || false,
//     }));
//   };

//   const isFavorite = (id) => {
//     return favorite[id] || false;
//   };

//   return (
//     <>
//       <ul className={classes.display}>
//         {products.map((prod) => (
//           <li key={prod.id} className={classes.container}>
//             <div className={classes.content}>
//               <Link to={`/products/${prod.id}`} className={classes.link}>
//                 <img
//                   className={classes.prodImg}
//                   src={prod.img}
//                   alt={prod.name}
//                 />
//                 <div className={classes.info}>
//                   <div className={classes.productName}>{prod.name}</div>
//                 </div>
//               </Link>
//               <div className={classes.favoriteIcon}>
//                 <FavIcon
//                   id={prod.id}
//                   isFavorite={isFavorite}
//                   handleClick={handleClick}
//                 />
//               </div>
//               <div className={classes.additionalInfo}>
//                 <div className={classes.memory}>{prod.memory}</div>
//                 <span className={classes.colour}>
//                   <span>Color: </span>
//                   {prod.colour}
//                 </span>
//                 <div className={classes.price}>
//                   <Price price={prod.price} />
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// Thumbnails.jsx
import React from "react";
import classes from "./Thumbnails.module.css";
import { Link } from "react-router-dom";
import Price from "../Price/Price";
import FavIcon from "../FavIcon/FavIcon";

export default function Thumbnails({ products }) {
  return (
    <>
      <ul className={classes.display}>
        {products.map((prod) => (
          <li key={prod.id} className={classes.container}>
            <div className={classes.content}>
              <Link to={`/products/${prod.id}`} className={classes.link}>
                <img
                  className={classes.prodImg}
                  src={prod.img}
                  alt={prod.name}
                />
                <div className={classes.info}>
                  <div className={classes.productName}>{prod.name}</div>
                </div>
              </Link>
              <div className={classes.favoriteIcon}>
                <FavIcon id={prod.id} initialFavoriteState={prod.favorite} />
              </div>
              <div className={classes.additionalInfo}>
                <div className={classes.memory}>{prod.memory}</div>
                <span className={classes.colour}>
                  <span>Color: </span>
                  {prod.colour}
                </span>
                <div className={classes.price}>
                  <Price price={prod.price} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
