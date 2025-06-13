"use client";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004109] mb-6">
            Premium Paints for Every Wall
          </h1>
          <p className="text-[#004109] text-lg mb-8">
            Explore our wide range of eco-friendly, durable, and vibrant paints
            perfect for your interior and exterior needs.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="/paint-catalogue"
              className="bg-[#028010] hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Browse Paints
            </a>
            <a
              href="#about"
              className="bg-white border border-[#028010] hover:bg-gray-100 text-[#028010] px-6 py-3 rounded-lg font-medium transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/p13.jpg" // Replace with your image
            alt="Paint illustration"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-[600px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
