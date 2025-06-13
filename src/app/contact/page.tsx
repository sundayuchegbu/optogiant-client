"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import ContactHero from "../components/ContactHero";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Replace the existing handleSubmit function with this
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xvgrkkbo", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (response.ok) {
        setForm({ name: "", email: "", message: "" });
        setShowThankYou(true);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero */}
      <ContactHero />

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#004109]">
            Contact Information
          </h2>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-[#028010] mt-1" />
            <div>
              <p className="font-medium">Phone</p>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-[#028010] mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <p>support@paintcompany.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#028010] mt-1" />
            <div>
              <p className="font-medium">Address</p>
              <p>123 Paint Lane, Color City, CO 80501</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaClock className="text-[#028010] mt-1" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p>Mon - Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          <h2 className="text-xl font-semibold text-[#004109]">
            Send Us a Message
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#028010]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#028010]"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#028010]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#028010] hover:bg-green-800 text-white py-3 px-6 cursor-pointer rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Thank You Modal */}
      {showThankYou && (
        <div
          className="fixed inset-0 bg-[#004109] bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="thankYouTitle"
        >
          <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-lg">
            <h2
              id="thankYouTitle"
              className="text-2xl font-bold mb-4 text-[#004109]"
            >
              Thank You!
            </h2>
            <p className="mb-6">Your message has been sent successfully.</p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-[#028010] hover:bg-green-800 text-white py-2 px-6 rounded-lg font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Map */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Paint%20Shop&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-96 border-none"
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
}
