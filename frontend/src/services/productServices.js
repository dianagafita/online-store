import axios from "axios";

export const getAll = async () => {
  const { data } = await axios.get("/api/products/allPhones");
  return data;
};

export const search = async (searchTerm) => {
  const { data } = await axios.get("/api/products/search/" + searchTerm);
  return data;
};

export const filterProductsByTag = async (tag) => {
  const { data } = await axios.get("/api/products/filterProductsByTag/" + tag);
  return data;
};

export const getById = async (prodId) => {
  const { data } = await axios.get("/api/products/" + prodId);
  return data;
};

export const updateFavorite = async (productId, isFavorite) => {
  const { data } = await axios.put(`/api/products/favorite/${productId}`, {
    favorite: isFavorite,
  });
  return data;
};
