import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BlinkBlur } from 'react-loading-indicators';

const Deposit = () => {
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('bazzar_buddy_token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const handleDeposit = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        const amountValue = parseInt(amount);
        const accountValue = parseInt(localStorage.getItem('bazzar_buddy_user_account'));

        if (isNaN(amountValue) || isNaN(accountValue)) {
            setErrorMessage('Invalid input. Please enter a valid amount.');
            return;
        }

        if (amountValue < 100) {
            toast.info('Minimum deposit amount is $100.');
            return;
        }

        try {
            const response = await fetch('https://lifted-listed-backend.onrender.com/transaction/deposit/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: amountValue, account: accountValue }),
            });

            if (response.ok) {
                toast.success(`You have successfully deposited $${amountValue}`);
                setAmount(''); // Reset input field after success
                setIsLoading(false);
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            } else {
                const data = await response.json();
                toast.error(data.message || 'Failed to deposit. Please try again.');
            }
        } catch (error) {
            console.error('Error during deposit:', error);
            toast.error('Error during deposit. Please try again.');
        }
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
                                <label htmlFor="amount" className="block mb-1 text-xl font-medium text-gray-700 lg:text-2xl">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="block w-full px-3 py-1 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out transform bg-black rounded-lg hover:text-black hover:bg-yellow-300 lg:text-lg hover:shadow-lg"
                                >
                                    {isLoading ? (<BlinkBlur color="#2563eb" size="medium" text="" textColor="" />) : "Deposit"}
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

export default Deposit;