import React, { useEffect, useReducer } from "react";
import { getAll, filterProductsByTag } from "../../services/productServices";
import Thumbnails from "../../components/Thumbnails/Thumbnails";

const initialState = { products: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADED":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default function ProductPage({ tags = [] }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = state;

  useEffect(() => {
    let loadedProd;

    if (tags.length > 0) {
      loadedProd = filterProductsByTag(tags);
    } else {
      loadedProd = getAll();
    }
    loadedProd.then((prod) =>
      dispatch({ type: "PRODUCTS_LOADED", payload: prod })
    );
  }, [tags]);

  return (
    <>
      <Thumbnails products={products} />
    </>
  );
}
