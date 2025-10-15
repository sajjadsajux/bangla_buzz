"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { BookOpen, Edit, Trash2, Calendar, Tag, ArrowLeft, Plus, AlertCircle, FileText } from "lucide-react";

export default function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

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

  const handleDelete = async (blogId, blogTitle) => {
    // Custom confirmation with toast
    const confirmed = window.confirm(`Are you sure you want to delete "${blogTitle}"? This action cannot be undone.`);
    if (!confirmed) return;

    setDeletingId(blogId);

    try {
      const res = await fetch(`/api/blogs/${blogId}`, { method: "DELETE" });
      const data = await res.json();

      if (res.ok) {
        toast.success("Blog deleted successfully!", {
          duration: 3000,
          position: "top-right",
          style: {
            background: "#D1FAE5",
            color: "#065F46",
            border: "1px solid #6EE7B7",
            padding: "16px",
            borderRadius: "12px",
          },
        });
        setBlogs(blogs.filter((b) => b._id !== blogId));
      } else {
        toast.error(data.error || "Failed to delete blog", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#FEE2E2",
            color: "#991B1B",
            border: "1px solid #FCA5A5",
            padding: "16px",
            borderRadius: "12px",
          },
        });
      }
    } catch (err) {
      toast.error("An error occurred while deleting", {
        duration: 4000,
        position: "top-right",
      });
    } finally {
      setDeletingId(null);
    }
  };

  // Category color mapping
  const getCategoryColor = (category) => {
    const colors = {
      Food: "bg-orange-100 text-orange-700 border-orange-200",
      Travel: "bg-blue-100 text-blue-700 border-blue-200",
      Culture: "bg-purple-100 text-purple-700 border-purple-200",
      Lifestyle: "bg-green-100 text-green-700 border-green-200",
      Technology: "bg-gray-100 text-gray-700 border-gray-200",
      Education: "bg-indigo-100 text-indigo-700 border-indigo-200",
      Sports: "bg-red-100 text-red-700 border-red-200",
      Entertainment: "bg-pink-100 text-pink-700 border-pink-200",
      "Health & Fitness": "bg-lime-100 text-lime-700 border-lime-200",
      Business: "bg-amber-100 text-amber-700 border-amber-200",
      Fashion: "bg-rose-100 text-rose-700 border-rose-200",
      News: "bg-slate-100 text-slate-700 border-slate-200",
    };
    return colors[category] || "bg-blue-100 text-blue-700 border-blue-200";
  };

  return (
    <>
      <Toaster />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-12">
            <Link href="/dashboard" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 transition-colors duration-200 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Dashboard</span>
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">My Blogs</h1>
                  <p className="text-gray-600 text-sm sm:text-base">Manage and edit your published articles</p>
                </div>
              </div>

              <Link
                href="/create-blog"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Plus className="w-5 h-5" />
                <span>Create New Blog</span>
              </Link>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
                    <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Error Loading Blogs</h3>
              <p className="text-red-700 mb-6">{error}</p>
              <button onClick={() => window.location.reload()} className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors duration-200">
                Try Again
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && blogs.length === 0 && (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No blogs yet</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">You haven't created any blogs yet. Start writing your first article and share your story with the world!</p>
              <Link href="/create-blog" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Plus className="w-5 h-5" />
                <span>Write Your First Blog</span>
              </Link>
            </div>
          )}

          {/* Blogs Grid */}
          {!loading && !error && blogs.length > 0 && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  <span className="font-bold text-purple-600">{blogs.length}</span>
                  {blogs.length === 1 ? " article" : " articles"} published
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <article key={blog._id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${getCategoryColor(blog.category)}`}>
                          <Tag className="w-3 h-3 mr-1" />
                          {blog.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">{blog.title}</h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{blog.content.slice(0, 150)}...</p>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-gray-500 text-xs mb-6">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Link
                          href={`/edit-blog/${blog._id}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-4 py-2.5 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </Link>
                        <button
                          onClick={() => handleDelete(blog._id, blog.title)}
                          disabled={deletingId === blog._id}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-4 py-2.5 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {deletingId === blog._id ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Deleting...</span>
                            </>
                          ) : (
                            <>
                              <Trash2 className="w-4 h-4" />
                              <span>Delete</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
