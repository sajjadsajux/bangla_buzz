"use client";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard"; // ✅ adjust path if different

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Failed to fetch blogs");
        } else {
          setBlogs(data.blogs || []);
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <section className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">All Blogs</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} id={blog._id} title={blog.title} category={blog.category} excerpt={blog.content.substring(0, 100) + "..."} image={blog.image} authorName={blog.author?.name || "Unknown"} postedDate={blog.createdAt} lastEditedDate={blog.updatedAt} />
        ))}
      </div>
    </section>
  );
}
