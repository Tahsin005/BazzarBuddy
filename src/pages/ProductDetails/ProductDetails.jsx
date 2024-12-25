import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BlinkBlur } from 'react-loading-indicators';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [userBalance, setUserBalance] = useState(null);
  const [review, setReview] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [isReviewLoading, setIsReviewLoading] = useState(false);

  if (!product) {
    navigate('/products');
    return null;
  }

  useEffect(() => {
    setIsReviewLoading(true);
    try {
      const user_account = localStorage.getItem('bazzar_buddy_user_account');
      fetch(`http://127.0.0.1:8000/user/account/${user_account}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data?.balance) {
            console.log(data);
            setUserBalance(data.balance);
          }
        });
    } catch (error) {
      console.error(error);
    }

    try {
      fetch(`https://lifted-listed-backend.onrender.com/product/review/?product__id=${product?.id}`)
        .then((response) => response.json())
        .then((data) => {
          setReview(data);
          setIsReviewLoading(false);
          console.log(data)
        });
    } catch (error) {
      console.error(error);
    }
  }, [product.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(e);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    buyProduct(e);
  }

  const buyProduct = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("bazzar_buddy_token");

    const product_id = product?.id;
    const user_id = localStorage.getItem("bazzar_buddy_user_id");
    let seller_id = null;

    if (product.bought_by) {
      toast.error('Product already bought by another user.');
      return;
    }

    if (product.price > userBalance) {
      toast.error("Insufficient balance to purchase the product.");
      setTimeout(() => {
        navigate("/dashboard/profile/deposit");
      }, 2000);
      return;
    }

    seller_id = product.added_by['id'];

    fetch(`https://lifted-listed-backend.onrender.com/product/buy/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ product_id, user_id, seller_id }),
    })
      .then((response) => {
        if (response.status == 200) {
          toast.success("Product bought successfully");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          console.log("Error buying product");
        }
      })
      .catch((error) => {
        console.error("Error buying product", error);
      });
  };

  const addReview = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("bazzar_buddy_token");
    if (!token) {
      navigate("/login");
      return;
    }
    const body = newReview;
    const product_id = product?.id;
    const user_id = localStorage.getItem("bazzar_buddy_user_id");

    try {
      const formData = new FormData();
      formData.append("body", body);
      formData.append("product", product_id);
      formData.append("user", user_id);

      fetch(`https://lifted-listed-backend.onrender.com/product/review/`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setReview([...review, { body, user: user_id }]);
            setNewReview("");
            toast.success("Review submitted successfully");
          } else {
            console.log("Error while reviewing");
          }
        })
        .catch((error) => {
          console.error("Error submitting review:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image Section */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            {product.name}
          </h1>
          <h2 className="mb-2 text-lg text-gray-600">Category: {product.category}</h2>
          <p className="mb-4 text-2xl font-semibold text-blue-600">${product.price}</p>
          <p className="mb-6 leading-relaxed text-gray-700">
            {product.description}
          </p>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex gap-4">
            <Link
              to='/edit-products'
              state={{ product }}
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-xl"
            >
              Edit Product
            </Link>
            <button onClick={handlePurchase} className="px-6 py-3 font-semibold text-black transition duration-300 ease-in-out transform bg-yellow-400 shadow-lg rounded-xl hover:bg-yellow-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {product?.bought_by && product?.bought_by['id'] == localStorage.getItem("bazzar_buddy_user_id") ? (<div className="mt-16">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">{review.length > 0 ? "Review" : ''}</h2>

        {isReviewLoading ? (<div className="flex items-center justify-start h-32">
          <BlinkBlur color="#2563eb" size="small" text="" textColor="" />
        </div>) : (review.length > 0 ? (
          // Show the review if submitted
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <p className="text-gray-700">
              <strong>User's Review:</strong>
              {review.map((rev, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <p className="text-gray-700">
                    <strong>User's Review:</strong> {rev.body}
                  </p>
                </div>
              ))}
            </p>
          </div>
        ) : (<form
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
            className="px-6 py-2 mt-4 font-semibold text-white transition duration-300 ease-in-out transform bg-black shadow-lg rounded-xl hover:bg-yellow-300 hover:text-black"
          >
            Submit Review
          </button>
        </form>))}
      </div>) : ""}

      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
