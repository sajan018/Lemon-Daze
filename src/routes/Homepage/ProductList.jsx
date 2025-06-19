import { useEffect, useState } from "react";
import GlobalApi from "../../Api/GlobalApi";
import "./ProductList.css"
import { FaStar, FaStarHalfAlt, FaTruck, FaClock } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GlobalApi.getAllProduct()
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.error("Error fetching products", err);
            });
    }, []);

    return (
        <div className="p-4 max-w-[1440px] mx-auto sm:mx-20 my-8">
            <div className="mb-8 flex flex-col gap-2">
                <h1 className="text-3xl text-center italic ..." >Our Products</h1>
                <p className="antialiased text-center">Lemon-Daze latest collection is where elegance meets trend. Fashion that speaks your style.</p>

            </div>

            <div class="grid-container">
                {products.slice(7).map((item) => (
                    <div
                        key={item._id}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                    >
                        <div className="relative">
                            <img
                                src={`https://lemon-daze-backend-production.up.railway.app${item.image}`}
                                alt={item.name}
                                className="w-full h-72 object-cover rounded-2xl"
                            />
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                SALE
                            </span>
                        </div>

                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1">
                                {item.name}
                            </h2>
                            <p className="text-[12px] text-gray-600 mb-2">{item.description}</p>

                            <div className="flex gap-2 text-[14px] items-center mb-2">
                                <p className="font-bold text-green-600">${item.price}</p>
                                <p className="text-gray-500 line-through">
                                    ${item.price + 500}
                                </p>
                            </div>

                            {/* <div className="flex items-center mb-3">
                                <div className="flex text-yellow-400">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                                <span className="text-gray-600 text-sm ml-2">(4.5/5)</span>
                            </div> */}

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <FaTruck className="text-blue-500 mr-2" />
                                    <span className="text-[10px] sm:text-sm text-gray-600">Free Shipping</span>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="text-blue-500 mr-2" />
                                    <span className="text-[10px] sm:text-sm text-gray-600">In Stock</span>
                                </div>
                            </div>

                            <div className="flex space-x-2 mt-auto">
                                <button className="flex w-full justify-center gap-3 items-center border text-[12px] xs:text-[15px] border-black text-gray-700 py-2 px-4 rounded-full font-semibold hover:border-red-500 transition duration-200">
                                    <GiLoveHowl /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {products.length === 0 && (
                <p className="text-center text-gray-500 mt-10">No products found.</p>
            )}
        </div>
    );
}

export default ProductList;
