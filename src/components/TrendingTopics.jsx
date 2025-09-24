import Link from "next/link";

const categories = ["Food", "Travel", "Culture", "Lifestyle", "Technology", "Education", "Sports", "Entertainment", "Health & Fitness", "Business", "Fashion", "News"];

export default function TrendingTopics() {
  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Explore Trending Topics</h2>
      <div className="flex flex-wrap gap-3 ">
        {categories.map((cat) => (
          <Link key={cat} href={`/category/${encodeURIComponent(cat)}`} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 ">
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
}
