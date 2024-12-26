import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-2xl text-gray-700">There seems to be an error.</p>
      <Link
        to="/"
        className="px-6 py-3 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
