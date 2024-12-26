import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BlinkBlur } from 'react-loading-indicators';
import { toast, ToastContainer } from 'react-toastify';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const user_id = localStorage.getItem('bazzar_buddy_user_id');
    const user_account = localStorage.getItem('bazzar_buddy_user_account');
    console.log(user_id, user_account);

    try {
      fetch(`https://lifted-listed-backend.onrender.com/user/allUser/${user_id}/`)
        .then((response) => response.json())
        .then((userData) => {
          setUser(userData);
          try {
            fetch(`https://lifted-listed-backend.onrender.com/user/account/${user_account}/`)
              .then((response) => response.json())
              .then((account) => {
                setAccount(account);
                setIsLoading(false);
                console.log(userData);
                console.log(account);
              })
          } catch (error) {
            console.error('Error fetching account:', error);
          }
        })
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }, []);

  const handleLogout = () => {
    toast.success('Logged out successfully');
    localStorage.removeItem('bazzar_buddy_token');
    localStorage.removeItem('bazzar_buddy_user_id');
    localStorage.removeItem('bazzar_buddy_user_account');
    localStorage.removeItem('bazzar_buddy_user_name');
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Sidebar / Top Navigation */}
      <aside className="flex flex-wrap w-full mt-4 text-black bg-slate-100 rounded-xl md:w-52 lg:w-64 md:min-h-screen md:block">
        <div className="w-full p-6">
          <NavLink to={'/dashboard'} className="mb-4 text-2xl font-bold text-center md:text-left">
            Dashboard
          </NavLink>
          <nav className="mt-3 space-y-4 md:space-y-4 md:flex md:flex-col">
            {/* Profile Navigation */}
            <div className="flex flex-wrap justify-center md:block">
              <h3 className="w-full mb-2 text-lg font-semibold text-center md:text-left md:mb-0">
                Profile
              </h3>
              <NavLink
                to="profile/change-password"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center text-sm md:text-sm lg:text-lg w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Change Password
              </NavLink>
              <NavLink
                to="profile/edit-profile"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center text-sm md:text-sm lg:text-lg w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Edit Profile
              </NavLink>
              <NavLink
                to="profile/deposit"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center text-sm md:text-sm lg:text-lg w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Deposit
              </NavLink>
              <NavLink
                to="profile/transactions"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center text-sm md:text-sm lg:text-lg w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Transactions
              </NavLink>
            </div>
            {/* Products Navigation */}
            <div className="flex flex-wrap justify-center mt-4 md:block md:mt-0">
              <h3 className="w-full mb-2 text-lg font-semibold text-center md:text-left md:mb-0">
                My Products
              </h3>
              <NavLink
                to="my-purchased-products"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center text-sm md:text-sm lg:text-lg w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Purchased Products
              </NavLink>
              <NavLink
                to="my-shortlisted-products"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center text-sm md:text-sm lg:text-lg w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Shortlisted Products
              </NavLink>
              <button
                onClick={handleLogout}
                className="px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 lg:text-lg hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {location.pathname === '/dashboard' ? (
          <div>
            {isLoading ? (
              <div className='flex items-center justify-center h-52'>
                <BlinkBlur color="#2563eb" size="medium" text="" textColor="" />
              </div>
            ) : (
              <div className="p-4 bg-white rounded-lg shadow">
                <h1 className="mb-4 text-xl font-bold text-center sm:text-lg">Welcome to Your Dashboard</h1>
                <section className="p-4 mx-auto rounded-lg shadow bg-slate-100 sm:p-3 md:max-w-md">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    {/* Profile Picture Placeholder */}
                    <div className="flex items-center justify-center w-24 h-24 text-gray-600 bg-gray-300 rounded-full">
                      {user?.first_name ? (
                        <span className="text-2xl font-semibold">{user.first_name[0]}</span>
                      ) : (
                        <span className="text-2xl font-semibold">P</span>
                      )}
                    </div>

                    <h2 className="text-base font-bold text-gray-900 sm:text-sm">
                      {user?.first_name} {user?.last_name}
                    </h2>
                    <p className="text-sm text-gray-600">@{user?.username}</p>

                    <div className="mt-4 space-y-3 text-left">
                      <div className="flex items-center justify-between sm:text-sm">
                        <span className="font-medium text-gray-700">Email:</span>
                        <a
                          href={`mailto:${user?.email}`}
                          className="font-bold text-blue-600 hover:underline"
                        >
                          {user?.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-between sm:text-sm">
                        <span className="font-medium text-gray-700">Balance:</span>
                        <span className="font-bold text-green-600">{account?.balance}</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
