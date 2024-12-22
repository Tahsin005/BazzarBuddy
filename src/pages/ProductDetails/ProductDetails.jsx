import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [review, setReview] = useState("");
  const [newReview, setNewReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setReview(newReview);
    setNewReview("");
  };

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image Section */}
        <div>
          <img
            src="https://i.ibb.co.com/gD4Ps8N/1.jpg"
            alt="Product"
            className="object-cover w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Product Name
          </h1>
          <h2 className="mb-2 text-lg text-gray-600">Category: Electronics</h2>
          <p className="mb-4 text-2xl font-semibold text-blue-600">$120.00</p>
          <p className="mb-6 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            minima? Necessitatibus sunt officiis voluptas, molestias
            consectetur explicabo eaque in iste recusandae quod vero ratione
            ullam maxime! Nulla eligendi nobis dolores!
          </p>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex gap-4">
            <Link
              to='/edit-products'
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-xl"
            >
              Edit Product
            </Link>
            <button className="px-6 py-3 font-semibold text-black transition duration-300 ease-in-out transform bg-yellow-400 shadow-lg rounded-xl hover:bg-yellow-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Reviews</h2>

        {review ? (
          // Show the review if submitted
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <p className="text-gray-700">
              <strong>User's Review:</strong> {review}
            </p>
          </div>
        ) : (
          // Show the review submission form if no review
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded-lg shadow-sm bg-gray-50"
          >
            <label className="block mb-2 font-medium text-gray-700">
              Submit Your Review:
            </label>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Write your review here..."
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 mt-4 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-600 shadow-lg rounded-xl hover:bg-blue-500"
            >
              Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
