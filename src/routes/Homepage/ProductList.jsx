import { useEffect, useState } from "react";
import GlobalApi from "../../Api/GlobalApi";
import { FaStar, FaStarHalfAlt, FaTruck, FaClock } from "react-icons/fa";

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
    <div className="p-4 max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={`http://localhost:8000${item.image}`}
                alt={item.name}
                className="w-full h-72 object-cover rounded-lg"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
              </span>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>

              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-bold text-green-600">${item.price}</p>
                <p className="text-sm text-gray-500 line-through">
                  ${item.price + 500}
                </p>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="text-gray-600 text-sm ml-2">(4.5/5)</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FaTruck className="text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">In Stock</span>
                </div>
              </div>

              <div className="flex space-x-2 mt-auto">
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-200">
                  Add to Cart
                </button>
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition duration-200">
                  Quick View
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
