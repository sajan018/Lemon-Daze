import { useState } from "react";
import GlobalApi from "../../Api/GlobalApi";

function ProductForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState(null);
    const [AvailabeSize, setAvailabeSize] = useState("");
    const [loading, setLoading] = useState(false);

    function addProduct() {
        if (!name || !description || !price || !category || !quantity || !image || !AvailabeSize) {
            alert("Please fill all fields");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("quantity", quantity);
        formData.append("image", image);
        formData.append("AvailabeSize", AvailabeSize);

        setLoading(true);

        GlobalApi.AddProduct(formData)
            .then(() => {
                alert("Product added successfully");
                // reset form
                setName("");
                setDescription("");
                setPrice(0);
                setCategory("");
                setQuantity(0);
                setImage(null);
                setAvailabeSize("");
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to add product");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="max-w-lg min-h-[100vh] mx-auto p-6 bg-white rounded shadow">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold my-8">Add New Product</h2>

                <label className="block mb-1 capitalize">Product Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full border px-3 py-2 rounded"
                />

                <label className="block mb-1 capitalize">Description</label>
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="w-full border px-3 py-2 rounded"
                />

                <label className="block mb-1 capitalize">Price</label>
                <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="w-full border px-3 py-2 rounded"
                />

                <label className="block mb-1 capitalize">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">Select a category</option>
                    <option value="Saree">Saree</option>
                    <option value="Kurti">Kurti</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Tshirt">Tshirt</option>
                </select>

                <label className="block mb-1 capitalize">Quantity</label>
                <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number"
                    className="w-full border px-3 py-2 rounded"
                />

                <label className="block mb-1 capitalize">Image</label>
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    className="w-full border px-3 py-2 rounded"
                />

                <label className="block mb-1 capitalize">Available Size</label>
                <select
                    value={AvailabeSize}
                    onChange={(e) => setAvailabeSize(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">Size Available</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            <button
                onClick={addProduct}
                disabled={loading}
                className={`w-full p-2 rounded-xl mt-8 ${loading ? "bg-gray-400" : "bg-black text-white"
                    }`}
            >
                {loading ? "Adding Product..." : "Add Product"}
            </button>
        </div>
    );
}

export default ProductForm;
