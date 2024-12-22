import React from 'react';
import { Link } from 'react-router-dom';
import aboutUs from '../../assets/aboutUs.jpeg';

const About = () => {
  return (
    <div className=''>
      <section className='bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24'>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Text Section */}
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                About Us
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-5xl xl:text-6xl">
                Who We Are & What We Do
              </h2>
              <p className="mt-4 text-base text-black lg:mt-6 sm:text-lg">
                Welcome to <strong>BazzarBuddy</strong> – your ultimate destination to buy, sell, and discover top-quality products.
                We connect buyers and sellers in a seamless, user-friendly platform to make online shopping efficient and enjoyable.
              </p>
              <p className="mt-4 text-base text-gray-600">
                Our mission is to help you shop smarter, not harder, by curating the best-rated products for your needs.
              </p>
              <div className="flex flex-col mt-8 sm:flex-row sm:space-x-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
                >
                  Browse Products
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 mt-4 text-base font-semibold text-black transition-all duration-200 border-2 border-yellow-300 rounded-full sm:mt-0 hover:bg-yellow-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div>
              <img
                className="w-full rounded-lg shadow-lg"
                src={aboutUs}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
