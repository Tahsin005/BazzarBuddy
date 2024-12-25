import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlinkBlur } from 'react-loading-indicators';
import 'react-toastify/dist/ReactToastify.css';

const EditProducts = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    categories: [],
  });
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  console.log(product);

  useEffect(() => {
    setFormData({
      name: product.name,
      image: product.image,
      description: product.description,
      price: product.price,
      categories: product.categories.map(category => category.id),
    });
    console.log(product.categories.map(category => category.id));

    setIsCategoriesLoading(true);
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/product/category/');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
        setIsCategoriesLoading(false);
        console.log(categories);
        console.log(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "categories") {
      const selectedCategories = Array.from(e.target.selectedOptions, option => parseInt(option.value));
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedCategories,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = product.id;
    const token = localStorage.getItem("bazzar_buddy_token");
    if (!token) {
      navigate("/login");
    }
    const updateDproduct = {
      id: id,
      name: formData.name,
      categories: formData.categories,
      image: formData.image,
      description: formData.description,
      price: formData.price,
    };

    try {
      const response = await fetch(
        `https://lifted-listed-backend.onrender.com/product/list/${id}/`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updateDproduct),
        }
      );
      if (response.status === 200) {
        alert("Product details updated successfully");
        navigate("/products");
      } else {
        console.log(
          "Product details update failed status code:",
          response.status
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async () => {
    const product_id = product.id;
    const url = `https://lifted-listed-backend.onrender.com/product/list/${product_id}/`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Product deleted successfully");
        navigate("/my_listing");
      } else {
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form Section */}
          <div>
            <h1 className="text-4xl font-bold text-black sm:text-5xl xl:text-6xl">
              Edit Product
            </h1>
            <p className="mt-4 text-base text-black sm:text-lg">
              Update the details of your product below.
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-semibold text-gray-700"
                >
                  Product Name
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

              {/* Image URL Field */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-base font-semibold text-gray-700"
                >
                  Product Image URL
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

              {/* Description Field */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-base font-semibold text-gray-700"
                >
                  Product Description
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

              {/* Price Field */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-base font-semibold text-gray-700"
                >
                  Product Price
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

              {/* Categories Field */}
              <div>
                <label
                  htmlFor="categories"
                  className="block text-base font-semibold text-gray-700"
                >
                  Product Category
                </label>
                <select
                  name="categories"
                  id="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  multiple
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

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-black rounded-lg hover:text-black hover:bg-yellow-300 focus:ring-2 focus:ring-offset-2"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={deleteProduct}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-red-600 rounded-lg hover:text-black hover:bg-red-300 focus:ring-2 focus:ring-offset-2"
                >
                  Delete Product
                </button>
              </div>
            </form>
          </div>

          {/* Illustration Section */}
          <div>
            <img
              className="w-full rounded-lg shadow-lg"
              src={product?.image}
              alt="Edit Product Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProducts;