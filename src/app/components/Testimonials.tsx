import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Sarah K.",
    quote:
      "Absolutely love the color! It’s vibrant, eco-friendly, and easy to apply.",
    image: "/a1.jpg",
  },
  {
    name: "James L.",
    quote:
      "My living room looks amazing. The paint quality is top-notch and no odor!",
    image: "/a2.jpg",
  },
  {
    name: "Nina P.",
    quote:
      "Customer support helped me find the perfect shade. Highly recommend!",
    image: "/a3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004109] mb-12">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="font-semibold text-gray-800">{t.name}</h3>
              </div>
              <p className="text-gray-600 text-sm italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
