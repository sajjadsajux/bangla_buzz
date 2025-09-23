"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 6;

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch(`/api/blogs?page=${page}&limit=${limit}`);
      const data = await res.json();
      setBlogs(data.blogs);
      setTotal(data.total);
    }
    fetchBlogs();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} id={blog._id} title={blog.title} category={blog.category} excerpt={blog.content.substring(0, 100) + "..."} image={blog.image} authorName={blog.author?.name || "Unknown"} postedDate={blog.postedDate} lastEditedDate={blog.lastEditedDate} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
};

export default BlogList;
