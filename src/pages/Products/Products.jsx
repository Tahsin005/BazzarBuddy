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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Filter Products</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Search:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Search products..."
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-4">Categories:</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 w-5 h-5" />
                  <span className="text-gray-800 text-lg">Electronics</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 w-5 h-5" />
                  <span className="text-gray-800 text-lg">Clothing</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 w-5 h-5" />
                  <span className="text-gray-800 text-lg">Books</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 w-5 h-5" />
                  <span className="text-gray-800 text-lg">Home Appliances</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 w-5 h-5" />
                  <span className="text-gray-800 text-lg">Sports</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 w-5 h-5" />
                  <span className="text-gray-800 text-lg">Toys</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 w-5 h-5" />
                  <span className="text-gray-800 text-lg">Groceries</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 w-5 h-5" />
                  <span className="text-gray-800 text-lg">Beauty</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, allProducts).map((product) => (
              <div key={product.id} className="card bg-[#ADD8FF] shadow-xl h-full">
                <figure>
                  <img
                    src={product.image}
                    alt="product image"
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-6">
                  <h2 className="card-title text-xl font-semibold">{product.name}</h2>
                  <div>
                    <h2 className="text-sm text-gray-600">Category: {product.category}</h2>
                  </div>
                  <h2 className="text-md font-semibold mt-2">
                    Price: <span>${product.price}</span>
                  </h2>
                  <p className="text-sm text-gray-700 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                    temporibus.
                  </p>
                  <div className="card-actions justify-center mt-4">
                    <Link
                      to="/product-details"
                      className="text-white bg-black text-center hover:bg-yellow-300 hover:text-black py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:shadow-lg w-full"
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
