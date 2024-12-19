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
        <main className="mx-auto pt-2 mt-2">
            <h1 className="font-bold text-3xl md:text-4xl text-center mb-8">Change Your Password</h1>

            {/* Error Container */}
            {errorMessage && (
                <div id="error-container" className="text-red-500 mb-4">
                    {errorMessage}
                </div>
            )}

            <div className="grid grid-cols-1">
                <div className="my-auto">
                    <div className="rounded">
                        <form method="POST" onSubmit={handleChangePassword}>
                            {/* Old Password */}
                            <div className="mt-4">
                                <label htmlFor="old-password" className="text-2xl text-gray-700 block mb-1 font-medium">Old Password</label>
                                <input
                                    type="password"
                                    name="old-password"
                                    id="old-password"
                                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                    placeholder="Enter your old password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* New Password */}
                            <div className="mt-4">
                                <label htmlFor="password" className="text-2xl text-gray-700 block mb-1 font-medium">New Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                    placeholder="Enter your new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Confirm New Password */}
                            <div className="mt-4">
                                <label htmlFor="password2" className="text-2xl text-gray-700 block mb-1 font-medium">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                    placeholder="Confirm your new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="space-x-4 mt-8">
                                <button
                                    type="submit"
                                    className="bg-black text-white hover:text-black hover:bg-yellow-300 py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:shadow-lg w-full"
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
