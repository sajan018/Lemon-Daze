import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import App from './App.jsx';
import Login from './routes/Login/Login.jsx';
import Register from './routes/Register/Register.jsx';
import AddProduct from './routes/AddProduct/AddProduct.jsx';
import ProtectefRoutes from './ProtectedRoutes.js';
import MyCart from './routes/Cart/Cart.jsx';
import Loader from './Loader.jsx';
import Header from './Navbar.jsx';

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/addProduct" element={
          <ProtectefRoutes>
            <AddProduct />
          </ProtectefRoutes>
        } />
        <Route path="/Cart" element={
          <ProtectefRoutes>
            <MyCart />
          </ProtectefRoutes>
        } />
      </Routes>
      </Header>
    </>
  );
}

export default AppRoutes;
