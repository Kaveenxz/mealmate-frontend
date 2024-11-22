'use client';
import React, { useState } from 'react';
import Header2 from '../components/Header2';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState<any>({});

  const validateForm = () => {
    const errors: any = {};

    if (!name.trim()) errors.name = 'Name is required.';
    if (!email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }
    if (!message.trim()) errors.message = 'Message is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Thank you for your message! We will get back to you shortly.');
      setName('');
      setEmail('');
      setMessage('');
      setFormErrors({});
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <div>
        <Header2 />
      </div>
      <section className="bg-gray-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-300">
          Have questions or need assistance? We’re here to help!
        </p>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-gray-600">
              Feel free to reach out to us for any queries or support. Our team will respond promptly!
            </p>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600">support@mealmate.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-600">123 Culinary Lane, Food City, FC 12345</p>
            </div>
          </div>

          <div className="bg-gray-50 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  className={`w-full border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 h-28`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded w-full hover:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
