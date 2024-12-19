import React, { useState } from "react";

const ProductDetails = () => {
  const [review, setReview] = useState("");
  const [newReview, setNewReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setReview(newReview);
    setNewReview("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div>
          <img
            src="https://i.ibb.co.com/gD4Ps8N/1.jpg"
            alt="Product"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Product Name
          </h1>
          <h2 className="text-lg text-gray-600 mb-2">Category: Electronics</h2>
          <p className="text-2xl font-semibold text-blue-600 mb-4">$120.00</p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            minima? Necessitatibus sunt officiis voluptas, molestias
            consectetur explicabo eaque in iste recusandae quod vero ratione
            ullam maxime! Nulla eligendi nobis dolores!
          </p>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black py-3 px-6 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 ease-in-out transform shadow-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reviews</h2>

        {review ? (
          // Show the review if submitted
          <div className="p-4 border rounded-lg bg-gray-50 shadow-sm">
            <p className="text-gray-700">
              <strong>User's Review:</strong> {review}
            </p>
          </div>
        ) : (
          // Show the review submission form if no review
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded-lg bg-gray-50 shadow-sm"
          >
            <label className="block text-gray-700 font-medium mb-2">
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
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-blue-500 transition duration-300 ease-in-out transform  shadow-lg"
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
