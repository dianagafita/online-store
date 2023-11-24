import axios from "axios";

export const getAllUsers = async () => {
  const { data } = await axios.get("/api/users/allUsers");
  return data;
};

export const getUser = () =>
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export const login = async (email, password) => {
  const { data } = await axios.post("/api/users/login", { email, password });
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = async (registerData) => {
  const { data } = await axios.post("/api/users/register", registerData);
};

export const updateProfile = async (user) => {
  const { data } = await axios.put("/api/users/updateProfile", user);
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};

export const changePassword = async (password) => {
  await axios.put("/api/users/changePassword", password);
};
