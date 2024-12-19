import React, { useState } from 'react';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    categories: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Added:', formData);
    // Add your form submission logic here (e.g., API call).
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800 mb-6">Add Product</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label
                htmlFor="name"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="image"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Image URL
              </label>
              <input
                type="url"
                name="image"
                id="image"
                value={formData.image}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter product image URL"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Description"
                rows="4"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Price"
                required
              />
            </div>

            {/* Categories */}
            <div>
              <label
                htmlFor="categories"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Categories
              </label>
              <select
                id="categories"
                name="categories"
                value={formData.categories}
                onChange={handleChange}
                required
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              >
                <option value="" disabled>Select</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
                {/* Add more category options here */}
              </select>
            </div>

            {/* Submit Button */}
            <div className="space-x-4 mt-8">
              <button
                type="submit"
                className="bg-black text-white hover:text-black hover:bg-yellow-300 py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:shadow-lg w-full"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
