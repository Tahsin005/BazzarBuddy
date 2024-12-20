import React from 'react';
import { Link } from 'react-router-dom';

const MyPurchasedProducts = ({ }) => {

  const products = [
    { id: 1, name: "Smartphone", category: "Electronics", price: 300, image: "https://i.ibb.co.com/gD4Ps8N/1.jpg" },
    { id: 2, name: "T-shirt", category: "Clothing", price: 20, image: "https://i.ibb.co.com/TtjdRN5/2.jpg" },
    { id: 3, name: "Book", category: "Books", price: 15, image: "https://i.ibb.co.com/tQqdGhG/3.jpg" },
    { id: 4, name: "Mixer", category: "Home Appliances", price: 100, image: "https://i.ibb.co.com/3spy4d1/4.jpg" },
    { id: 5, name: "Football", category: "Sports", price: 25, image: "https://i.ibb.co.com/gD4Ps8N/1.jpg" },
    { id: 6, name: "Toy Car", category: "Toys", price: 10, image: "https://i.ibb.co.com/TtjdRN5/2.jpg" },
  ];
  return (
    <main className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 py-10">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-8">My Purchased Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-[#ADD8FF] shadow-xl h-full rounded-xl">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-xl"
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
                  className="text-white bg-black text-center hover:bg-yellow-300 hover:text-black py-2 px-6 rounded-xl text-lg font-semibold transition duration-300 ease-in-out transform hover:shadow-lg w-full"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyPurchasedProducts;
