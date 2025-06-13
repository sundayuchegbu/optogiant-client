"use client";
import React from "react";

const colors = [
  { name: "Sunset Orange", hex: "#FF6B35" },
  { name: "Ocean Blue", hex: "#0077B6" },
  { name: "Forest Green", hex: "#2A9D8F" },
  { name: "Soft Lavender", hex: "#B497BD" },
  { name: "Warm Beige", hex: "#F4A261" },
  { name: "Charcoal Black", hex: "#264653" },
  { name: "Peach Blush", hex: "#FEC5BB" },
  { name: "Mint Green", hex: "#C3F584" },
];

const ColorCollections = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004109] mb-6">
          Explore Our Color Collections
        </h2>
        <p className="text-[#004109] max-w-2xl mx-auto mb-12">
          Discover a palette curated for every mood, style, and space. Choose
          from vibrant tones to subtle hues, all crafted for lasting beauty.
        </p>

        {/* Carousel Wrapper */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 md:grid md:grid-cols-4 md:gap-6">
            {colors.map((color, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 md:w-auto flex flex-col items-center text-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <div
                  className="w-20 h-20 rounded-full mb-4 border-2"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <p className="text-sm font-medium text-gray-700">
                  {color.name}
                </p>
                <span className="text-xs text-gray-400">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorCollections;
