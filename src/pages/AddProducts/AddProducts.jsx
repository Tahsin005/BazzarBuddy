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
                className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product name"
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
                className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product image URL"
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
                className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Description"
                rows="4"
                required
              />
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
                className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Price"
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
                id="categories"
                name="categories"
                value={formData.categories}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Select</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
                {/* Add more category options here */}
              </select>
            </div>

            {/* Submit Button */}
            <div className="mt-8 space-x-4">
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 hover:shadow-lg"
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
