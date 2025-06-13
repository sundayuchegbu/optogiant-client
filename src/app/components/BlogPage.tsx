"use client";

import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import BlogHero from "./BlogHero";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right Paint Finish for Your Space",
    excerpt:
      "Learn the differences between matte, satin, and glossy finishes to make your rooms shine.",
    image: "/p4.jpeg",
    date: "2025-06-01",
  },
  {
    id: 2,
    title: "Eco-Friendly Paints: A Sustainable Choice",
    excerpt:
      "Discover how our paints reduce environmental impact without compromising quality.",
    image: "/p6.jpeg",
    date: "2025-05-22",
  },
  {
    id: 3,
    title: "Color Psychology in Interior Design",
    excerpt:
      "Find out how color affects mood and what colors suit each room best.",
    image: "/p18.jpg",
    date: "2025-05-10",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <BlogHero />

      {/* Blog List */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#004109]">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#028010] mb-2">
                  {post.title}
                </h3>
                <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                  <FaCalendarAlt className="text-[#028010]" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a
                  href={`/blog-details/${post.id}`}
                  className="text-[#028010] font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="  bg-[#004109] py-16 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Up to Date</h3>
        <p className="mb-6">
          Subscribe to our newsletter for tips, trends, and promotions.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg w-full sm:w-2/3 text-white border-2 border-white"
          />
          <button
            type="submit"
            className="bg-white text-[#004109] px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
