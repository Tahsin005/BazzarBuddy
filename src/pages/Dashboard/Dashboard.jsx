import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1 className='font-bold'>Dashboard</h1>
      <nav>
        <ul className='flex'>
          <li className='text-red-500'><a href="/dashboard/change-password">Change Password</a></li>
          <br />
          <li className=''><a href="/dashboard/change-password">Edit Account</a></li>
          <br />
          <li className='text-red-500'><a href="/dashboard/change-password">My Transactions</a></li>
          <br />
          <li className=''><a href="/dashboard/my-purchased-products">My Purchased Products</a></li>
          <br />
          <li className='text-red-500'><a href="/dashboard/my-shortlisted-products">My Shortlisted Products</a></li>
          <br />
          <li className=''><a href="/dashboard/logout">Logout</a></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard
