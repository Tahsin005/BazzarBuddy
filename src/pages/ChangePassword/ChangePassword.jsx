import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authCheck';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async (event) => {
    event.preventDefault();

    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }

    const user_id = localStorage.getItem('bazzar_buddy_user_id');

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation password do not match.");
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/user/password_change/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id, old_password: oldPassword, password: newPassword, password2: confirmPassword }),
      });
      const data = await response.json();
      if (data.message) {
        toast.success('Password changed successfully');
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
          toast.error('Old password is not correct!');
          setTimeout(() => {
          navigate('/dashboard/profile/change-password');
        }, 2000);
      }
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('Error changing password. Please try again.');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  };

  return (
    <main className="pt-2 mx-auto mt-2">
      <h1 className="mb-8 text-2xl font-bold text-center md:text-3xl">Change Your Password</h1>

      {/* Error Container */}
      {errorMessage && (
        <div id="error-container" className="mb-4 text-red-500">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1">
        <div className="my-auto">
          <div className="rounded">
            <form method="POST" onSubmit={handleChangePassword}>
              {/* Old Password */}
              <div className="mt-4">
                <label htmlFor="old-password" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">Old Password</label>
                <input
                  type="password"
                  name="old-password"
                  id="old-password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="block w-full px-3 py-1 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* New Password */}
              <div className="mt-4">
                <label htmlFor="new-password" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">New Password</label>
                <input
                  type="password"
                  name="new-password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="block w-full px-3 py-1 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Confirm New Password */}
              <div className="mt-4">
                <label htmlFor="confirm-password" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">Confirm New Password</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full px-3 py-1 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 lg:text-lg hover:shadow-lg"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default ChangePassword;