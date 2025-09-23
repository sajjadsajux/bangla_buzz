import Link from "next/link";

const BlogCard = ({ id, title, category, excerpt, image, authorName, postedDate, lastEditedDate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <span className="text-xs text-blue-500 font-semibold uppercase">{category}</span>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{excerpt}</p>

        <div className="mt-2 text-gray-500 text-xs">
          <p>By: {authorName}</p>
          <p>Posted: {new Date(postedDate).toLocaleDateString()}</p>
          {lastEditedDate && <p>Last Edited: {new Date(lastEditedDate).toLocaleDateString()}</p>}
        </div>

        <Link href={`/blog/${id}`}>
          <span className="mt-3 inline-block text-blue-600 hover:underline">Read More →</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
