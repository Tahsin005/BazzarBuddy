import React, { useState } from 'react';

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEditProfile = (event) => {
        event.preventDefault();

        // Basic validation (e.g., check for empty fields)
        if (!firstName || !lastName || !email) {
            setErrorMessage("All fields are required.");
            return;
        }

        // Simulated success message
        setErrorMessage('');
        alert('Profile updated successfully!');
    };

    return (
        <main className="pt-2 mx-auto mt-2">
            <h1 className="mb-8 text-2xl font-bold text-center md:text-3xl">Edit Your Profile</h1>

            {/* Error Container */}
            {errorMessage && (
                <div id="error-container" className="mb-4 text-red-500">
                    {errorMessage}
                </div>
            )}

            <div className="grid grid-cols-1">
                <div className="my-auto">
                    <div className="rounded">
                        <form method="POST" onSubmit={handleEditProfile}>
                            <div className="grid gap-4 mt-8 lg:grid-cols-2">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="first_name" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your first name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label htmlFor="last_name" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="block mt-4 text-xl font-medium text-gray-700 lg:text-2xl">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 space-x-4">
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 lg:text-lg hover:shadow-lg"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EditProfile;
