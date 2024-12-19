import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Products from './pages/Products/Products.jsx'
import AddProducts from './pages/AddProducts/AddProducts.jsx'
import Contact from './pages/Contact/Contact.jsx'
import ChangePassword from './pages/ChangePassword/ChangePassword.jsx'
import EditProfile from './pages/EditProfile/EditProfile.jsx'
import Deposit from './pages/Deposit/Deposit.jsx'
import MyPurchasedProducts from './pages/MyPurchasedProducts/MyPurchasedProducts.jsx'
import MyShortlistedProducts from './pages/MyShortlistedProducts/MyShortlistedProducts.jsx'
import Transactions from './pages/Transactions/Transactions.jsx'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import EditProducts from './pages/EditProducts/EditProducts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Oops, something went wrong!</h1>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/about', element: <About></About> },
      { path: '/products', element: <Products></Products> },
      { path: '/product-details', element: <ProductDetails></ProductDetails> },
      { path: '/add-products', element: <AddProducts></AddProducts> },
      { path: '/edit-products', element: <EditProducts></EditProducts> },
      { path: '/contact', element: <Contact></Contact> },
      { path: '/register', element: <Register></Register> },
      { path: '/login', element: <Login></Login> },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          { path: 'profile/change-password', element: <ChangePassword></ChangePassword> },
          { path: 'profile/edit-profile', element: <EditProfile></EditProfile> },
          { path: 'profile/deposit', element: <Deposit></Deposit> },
          { path: 'profile/transactions', element: <Transactions></Transactions> },
          { path: 'my-purchased-products', element: <MyPurchasedProducts></MyPurchasedProducts> },
          { path: 'my-shortlisted-products', element: <MyShortlistedProducts></MyShortlistedProducts> },
          { path: 'logout', element: <h2>Logout Page</h2> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)