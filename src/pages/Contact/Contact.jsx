import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 sm:text-4xl lg:text-5xl">Get in Touch</h2>
            <form className="mt-8 space-y-6">
              <div>
                <label className="block text-gray-600 font-medium" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  className="w-full mt-2 px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-yellow-400 focus:bg-yellow-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 sm:text-4xl lg:text-5xl">Contact Info</h2>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Feel free to reach out to us at any time. We're here to help!
            </p>
            <div className="mt-6 space-y-4">
              <p className="text-base text-gray-600">
                <span className="font-semibold text-black">Address:</span> 123 Main Street, Cityville, USA
              </p>
              <p className="text-base text-gray-600">
                <span className="font-semibold text-black">Phone:</span> +1 (123) 456-7890
              </p>
              <p className="text-base text-gray-600">
                <span className="font-semibold text-black">Email:</span> support@bazaarbuddy.com
              </p>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.834434509163!2d-122.42067968425112!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858156c36e1287%3A0xb50d9f4dc84b33!2s123%20Main%20Street%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sbd!4v1690231245781!5m2!1sen!2sbd"
                className="w-full h-64 border-0 rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
