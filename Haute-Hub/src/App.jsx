import React from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import SellProduct from "./pages/SellProduct";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./configs/store";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/sell" element={<SellProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
};

export default App;
