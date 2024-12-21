import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, first_name, last_name, email, password, confirm_password } = formData;
    if (!username || !first_name || !last_name || !email || !password || !confirm_password) {
      toast.warning('Please fill out all fields.');
      return;
    }

    if (password !== confirm_password) {
      toast.error('Passwords do not match.');
      return;
    }
    setIsLoading(true);

    try {
      fetch("http://127.0.0.1:8000/user/register/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      })
          .then((response) => {
              if (response.status === 200) {
                  setIsLoading(false);
                  toast.success("Check your mail for confirmation link.");
                  setTimeout(() => {
                      navigate('/login');
                  }, 2000);
              } else {
                setIsLoading(false);
                  console.log("Registration failed with status code:", response.status);
                  toast.error(response.statusText);
              }
          })
          .catch((error) => {
            setIsLoading(false);
              console.log("Error during registration:", error);
              toast.error("An error occurred during registration.");
          });

  } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error("An unexpected error occurred.");
  }

  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* First Name */}
            <div>
              <label
                htmlFor="first_name"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last_name"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your last name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm_password"
                className="text-gray-700 block mb-1 font-medium text-2xl"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="space-x-4 mt-8">
              <button
                type="submit"
                className="bg-black text-white hover:text-black hover:bg-yellow-300 py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:shadow-lg w-full"
              >
                Register
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
