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
    <main className="max-w-screen-xl px-6 py-10 mx-auto md:px-12 lg:px-16">
      <h1 className="mb-8 text-3xl font-bold text-center md:text-4xl">My Purchased Products</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="card bg-[#ADD8FF] shadow-xl h-full rounded-xl">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-48 rounded-t-xl"
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
    </main>
  );
};

export default MyPurchasedProducts;
