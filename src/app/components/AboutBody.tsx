"use client";

export default function AboutBody() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#004109]">About Us</h1>
          <p className="text-lg text-[#004109]">
            At EcoPaints, we believe that walls deserve more than just
            color—they deserve character, care, and sustainability.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section with Images */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Vision */}
          <div>
            <img
              src="/p7.jpeg" // replace with your actual image path
              alt="Vision"
              className="rounded-lg shadow-md mb-6 md:mb-0"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#028010] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and innovative eco-friendly paint brand,
              transforming spaces with vibrant colors and sustainable solutions
              that protect both people and the planet.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-20">
          {/* Mission */}
          <div className="md:order-2">
            <img
              src="/p12.jpg" // replace with your actual image path
              alt="Mission"
              className="rounded-lg shadow-md mb-6 md:mb-0"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl font-semibold text-[#028010] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide high-quality, affordable, and
              environmentally conscious paint products, while delivering
              exceptional service and fostering creativity in every space we
              touch.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section with Image */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="p26.jpg"
            alt="Our Values"
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#028010]">
              Our Core Values
            </h2>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>
                <strong>Integrity</strong> – We act with honesty and
                accountability.
              </li>
              <li>
                <strong>Sustainability</strong> – We protect the environment in
                every choice we make.
              </li>
              <li>
                <strong>Innovation</strong> – We embrace new ideas to serve
                better solutions.
              </li>
              <li>
                <strong>Quality</strong> – We never compromise on excellence.
              </li>
              <li>
                <strong>Customer Focus</strong> – Our clients are at the heart
                of everything we do.
              </li>
              <li>
                <strong>Community</strong> – We invest in giving back to our
                local neighborhoods.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Corporate Profile Section with Image on the Right */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-[#028010]">
              Corporate Profile
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Optogiant Ltd is a registered Nigerian company founded in 2020.
              Our headquarters is located in Lagos, and we distribute our
              eco-conscious paints nationwide. Our factory meets international
              environmental safety standards, and our team consists of seasoned
              chemists, color consultants, and sustainability advocates.
            </p>
          </div>

          {/* Image Second */}
          <div className="order-1 md:order-2">
            <img
              src="/p17.jpg"
              alt="Corporate Profile"
              className="rounded-lg shadow-lg h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#004109]">
            Why Choose Optogiant?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Our products are made with low-VOC and sustainable ingredients
                to protect your health and the environment.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We ensure long-lasting coverage, vibrant finish, and durability
                in every drop of paint.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                Our team is committed to supporting you from color selection to
                final application with expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mini Contact Section */}
      <section className="py-16 px-6 bg-[#028010] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
          <p className="mb-6">
            Have questions or need help choosing the right paint? We're one call
            away.
          </p>
          <a
            href="tel:+2349 060556154"
            className="inline-block bg-white text-[#028010] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            📞 Call Us Now
          </a>
        </div>
      </section>
    </main>
  );
}
