import React, { useState } from 'react';

const EditProducts = ({  }) => {
//   const [formData, setFormData] = useState({
//     name: existingProduct.name || '',
//     image: existingProduct.image || '',
//     description: existingProduct.description || '',
//     price: existingProduct.price || '',
//     categories: existingProduct.categories || '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Updated Product:', formData);
//     // Add form submission logic here.
//   };

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
            <form className="mt-8 space-y-6">
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
                //   value={formData.name}
                //   onChange={handleChange}
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
                //   value={formData.image}
                //   onChange={handleChange}
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
                //   value={formData.description}
                //   onChange={handleChange}
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
                //   value={formData.price}
                //   onChange={handleChange}
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
                //   value={formData.categories}
                //   onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 text-gray-700 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home">Home</option>
                  {/* Add more categories as needed */}
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-black rounded-lg hover:text-black hover:bg-yellow-300 focus:ring-2 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* Illustration Section */}
          <div>
            <img
              className="w-full rounded-lg shadow-lg"
              src={'https://i.ibb.co.com/gD4Ps8N/1.jpg'}
              alt="Edit Product Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProducts;
