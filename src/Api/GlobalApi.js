import axios from "axios";

const axiosClient=axios.create({
    baseURL:'http://localhost:8000'
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