import { CheckCircle, Leaf, Truck, Paintbrush } from "lucide-react";
import React from "react";

const features = [
  {
    title: "Eco-Friendly",
    description:
      "Our paints are low-VOC, non-toxic, and safe for your family and the environment.",
    icon: <Leaf className="text-green-700 w-8 h-8" />,
  },
  {
    title: "Premium Quality",
    description:
      "Formulated for smooth application and long-lasting durability.",
    icon: <Paintbrush className="text-green-700 w-8 h-8" />,
  },
  {
    title: "Fast Delivery",
    description: "We ship quickly and reliably, right to your doorstep.",
    icon: <Truck className="text-green-700 w-8 h-8" />,
  },
  {
    title: "Expert Support",
    description:
      "Color consultants and painting experts ready to help you pick the perfect shade.",
    icon: <CheckCircle className="text-green-700 w-8 h-8" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004109] mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
