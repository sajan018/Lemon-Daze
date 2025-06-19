import axios from "axios";

const axiosClient=axios.create({
    baseURL:'https://lemon-daze-backend-production.up.railway.app/'
});

const createUser=(data)=>axiosClient.post('/auth/register',data)

const CheckLogin=(data)=>axiosClient.post('/auth/login',data);

const AddProduct=(data)=>axiosClient.post("Product",data );

const getAllProduct=()=>axiosClient.get("Product");

export default{
    createUser,
    CheckLogin,
    AddProduct,
    getAllProduct
}