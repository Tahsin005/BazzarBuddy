import React, { useState } from 'react';
import { BlinkBlur } from 'react-loading-indicators';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username || !password) {
      toast.error("Please fill in both username and password.");
      return;
    }

    setIsLoading(true);

    fetch("https://lifted-listed-backend.onrender.com/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token && data.user_id) {
          localStorage.setItem("bazzar_buddy_token", data.token);
          localStorage.setItem("bazzar_buddy_user_id", data.user_id);
          const user_id = data.user_id;

          fetch(`https://lifted-listed-backend.onrender.com/user/account/?user_id=${user_id}`)
            .then((res) => res.json())
            .then((value) => {
              var ID = 0;
              value.forEach(element => {
                if (element.user === data.user_id) {
                  ID = element.id;
                }
              });

              if (data && value && ID) {
                localStorage.setItem("bazzar_buddy_user_account", ID);
                localStorage.setItem("bazzar_buddy_username", username);
                setIsLoading(false);

                toast.success('Logged in successfully');

                setTimeout(() => {
                  navigate('/');
                }, 2000);
              }
            })
            .catch((err) => {
              console.error("Error fetching account details:", err);
              toast.error("Failed to retrieve user account details.");
              setIsLoading(false);
            });
        } else {
          toast.error("Invalid username or password.");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        toast.error("An error occurred while logging in. Please try again later.");
        setIsLoading(false);
      });
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 md:text-4xl">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                {isLoading ? <BlinkBlur color="#2563eb" size="medium" text="" textColor="" /> : "Login"}
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;