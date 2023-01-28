import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import Register from "./Register";
import Products from "../components/Products";


const MainRoutes = () => {
  return (
    <>
 <Navbar/>
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
