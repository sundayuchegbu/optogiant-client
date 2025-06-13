import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      {/* Image Column */}
      <div className="w-full h-64 sm:w-1/2 sm:h-auto">
        <img
          className="h-[600px] w-full object-cover"
          src="/p19.jpg"
          alt="Hero"
        />
      </div>

      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-3xl">
            Transform Your Space with Premium, Eco-Friendly Paints
          </h2>
          <p className="mt-4 text-lg text-[#004109]">
            Transform your space with precision, passion, and a perfect coat of
            paint. Whether you're refreshing your home, updating your office, or
            launching a bold new look, our expert paints delivers flawless
            results that last.
          </p>

          {/* Button Container */}
          <div className="mt-8">
            <a
              href="#"
              className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-[#028010] border-solid border-2 border-[#028010] py-2 px-10 hover:bg-green-800 hover:shadow-md md:w-48 rounded-lg"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
