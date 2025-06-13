"use client";

import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FaStar } from "react-icons/fa";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";

const paints = [
  {
    id: 1,
    name: "Eco Glossy Green",
    color: "Green",
    price: "$29.99",
    rating: 4,
    image: "/p1.jpeg",
  },
  {
    id: 2,
    name: "Matte Pure White",
    color: "White",
    price: "$49.99",
    rating: 5,
    image: "/p2.jpeg",
  },
  {
    id: 3,
    name: "Sunset Orange",
    color: "Orange",
    price: "$12.99",
    rating: 3,
    image: "/p3.jpeg",
  },
  {
    id: 4,
    name: "Ocean Blue Finish",
    color: "Blue",
    price: "$39.99",
    rating: 5,
    image: "/p6.jpeg",
  },
  {
    id: 5,
    name: "Royal Purple Luxe",
    color: "Purple",
    price: "$45.00",
    rating: 4,
    image: "/p5.jpeg",
  },
];

export default function ProductsPage() {
  useEffect(() => {
    const slider = new Glide(".glide-products-banner", {
      type: "slider",
      perView: 1,
      autoplay: 4000,
      animationDuration: 700,
      focusAt: "center",
    });

    slider.mount();

    // Cleanup function: should return void
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <main>
      {/* --- Banner Slider --- */}
      <section className="py-10 glide-products-banner">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="flex w-full overflow-hidden">
            {paints.slice(0, 4).map((paint) => (
              <li key={paint.id} className="w-full px-6">
                <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-100 rounded-lg p-8">
                  <div className="md:w-1/2">
                    <img
                      src={paint.image}
                      alt={paint.name}
                      className="w-full h-[500px] object-cover rounded-lg shadow"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-2">{paint.name}</h2>
                    <p className="text-lg text-gray-600 mb-1">
                      Color: {paint.color}
                    </p>
                    <p className="text-xl text-green-700 font-semibold mb-2">
                      {paint.price}
                    </p>
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-5 w-5 ${
                            i < paint.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <button className="bg-[#028010] text-white px-5 py-2 rounded hover:bg-green-800">
                      Buy Now
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Indicators --- */}
        <div
          className="mt-4 flex items-center justify-center gap-3"
          data-glide-el="controls[nav]"
        >
          {paints.slice(0, 4).map((_, index) => (
            <button
              key={index}
              className="group"
              data-glide-dir={`=${index}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="block w-3 h-3 rounded-full bg-gray-400 group-focus:bg-[#028010]" />
            </button>
          ))}
        </div>
      </section>

      {/* --- Product Grid --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Paint Products
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paints.map((paint) => (
              <div
                key={paint.id}
                className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={paint.image}
                  alt={paint.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{paint.name}</h3>
                  <p className="text-sm text-gray-500">Color: {paint.color}</p>
                  <p className="text-lg text-green-700 font-bold mt-1">
                    {paint.price}
                  </p>

                  <div className="flex items-center mt-2 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 ${
                          i < paint.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button className="w-full py-2 text-sm font-medium text-white bg-[#028010] rounded-lg hover:bg-green-800">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
}
