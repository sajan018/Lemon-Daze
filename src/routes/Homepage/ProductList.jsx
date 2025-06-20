import { useContext, useEffect, useState } from "react";
import GlobalApi from "../../Api/GlobalApi";
import "./ProductList.css";
import { FaTruck, FaClock } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [addingToCartId, setAddingToCartId] = useState(null);
  const user = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    GlobalApi.getAllProduct()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
      });
  }, []);

  function AddToCart(productId) {
    if (!user?.user?.user?._id) {
      alert("Please login to add product to cart");
      navigate("/login");
      return;
    }

    setAddingToCartId(productId);
    const data = {
      userId: user.user.user._id,
      productId: productId,
    };

    GlobalApi.AddToCart(data)
      .then(() => {
        alert("Product added to cart");
      })
      .catch((err) => {
        alert("Failed to add product to cart");
        console.log(err);
      })
      .finally(() => {
        setAddingToCartId(null);
      });
  }

  return (
    <div className="p-4 max-w-[1440px] mx-auto sm:mx-20 my-8">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl text-center italic">Our Products</h1>
        <p className="antialiased text-center">
          Lemon-Daze latest collection is where elegance meets trend. Fashion that speaks your style.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid-container">
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
                  <button
                    onClick={() => AddToCart(item._id)}
                    disabled={addingToCartId === item._id}
                    className={`flex w-full justify-center gap-3 items-center border text-[12px] xs:text-[15px] border-black text-gray-700 py-2 px-4 rounded-full font-semibold transition duration-200 ${
                      addingToCartId === item._id ? "opacity-50 cursor-not-allowed" : "hover:border-red-500"
                    }`}
                  >
                    <GiLoveHowl /> {addingToCartId === item._id ? "Adding..." : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
