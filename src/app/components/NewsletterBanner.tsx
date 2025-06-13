"use client";

import React from "react";

const NewsletterBanner = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <section className="bg-[#028010] text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get 10% Off Your First Paint Order
        </h2>
        <p className="text-md md:text-lg mb-8">
          Join our newsletter for color inspiration, exclusive deals, and expert
          painting tips.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 rounded-lg bg-white w-full sm:w-80 text-[#028010] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-[#028010] px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBanner;
