import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import "./Admin.css";
import Users from "./scenes/users/Users";
import Orders from "./scenes/users/Orders";
import AddUser from "./scenes/users/AddUser";
import AuthRoute from "../components/AuthRoute/AuthRoute";
import AddProduct from "./products/AddProduct";
import Products from "./products/Products";
import EditProduct from "./products/EditProduct";

function Admin() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <AuthRoute>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SideBar isSidebar={isSidebar} />
            <main className="content">
              <TopBar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<EditProduct />} />
                {/*<Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthRoute>
  );
}

export default Admin;
