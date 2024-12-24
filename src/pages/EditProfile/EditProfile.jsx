import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BlinkBlur } from 'react-loading-indicators';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const user_id = localStorage.getItem('bazzar_buddy_user_id');
  const user_account = localStorage.getItem('bazzar_buddy_user_account');
  const navigate = useNavigate();

  useEffect(() => {
    const loadInstance = () => {
      setIsLoading(true);
      try {
        fetch(`http://127.0.0.1:8000/user/allUser/${user_id}/`)
          .then((res) => res.json())
          .then((user) => {
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setEmail(user.email);
            try {
              fetch(`http://127.0.0.1:8000/user/account/${user_account}/`)
                .then((response) => response.json())
                .then((account) => {
                  console.log(account);
                  setIsLoading(false);
                });
            } catch (error) {
              console.log(error);
              setIsLoading(false);
            }
          });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    if (user_account && user_id) {
      loadInstance();
    }
  }, [user_id, user_account]);

  const handleEditProfile = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email) {
      toast.error('All fields are required.');
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);

    try {
      const response = await fetch(`http://127.0.0.1:8000/user/update/${user_id}/`, {
        method: 'PATCH',
        body: formData,
      });
      const data = await response.json();
      toast.success('Account updated successfully');
      setTimeout(() => {
        navigate('/dashboard/profile/edit-profile');
      }, 2000);
    } catch (error) {
      console.log('Error updating account:', error);
      toast.error('Error updating account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-2 mx-auto mt-2">
      <h1 className="mb-8 text-2xl font-bold text-center md:text-3xl">Edit Your Profile</h1>
      {isLoading ? (
        <div className="flex items-center justify-center h-52">
          <BlinkBlur color="#2563eb" size="medium" text="" textColor="" />
        </div>
      ) : (
        <form onSubmit={handleEditProfile}>
          <div className="mb-4">
            <label htmlFor="first_name" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="last_name" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 lg:text-lg hover:shadow-lg"
            >
              Update Profile
            </button>
          </div>
        </form>
      )}
      <ToastContainer />
    </main>
  );
};

export default EditProfile;