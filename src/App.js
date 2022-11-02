
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Navbar } from "./Components/Navbar/Navbar";
import { Products } from './Components/Products/Products';
import { Login } from './Pages/Login/Login';
import { Home } from './Pages/Home';
import { Product } from "./Components/Product/Product";
import { Cart } from "./Components/Cart/Cart";
import { AppLogout } from './Utils/AppLogout';
import { ProtectedRoute } from "./Utils/ProtectedRoute";

export const App = () => {
  
  const state = useSelector((state) => state.handleAuth);
  const { isLoggedIn } = state;

  return (
    <>
      {isLoggedIn && <AppLogout />}
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Products /></ProtectedRoute>} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}