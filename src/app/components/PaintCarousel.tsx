"use client";

import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const paints = [
  {
    id: 1,
    name: "Eco Glossy Green",
    type: "Gloss",
    size: "5L",
    price: "$29.99",
    rating: 4,
    image: "/p8.jpeg",
  },
  {
    id: 2,
    name: "Matte Pure White",
    type: "Matte",
    size: "10L",
    price: "$49.99",
    rating: 5,
    image: "/p14.jpg",
  },
  {
    id: 3,
    name: "Sunset Orange",
    type: "Satin",
    size: "1L",
    price: "$12.99",
    rating: 3,
    image: "/p15.jpg",
  },
  {
    id: 4,
    name: "Ocean Blue",
    type: "Gloss",
    size: "5L",
    price: "$32.99",
    rating: 4,
    image: "/p16.jpg",
  },
  {
    id: 5,
    name: "Royal Purple",
    type: "Satin",
    size: "2L",
    price: "$18.99",
    rating: 5,
    image: "/p20.jpg",
  },
  {
    id: 6,
    name: "Warm Yellow",
    type: "Matte",
    size: "4L",
    price: "$22.50",
    rating: 4,
    image: "/p19.jpg",
  },
];

export default function PaintCarouselGlide() {
  useEffect(() => {
    const slider = new Glide(".glide-paints", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      gap: 24,
      breakpoints: {
        1024: { perView: 3 },
        768: { perView: 2 },
        480: { perView: 1 },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#004109] font-bold text-center mb-10">
          Featured Paints
        </h2>

        <div className="glide-paints">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="glide__slides">
              {paints.map((paint) => (
                <li
                  key={paint.id}
                  className="glide__slide bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <Image
                    src={paint.image}
                    alt={paint.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{paint.name}</h3>
                    <p className="text-sm text-gray-600">
                      {paint.type} • {paint.size}
                    </p>
                    <p className="text-lg font-bold text-green-700 mt-2">
                      {paint.price}
                    </p>
                    <div className="flex items-center mt-2 mb-4">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                          key={index}
                          className={`h-4 w-4 ${
                            index < paint.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <a
                      href="/paint-catalogue"
                      className="inline-block w-full text-center py-2 px-4 text-sm font-medium rounded-lg bg-[#028010] text-white hover:bg-green-800"
                    >
                      Book Now
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional navigation dots */}
          <div
            className="mt-6 flex justify-center gap-2"
            data-glide-el="controls[nav]"
          >
            {paints.map((_, i) => (
              <button
                key={i}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#004109] transition"
                data-glide-dir={`=${i}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/paint-catalogue"
            className="inline-block text-white rounded-lg font-semibold bg-[#028010] hover:bg-green-800 py-2 px-6"
          >
            View Full Paint Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
