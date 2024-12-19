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
        <main className="mx-auto pt-2 mt-2">
            <h1 className="font-bold text-2xl md:text-3xl text-center mb-8">Edit Your Profile</h1>

            {/* Error Container */}
            {errorMessage && (
                <div id="error-container" className="text-red-500 mb-4">
                    {errorMessage}
                </div>
            )}

            <div className="grid grid-cols-1">
                <div className="my-auto">
                    <div className="rounded">
                        <form method="POST" onSubmit={handleEditProfile}>
                            <div className="mt-8 grid lg:grid-cols-2 gap-4">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="first_name" className="text-xl lg:text-2xl text-gray-700 block mb-1 font-medium">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                        placeholder="Enter your first name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label htmlFor="last_name" className="text-xl lg:text-2xl text-gray-700 block mb-1 font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                        placeholder="Enter your last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="text-xl lg:text-2xl text-gray-700 block mt-4 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="space-x-4 mt-8">
                                <button
                                    type="submit"
                                    className="bg-black text-white hover:text-black hover:bg-yellow-300 py-3 px-6 rounded-lg font-semibold text-base lg:text-lg transition duration-300 ease-in-out transform hover:shadow-lg w-full"
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
