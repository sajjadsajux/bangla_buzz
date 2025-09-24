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
    <article className="max-w-3xl mx-auto py-10">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>

      {/* Category */}
      <span className="text-sm text-blue-600 uppercase">{blog.category}</span>

      {/* Dates */}
      <p className="mt-2 text-gray-500 text-sm">
        Posted: {new Date(blog.createdAt).toLocaleDateString()}
        {blog.updatedAt && <> • Last Edited: {new Date(blog.updatedAt).toLocaleDateString()}</>}
      </p>

      {/* Author */}
      {blog.authorName && <p className="mt-1 text-gray-600 text-sm">By {blog.authorName}</p>}

      {/* Image */}
      {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mt-4" />}

      {/* Tags */}
      {blog.tags?.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold">Tags:</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {blog.tags.map((tag, i) => (
              <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <p className="mt-6 text-gray-700 leading-7 whitespace-pre-line">{blog.content}</p>
    </article>
  );
}
