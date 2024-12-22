import React, { useState } from 'react';
import { BlinkBlur } from 'react-loading-indicators';
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
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (data.error) {
            toast.error(`${data.error}`);
          } else if (data.username && Array.isArray(data.username)) {
            toast.error(`${data.username[0]}`);
          } else {
            toast.success("Check your mail for confirmation link.");
            console.dir(data)
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
    <>
      <ToastContainer />
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 md:text-4xl">Sign Up</h1>
            {isLoading ? (<div className='flex items-center justify-center h-72'>
              <BlinkBlur color="#2563eb" size="medium" text="" textColor="" />
            </div>) : (<form onSubmit={handleSubmit} className="space-y-6">
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

              {/* First Name */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-2xl font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1 text-2xl font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-2xl font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
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

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block mb-1 text-2xl font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-8 space-x-4">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 hover:shadow-lg"
                >
                  Register
                </button>
              </div>

              {/* Login Link */}
              <p className="mt-4 text-sm text-center text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Login
                </a>
              </p>
            </form>)}

          </div>
        </div>
      </section>

    </>
  );
};

export default Register;
