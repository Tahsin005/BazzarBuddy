import React, { useState } from 'react';
import { BlinkBlur } from 'react-loading-indicators';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Attempt:', formData);
    // Add your form submission logic here (e.g., API call).
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 md:text-4xl">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block mb-1 text-2xl font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-2xl font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8 space-x-4">
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 hover:shadow-lg"
              >
                Login
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
