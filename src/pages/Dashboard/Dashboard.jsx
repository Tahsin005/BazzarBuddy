import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar / Top Navigation */}
      <aside className="bg-slate-100 mt-4 text-black rounded-xl w-full md:w-64 md:min-h-screen flex flex-wrap md:block">
        <div className="p-6 w-full">
          <NavLink to={'/dashboard'} className="text-2xl font-bold mb-4 text-center md:text-left">
            Dashboard
          </NavLink>
          <nav className="space-y-4 md:space-y-4 md:flex md:flex-col mt-3">
            {/* Profile Navigation */}
            <div className="flex flex-wrap justify-center md:block">
              <h3 className="text-lg font-semibold w-full text-center md:text-left mb-2 md:mb-0">
                Profile
              </h3>
              <NavLink
                to="profile/change-password"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Change Password
              </NavLink>
              <NavLink
                to="profile/edit-profile"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Edit Profile
              </NavLink>
              <NavLink
                to="profile/deposit"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Deposit
              </NavLink>
              <NavLink
                to="profile/transactions"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Transactions
              </NavLink>
            </div>
            {/* Products Navigation */}
            <div className="flex flex-wrap justify-center md:block mt-4 md:mt-0">
              <h3 className="text-lg font-semibold w-full text-center md:text-left mb-2 md:mb-0">
                My Products
              </h3>
              <NavLink
                to="my-purchased-products"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Purchased Products
              </NavLink>
              <NavLink
                to="my-shortlisted-products"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Shortlisted Products
              </NavLink>
              <NavLink
                to="logout"
                className={({ isActive }) =>
                  `px-4 py-2 md:px-2 md:py-1 rounded text-center w-full md:w-auto block mb-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-yellow-300'
                  }`
                }
              >
                Logout
              </NavLink>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {location.pathname === '/dashboard' ? (
          <div className="p-4 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Welcome, User!</h1>
            <p className="text-lg">
              Here is your account overview and some important details about your profile.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Name:</strong> John Doe
              </li>
              <li>
                <strong>Email:</strong> johndoe@example.com
              </li>
            </ul>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
