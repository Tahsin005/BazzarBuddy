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
        <main className="mx-auto pt-2 mt-2">
            <h1 className="font-bold text-2xl md:text-3xl text-center mb-8">Deposit</h1>

            {/* Error Container */}
            {errorMessage && (
                <div id="error-container" className="text-red-500 mb-4">
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
                                    className="text-xl lg:text-2xl text-gray-700 block mb-1 font-medium"
                                >
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                    placeholder="Enter the deposit amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="space-x-4 mt-8">
                                <button
                                    type="submit"
                                    className="bg-black text-white hover:text-black hover:bg-yellow-300 py-3 px-6 rounded-lg font-semibold text-base lg:text-lg transition duration-300 ease-in-out transform hover:shadow-lg w-full"
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
