import React from 'react';

const Transactions = () => {
    const transactions = [
        {
            amount: "1000.00",
            balance_after_transaction: "1000.00",
            transaction_type: "Deposit",
            timestamp: "2024-12-20T06:33:05.979846Z",
        },
        {
            amount: "300.00",
            balance_after_transaction: "700.00",
            transaction_type: "Pay",
            timestamp: "2024-12-20T06:33:27.008649Z",
        },
        {
            amount: "100.00",
            balance_after_transaction: "800.00",
            transaction_type: "Receive",
            timestamp: "2024-12-20T06:35:42.489226Z",
        },
    ];

    const getRowClass = (transactionType) => {
      switch (transactionType.toLowerCase()) {
          case "deposit":
              return "bg-blue-600 bg-opacity-50 text-black";
          case "receive":
              return "bg-green-600 bg-opacity-50 text-black";
          case "pay":
              return "bg-red-600 bg-opacity-50 text-black";
          default:
              return "bg-gray-100";
      }
  };

    return (
        <main className="mx-auto pt-2 mt-2">
            <h1 className="font-bold text-3xl md:text-4xl text-center mb-8">Transactions</h1>

            <div className="grid grid-cols-1">
                <div className="my-auto">
                    <div className="rounded">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Timestamp</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Transaction Type</th>
                                    <th className="border border-gray-300 px-4 py-2 text-right">Amount</th>
                                    <th className="border border-gray-300 px-4 py-2 text-right">
                                        Balance After Transaction
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index} className={getRowClass(transaction.transaction_type)}>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {new Date(transaction.timestamp).toLocaleString()}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 capitalize">
                                            {transaction.transaction_type.toLowerCase()}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-right">
                                            ${transaction.amount}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-right">
                                            ${transaction.balance_after_transaction}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Transactions;
