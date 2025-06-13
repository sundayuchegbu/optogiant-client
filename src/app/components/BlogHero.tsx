"use client";

import Image from "next/image";
import Link from "next/link";

const BlogHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#e6f4ea] to-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#028010] leading-tight">
            Color Your World
            <br />
            <span className="text-gray-800">With Premium Paints</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover long-lasting, eco-friendly, and vibrant paints perfect for
            your home or workspace.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/paint-catalogue"
              className="bg-[#028010] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-800 transition"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="border border-[#028010] text-[#028010] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-50 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/p18.jpg" // replace with your image path
            alt="Colorful paint buckets"
            width={500}
            height={900}
            className="mx-auto"
            priority
          />
        </div>
      </div>

      {/* Decorative Blob or Background Overlay (optional) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <Image
          src="/p2.jpeg" // optional texture overlay
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default BlogHero;
