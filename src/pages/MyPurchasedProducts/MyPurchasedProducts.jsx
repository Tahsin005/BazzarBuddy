import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { BlinkBlur } from 'react-loading-indicators';

const MyPurchasedProducts = ({ }) => {
  const [allProducts, setAllProducts] = useState(8);
  const [maxPrice, setMaxPrice] = useState(99999);
  const [searchTerm, setSearchTerm] = useState("");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [triggerSearch, setTriggerSearch] = useState(false);

  useEffect(() => {
    setIsCategoriesLoading(true);
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://lifted-listed-backend.onrender.com/product/category/');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
        setIsCategoriesLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    setIsProductsLoading(true);
    try {
      const fetchPoducts = async () => {
        let rootUrl = `https://lifted-listed-backend.onrender.com/product/list/`;
        const response = await fetch(rootUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const userId = localStorage.getItem('bazzar_buddy_user_id');
        const filteredProducts = data.filter(product => product.bought_by == userId);
        setProducts(filteredProducts);
        setIsProductsLoading(false);
      }

      fetchPoducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  const productss = [
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
        {isProductsLoading && isCategoriesLoading ? (
          <div className="flex items-center justify-center mt-40">
            <BlinkBlur color="#2563eb" size="medium" text="" textColor="" />
          </div>
        ) : (
          products && products.length > 0 ? (
            products.slice(0, allProducts).map((product) => (
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
                    <h2 className="text-sm text-gray-600">
                      Category: {product.categories.map((categoryId) => getCategoryName(categoryId)).join(', ')}
                    </h2>
                  </div>
                  <h2 className="mt-2 font-semibold text-md">
                    Price: <span>${product.price}</span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-700">
                    {product.description}
                  </p>
                  <div className="justify-center mt-4 card-actions">
                    <Link
                      to={`/product-details`}
                      state={{ product }}
                      className="w-full px-6 py-2 text-lg font-semibold text-center text-white transition duration-300 ease-in-out transform bg-black hover:bg-yellow-300 hover:text-black rounded-xl hover:shadow-lg"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center mt-20">
              <p className="text-4xl font-bold text-gray-700">No Products Found</p>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default MyPurchasedProducts;
