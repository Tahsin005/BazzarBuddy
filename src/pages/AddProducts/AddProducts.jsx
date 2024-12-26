import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BlinkBlur } from 'react-loading-indicators';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    categories: '',
  });
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isProductAdding, setIsProductAdding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("bazzar_buddy_token");
    if (!token) {
      navigate("/login");
    }

    const loadCategories = async () => {
      try {
        const response = await fetch("https://lifted-listed-backend.onrender.com/product/category/");
        const data = await response.json();
        setCategories(data);
        setIsCategoriesLoading(false);
      } catch (err) {
        console.log(err);
        setIsCategoriesLoading(false);
      }
    };

    loadCategories();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("bazzar_buddy_token");
    if (!token) {
      navigate("/login");
    }

    const added_by = parseInt(localStorage.getItem('bazzar_buddy_user_id'));
    const newProduct = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
      price: parseInt(formData.price),
      added_by: added_by,
      bought_by: null,
      categories: [parseInt(formData.categories)],
    };

    console.log(newProduct)

    try {
      setIsProductAdding(true);
      const response = await fetch("https://lifted-listed-backend.onrender.com/product/list/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      console.log(response);

      if (response.ok) {
        toast.success("Product has been listed successfully");
        setIsProductAdding(false);
        setTimeout(() => {
          navigate("/products");
        }, 3000);
      } else {
        const errorData = await response.json();
        toast.error(`Failed to list the product: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product. Please try again.");
    }
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 md:text-4xl">Add Product</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-2xl font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full px-4 py-3 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="image"
                className="block mb-1 text-2xl font-medium text-gray-700"
              >
                Image URL
              </label>
              <input
                type="url"
                name="image"
                id="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="w-full px-4 py-3 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block mb-1 text-2xl font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
                className="w-full px-4 py-3 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block mb-1 text-2xl font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter product price"
                className="w-full px-4 py-3 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Categories */}
            <div>
              <label
                htmlFor="categories"
                className="block mb-1 text-2xl font-medium text-gray-700"
              >
                Categories
              </label>
              <select
                name="categories"
                id="categories"
                value={formData.categories}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {isCategoriesLoading ? (
                  <option>Loading...</option>
                ) : (
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 hover:shadow-lg"
              >
                {isProductAdding ? <BlinkBlur color="#2563eb" size="medium" text="" textColor="" /> : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AddProducts;