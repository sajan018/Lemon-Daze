import axiosClient from "./AxiosClient.jsx";
import axios from "axios";
// API functions
const axiosClientWithoutLoader = axios.create({
  baseURL: "https://lemon-daze-backend-production.up.railway.app/",
});

const createUser=(data)=>axiosClient.post('/auth/register',data)

const CheckLogin=(data)=>axiosClient.post('/auth/login',data);

const AddProduct=(data)=>axiosClient.post("/Product",data );

const getAllProduct=()=>axiosClient.get("/Product");

const AddToCart=(data)=>axiosClientWithoutLoader.post("/Cart",data);

const getAllCart = (data) => axiosClient.get(`/Cart/${data}`);

const deleteCart = (userId, productId) => axiosClientWithoutLoader.delete(`/Cart/${userId}/${productId}`);
// Export all together
export default {
  createUser,
  CheckLogin,
  AddProduct,
  getAllProduct,
  AddToCart,
  getAllCart,
  deleteCart,
};
