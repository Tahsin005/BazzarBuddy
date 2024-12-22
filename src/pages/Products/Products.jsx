import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [allProducts, setAllProducts] = useState(4);
  const [maxPrice, setMaxPrice] = useState(500);

  const products = [
    { id: 1, name: "Smartphone", category: "Electronics", price: 300, image: "https://i.ibb.co.com/gD4Ps8N/1.jpg" },
    { id: 2, name: "T-shirt", category: "Clothing", price: 20, image: "https://i.ibb.co.com/TtjdRN5/2.jpg" },
    { id: 3, name: "Book", category: "Books", price: 15, image: "https://i.ibb.co.com/tQqdGhG/3.jpg" },
    { id: 4, name: "Mixer", category: "Home Appliances", price: 100, image: "https://i.ibb.co.com/3spy4d1/4.jpg" },
    { id: 5, name: "Football", category: "Sports", price: 25, image: "https://i.ibb.co.com/gD4Ps8N/1.jpg" },
    { id: 6, name: "Toy Car", category: "Toys", price: 10, image: "https://i.ibb.co.com/TtjdRN5/2.jpg" },
  ];

  return (
    <>
      <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section className="mb-10">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Filter Products</h2>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Search:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Search products..."
              />
            </div>
            <div>
              <label className="block mb-4 font-medium text-gray-700">Categories:</label>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" />
                  <span className="text-lg text-gray-800">Electronics</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" />
                  <span className="text-lg text-gray-800">Clothing</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" />
                  <span className="text-lg text-gray-800">Books</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" />
                  <span className="text-lg text-gray-800">Home Appliances</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" />
                  <span className="text-lg text-gray-800">Sports</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" />
                  <span className="text-lg text-gray-800">Toys</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" />
                  <span className="text-lg text-gray-800">Groceries</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" />
                  <span className="text-lg text-gray-800">Beauty</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Max Price: ${maxPrice}
              </label>
              <input
                type="range"
                className="w-full"
                min="0"
                max="9999"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Products</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, allProducts).map((product) => (
              <div key={product.id} className="card bg-[#ADD8FF] shadow-xl h-full">
                <figure>
                  <img
                    src={product.image}
                    alt="product image"
                    className="object-cover w-full h-48"
                  />
                </figure>
                <div className="p-6 card-body">
                  <h2 className="text-xl font-semibold card-title">{product.name}</h2>
                  <div>
                    <h2 className="text-sm text-gray-600">Category: {product.category}</h2>
                  </div>
                  <h2 className="mt-2 font-semibold text-md">
                    Price: <span>${product.price}</span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                    temporibus.
                  </p>
                  <div className="justify-center mt-4 card-actions">
                    <Link
                      to="/product-details"
                      className="w-full px-6 py-2 text-lg font-semibold text-center text-white transition duration-300 ease-in-out transform bg-black hover:bg-yellow-300 hover:text-black rounded-xl hover:shadow-lg"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
