import React, { useEffect, useState } from 'react';
import { BlinkBlur } from 'react-loading-indicators';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const user_id = localStorage.getItem('bazzar_buddy_user_id');
    if (!user_id) {
      setErrorMessage('User not found. Please log in.');
      return;
    }

    const fetchTransactions = async () => {
      try {
        const response = await fetch(`https://lifted-listed-backend.onrender.com/transaction/transactions/${user_id}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        const data = await response.json();
        setTransactions(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setErrorMessage('Error fetching transactions. Please try again.');
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const getRowClass = (transactionType) => {
    switch (transactionType.toLowerCase()) {
      case 'deposit':
        return 'bg-blue-600 bg-opacity-50 text-black';
      case 'receive':
        return 'bg-green-600 bg-opacity-50 text-black';
      case 'pay':
        return 'bg-red-600 bg-opacity-50 text-black';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <main className="pt-2 mx-auto mt-2">
      <h1 className="mb-8 text-2xl font-bold text-center md:text-3xl">Transactions</h1>

      {errorMessage && (
        <div id="error-container" className="mb-4 text-red-500">
          {errorMessage}
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center h-52">
          <BlinkBlur color="#2563eb" size="medium" text="" textColor="" />
        </div>
      ) : (
        transactions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Amount</th>
                  <th className="px-4 py-2 border-b">Balance After Transaction</th>
                  <th className="px-4 py-2 border-b">Transaction Type</th>
                  <th className="px-4 py-2 border-b">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className={getRowClass(transaction.transaction_type)}>
                    <td className="px-4 py-2 border-b">{transaction.amount}</td>
                    <td className="px-4 py-2 border-b">{transaction.balance_after_transaction}</td>
                    <td className="px-4 py-2 border-b">{transaction.transaction_type}</td>
                    <td className="px-4 py-2 border-b">{new Date(transaction.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center mt-10">
            <p className="text-4xl font-bold text-gray-700">No Transactions to Show</p>
          </div>
        )
      )}
    </main>
  );
};

export default Transactions;