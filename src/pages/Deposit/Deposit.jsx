import React, { useState } from 'react';

const Deposit = () => {
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDeposit = (event) => {
        event.preventDefault();

        // Basic validation (e.g., check for empty or invalid amount)
        if (!amount || isNaN(amount) || amount <= 0) {
            setErrorMessage("Please enter a valid amount.");
            return;
        }

        // Simulated success message
        setErrorMessage('');
        alert(`You have successfully deposited $${amount}`);
        setAmount(''); // Reset input field after success
    };

    return (
        <main className="pt-2 mx-auto mt-2">
            <h1 className="mb-8 text-2xl font-bold text-center md:text-3xl">Deposit</h1>

            {/* Error Container */}
            {errorMessage && (
                <div id="error-container" className="mb-4 text-red-500">
                    {errorMessage}
                </div>
            )}

            <div className="grid grid-cols-1">
                <div className="my-auto">
                    <div className="rounded">
                        <form method="POST" onSubmit={handleDeposit}>
                            <div className="mt-4">
                                {/* Amount Input */}
                                <label
                                    htmlFor="amount"
                                    className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl"
                                >
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter the deposit amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 space-x-4">
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 lg:text-lg hover:shadow-lg"
                                >
                                    Deposit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Deposit;
