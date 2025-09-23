"use client";
import Link from "next/link";

const categories = [
  { name: "Food", slug: "food" },
  { name: "Travel", slug: "travel" },
  { name: "Culture", slug: "culture" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Technology", slug: "technology" },
  { name: "Education", slug: "education" },
  { name: "Sports", slug: "sports" },
  { name: "Entertainment", slug: "entertainment" },
  { name: "Health & Fitness", slug: "health-fitness" },
  { name: "Business", slug: "business" },
  { name: "Fashion", slug: "fashion" },
  { name: "News", slug: "news" },
];

const TrendingTopics = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Explore Trending Topics</h2>
        <p className="text-gray-500 mb-8">Discover the hottest categories people are talking about on BanglaBuzz.</p>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition">
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
