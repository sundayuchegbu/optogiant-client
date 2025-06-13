"use client";

import Image from "next/image";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e0f2f1] to-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-2xl z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#028010] leading-tight">
            Let’s Talk Color 🎨
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Have a question, a custom project, or just want to chat? Our team is
            here to bring your ideas to life with the perfect shades.
          </p>

          <div className="mt-8">
            <Link
              href="/contact-form"
              className="inline-block px-6 py-3 bg-[#028010] text-white rounded-lg text-sm font-semibold hover:bg-green-800 transition"
            >
              Send a Message
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 relative z-10">
          <Image
            src="/p9.avif" // replace with your image
            alt="Contact Paint Illustration"
            width={500}
            height={500}
            className="mx-auto"
            priority
          />
        </div>
      </div>

      {/* Paint blob or decorative splash */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Image
          src="/p10.avif" // optional splash texture background
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ContactHero;
