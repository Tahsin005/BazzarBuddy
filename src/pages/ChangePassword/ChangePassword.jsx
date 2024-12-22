import React, { useState } from 'react';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangePassword = (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage("New password and confirmation password do not match.");
            return;
        }

        // fetch('/change-password', {
        //   method: 'POST',
        //   body: JSON.stringify({ oldPassword, newPassword }),
        // });

        setErrorMessage('');
        alert('Password changed successfully!');
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
                                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your old password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* New Password */}
                            <div className="mt-4">
                                <label htmlFor="password" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">New Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Confirm New Password */}
                            <div className="mt-4">
                                <label htmlFor="password2" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Confirm your new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 space-x-4">
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
        </main>
    );
};

export default ChangePassword;
