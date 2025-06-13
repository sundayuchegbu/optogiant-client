import Image from "next/image";
import React from "react";

const HomeAbout = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12 sm:gap-24">
        {/* Text Content */}
        <div className="md:w-1/2 h-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 sm:mt-[50px] lg:-mt-[200px] mb-8">
            About Us
          </h2>
          <p className="text-[#004109] text-lg leading-relaxed pr-12 ">
            We are committed to providing premium eco-friendly paints that are
            better for your home and the environment. With years of experience
            and a passion for color, we deliver products that combine beauty,
            durability, and sustainability.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/p20.jpg"
            alt="Paint roller on wall"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
