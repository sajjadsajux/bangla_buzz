"use client";
import { useEffect, useState } from "react";
import { BookOpen, TrendingUp } from "lucide-react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 6;

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs?page=${page}&limit=${limit}`);
        const data = await res.json();
        setBlogs(data.blogs);
        setTotal(data.total);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <BookOpen className="w-6 h-6 text-purple-600" />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stories</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Discover fresh perspectives and engaging content from our community of writers</p>

          {/* Stats */}
          {total > 0 && (
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/50">
              <TrendingUp className="w-4 h-4 text-purple-500" />
              <span className="font-semibold text-purple-700">{total}</span>
              <span className="text-gray-600">Articles</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">
                Page {page} of {totalPages}
              </span>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 mt-4 font-medium">Loading stories...</p>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog, index) => (
              <div key={blog._id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard id={blog._id} title={blog.title} category={blog.category} excerpt={blog.content.substring(0, 120) + "..."} image={blog.image} authorName={blog.author?.name || "Unknown"} postedDate={blog.createdAt} lastEditedDate={blog.updatedAt} />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No Stories Found</h3>
            <p className="text-gray-500">We couldn't find any articles at the moment.</p>
          </div>
        )}

        {/* Pagination */}
        {!loading && blogs.length > 0 && totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default BlogList;
