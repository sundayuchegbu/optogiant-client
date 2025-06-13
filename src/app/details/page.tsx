"use client";

import { useParams } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa";
import WhatsAppButton from "../components/WhatsAppButton";

// Sample blog posts
const blogPosts = [
  {
    id: "1",
    title: "Choosing the Right Paint Finish for Your Space",
    content: `When selecting paint finishes, it’s essential to understand how gloss, satin, and matte finishes behave on different surfaces. Glossy finishes reflect more light and are ideal for kitchens and bathrooms, while matte works well in living areas...`,
    image: "/blog1.jpg",
    date: "2025-06-01",
    tags: ["Finishes", "Interior", "Tips"],
  },
  {
    id: "2",
    title: "Eco-Friendly Paints: A Sustainable Choice",
    content: `Eco-friendly paints are made with low-VOC or no-VOC formulas. They minimize environmental impact while maintaining great coverage and durability. Our paint line complies with strict green standards...`,
    image: "/blog2.jpg",
    date: "2025-05-22",
    tags: ["Eco", "Sustainability", "Innovation"],
  },
  {
    id: "3",
    title: "Color Psychology in Interior Design",
    content: `Colors influence our moods. Blue can be calming, red energizing, and green balancing. Learn how to use this psychology to your advantage when decorating your home...`,
    image: "/blog3.jpg",
    date: "2025-05-10",
    tags: ["Color", "Mood", "Interior"],
  },
];

export default function BlogDetailsPage() {
  const params = useParams();
  const postId = params?.id?.toString();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl text-gray-600">Post not found.</h1>
      </div>
    );
  }

  // Filter related articles (excluding current post)
  const related = blogPosts.filter((p) => p.id !== postId).slice(0, 2);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-[#004109] py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm flex justify-center items-center gap-2">
          <FaCalendarAlt />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <article className="text-gray-700 leading-relaxed space-y-6 text-lg">
          {post.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </div>

      {/* Related Posts */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#004109] mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((rel) => (
              <div
                key={rel.id}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#028010] mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {rel.content.slice(0, 100)}...
                  </p>
                  <a
                    href={`/blog-details/${rel.id}`}
                    className="text-[#028010] font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
}
