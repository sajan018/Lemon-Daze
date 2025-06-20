import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import App from './App.jsx';
import Login from './routes/Login/Login.jsx';
import Register from './routes/Register/Register.jsx';
import AddProduct from './routes/AddProduct/AddProduct.jsx';
import ProtectefRoutes from './ProtectedRoutes.js';
import MyCart from './routes/Cart/Cart.jsx';
import Loader from './Loader.jsx';
import Header from './Navbar.jsx';
import { setupInterceptors } from "./Api/AxiosClient.jsx";
import { useLoader } from "./context/LoaderContext";

function AppRoutes() {
  const location = useLocation();
  const { loader, setLoader } = useLoader();

  // Setup interceptors for axios when app mounts
  useEffect(() => {
    setupInterceptors(setLoader);
  }, [setLoader]);

  return (
    <>
     {loader && <Loader />}
      <Header>
      <Routes location={location} key={location.pathname}>
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
