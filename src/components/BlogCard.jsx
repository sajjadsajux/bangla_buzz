import Link from "next/link";

const BlogCard = ({ id, title, category, excerpt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="p-4">
        <span className="text-xs text-blue-500 font-semibold uppercase">{category}</span>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{excerpt}</p>
        <Link href={`/blog/${id}`}>
          <span className="mt-3 inline-block text-blue-600 hover:underline">Read More →</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
