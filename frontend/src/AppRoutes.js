import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import AllProducts from "./pages/AllProducts/AllProducts";
import AllPhones from "./pages/AllPhones/AllPhones";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Payment from "./pages/Payment/Payment";
import OrderTrack from "./pages/OrderTrack/OrderTrack";
import OrdersPage from "./pages/Orders/Orders";
import AllLaptops from "./pages/AllLaptops/AllPhones";
import Huawei from "./pages/AllLaptops/Huawei";
import Samsung from "./pages/AllLaptops/Samsung";
import Mac from "./pages/AllLaptops/Mac";
import Apple from "./pages/AllPhones/Apple";
import SamsungPhone from "./pages/AllPhones/Samsung";
import HuaweiPhone from "./pages/AllPhones/Huawei";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchTerm" element={<AllProducts />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/allProducts" element={<AllProducts />} />
      <Route path="/allPhones" element={<AllPhones />} />
      <Route path="/samsungPhone" element={<SamsungPhone />} />
      <Route path="/huaweiPhone" element={<HuaweiPhone />} />
      <Route path="/apple" element={<Apple />} />
      <Route path="/allLaptops" element={<AllLaptops />} />
      <Route path="/samsungLaptop" element={<Samsung />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/huaweiLaptop" element={<Huawei />} />

      <Route
        path="/profile"
        element={
          <AuthRoute>
            <Profile />
          </AuthRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <AuthRoute>
            <Profile />
          </AuthRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <AuthRoute>
            <Checkout />
          </AuthRoute>
        }
      ></Route>
      <Route
        path="/payment"
        element={
          <AuthRoute>
            <Payment />
          </AuthRoute>
        }
      />
      <Route
        path="/track/:orderId"
        element={
          <AuthRoute>
            <OrderTrack />
          </AuthRoute>
        }
      ></Route>

      <Route
        path="/orders/:filter?"
        element={
          <AuthRoute>
            <OrdersPage />
          </AuthRoute>
        }
      ></Route>
    </Routes>
  );
}
