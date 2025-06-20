import axiosClient from "./AxiosClient.jsx";

// API functions

const createUser=(data)=>axiosClient.post('/auth/register',data)

const CheckLogin=(data)=>axiosClient.post('/auth/login',data);

const AddProduct=(data)=>axiosClient.post("/Product",data );

const getAllProduct=()=>axiosClient.get("/Product");

const AddToCart=(data)=>axiosClient.post("/Cart",data);

const getAllCart = (data) => axiosClient.get(`/Cart/${data}`);

const deleteCart = (userId, productId) => axiosClient.delete(`/Cart/${userId}/${productId}`);
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
