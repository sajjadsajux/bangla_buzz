"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs/user");
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to fetch blogs");
          setBlogs([]);
        } else {
          setBlogs(data);
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <section className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">My Blogs</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && blogs.length === 0 && <p>You haven’t created any blogs yet.</p>}

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
            <p className="text-gray-700 mb-2">{blog.content.slice(0, 100)}...</p>
            <p className="text-xs text-gray-400">Created at: {new Date(blog.createdAt).toLocaleString()}</p>

            <div className="mt-2 flex gap-2">
              <Link href={`/edit-blog/${blog._id}`} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">
                Edit
              </Link>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                onClick={async () => {
                  if (!confirm("Are you sure you want to delete this blog?")) return;

                  const res = await fetch(`/api/blogs/${blog._id}`, { method: "DELETE" });
                  const data = await res.json();

                  if (res.ok) {
                    alert("Blog deleted!");
                    setBlogs(blogs.filter((b) => b._id !== blog._id));
                  } else {
                    alert(data.error || "Failed to delete blog");
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
