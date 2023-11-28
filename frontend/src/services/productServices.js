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

export const addProduct = async (registerData) => {
  const { data } = await axios.post("/api/products/addProduct", registerData);
};

export const editProduct = async (id, prod) => {
  const { data } = await axios.put("/api/products/editProduct/" + id, prod);
  console.log(prod);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.put("/api/products/deleteProduct/" + id);
  return data;
};
