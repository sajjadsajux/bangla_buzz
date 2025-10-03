import { notFound } from "next/navigation";

export default async function BlogDetails({ params }) {
  const { id } = params;

  // Fetch the blog from your API
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs/${id}`, {
    cache: "no-store", // ensures fresh data
  });

  if (!res.ok) {
    return notFound();
  }

  const blog = await res.json();

  if (!blog) {
    return <h1 className="text-center mt-10">Blog not found</h1>;
  }

  return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      {/* Blog Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 leading-tight">{blog.title}</h1>

      {/* Category */}
      <span className="inline-block px-4 py-2 text-sm bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-bold uppercase tracking-wide rounded-full border border-blue-200 shadow-sm">{blog.category}</span>

      {/* Dates */}
      <p className="mt-4 text-gray-600 text-sm font-medium">
        Posted: {new Date(blog.createdAt).toLocaleDateString()}
        {blog.updatedAt && <> • Last Edited: {new Date(blog.updatedAt).toLocaleDateString()}</>}
      </p>

      {/* Author */}
      {blog.authorName && <p className="mt-2 text-gray-700 text-sm font-semibold">By {blog.authorName}</p>}

      {/* Image */}
      {blog.image && (
        <div className="mt-8 mb-8 rounded-2xl overflow-hidden shadow-xl">
          <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      )}

      {/* Tags */}
      {blog.tags?.length > 0 && (
        <div className="mt-8 mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
          <h4 className="text-base font-bold text-gray-800 mb-3">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, i) => (
              <span key={i} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="mt-8 p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
        <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line" style={{ lineHeight: "1.8" }}>
          {blog.content}
        </p>
      </div>
    </article>
  );
}
