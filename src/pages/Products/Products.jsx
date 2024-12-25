import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlinkBlur } from 'react-loading-indicators';

const Products = () => {
  const [allProducts, setAllProducts] = useState(4);
  const [maxPrice, setMaxPrice] = useState(99999);
  const [searchTerm, setSearchTerm] = useState("");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [triggerSearch, setTriggerSearch] = useState(false);

  console.log(selectedCategories);

  const productss = [
    { id: 1, name: "Smartphone", category: "Electronics", price: 300, image: "https://i.ibb.co.com/gD4Ps8N/1.jpg" },
    { id: 2, name: "T-shirt", category: "Clothing", price: 20, image: "https://i.ibb.co.com/TtjdRN5/2.jpg" },
    { id: 3, name: "Book", category: "Books", price: 15, image: "https://i.ibb.co.com/tQqdGhG/3.jpg" },
    { id: 4, name: "Mixer", category: "Home Appliances", price: 100, image: "https://i.ibb.co.com/3spy4d1/4.jpg" },
    { id: 5, name: "Football", category: "Sports", price: 25, image: "https://i.ibb.co.com/gD4Ps8N/1.jpg" },
    { id: 6, name: "Toy Car", category: "Toys", price: 10, image: "https://i.ibb.co.com/TtjdRN5/2.jpg" },
  ];

  useEffect(() => {
    setIsCategoriesLoading(true);
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/product/category/');
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
    const fetchProducts = async () => {
      try {
        let rootUrl = `http://127.0.0.1:8000/product/list/?max_price=${maxPrice}`;

        if (selectedCategories.length > 0) {
          for (let i = 0; i < selectedCategories.length; i++) {
            rootUrl += `&categories__slug=${selectedCategories[i]}`;
          }
        }

        if (searchTerm) {
          rootUrl += `&search=${searchTerm}`;
        }

        console.log(maxPrice);
        console.log(rootUrl);

        const response = await fetch(rootUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts([]);

        console.log(data);
        setProducts(data);
        setIsProductsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [triggerSearch]);

  const handleCategoryChange = (categorySlug) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(categorySlug)
        ? prevSelectedCategories.filter((c) => c !== categorySlug)
        : [...prevSelectedCategories, categorySlug]
    );
  };

  const handleSearch = () => {
    setTriggerSearch(!triggerSearch);
  };

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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-4 font-medium text-gray-700">Categories:</label>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {isCategoriesLoading ? (
                  <div className="flex items-center justify-center">
                    <BlinkBlur color="#2563eb" size="small" text="" textColor="" />
                  </div>
                ) : (
                  categories.map((category) => (
                    <label key={category.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-blue-600 form-checkbox"
                        checked={selectedCategories.includes(category.slug)}
                        onChange={() => handleCategoryChange(category.slug)}
                      />
                      <span className="text-lg text-gray-800">{category.name}</span>
                    </label>
                  ))
                )}
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
            <button
              onClick={handleSearch}
              className="px-4 py-2 font-semibold text-white bg-black rounded-lg hover:text-black hover:bg-yellow-300"
            >
              Apply Filters
            </button>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Products</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {isProductsLoading ? (<div className="flex items-center justify-center h-52">
              <BlinkBlur color="#2563eb" size="large" text="" textColor="" />
            </div>) : (
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
                        Category: {product.categories.map((category) => category.name).join(', ')}
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
                        to="/product-details"
                        className="w-full px-6 py-2 text-lg font-semibold text-center text-white transition duration-300 ease-in-out transform bg-black hover:bg-yellow-300 hover:text-black rounded-xl hover:shadow-lg"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
