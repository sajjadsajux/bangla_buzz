"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Pen, Image, User, Tag, FileText, Save } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
    authorName: "",
    tags: "",
    status: "Published",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Blog created successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#D1FAE5",
            color: "#065F46",
            border: "1px solid #6EE7B7",
            padding: "16px",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "600",
          },
          iconTheme: {
            primary: "#10B981",
            secondary: "#D1FAE5",
          },
        });
        setForm({ title: "", category: "", content: "", image: "", authorName: "", tags: "", status: "Published" });
        setTimeout(() => {
          router.push("/dashboard/my-blogs");
        }, 1500);
      } else {
        toast.error(data.error || "Failed to create blog", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#FEE2E2",
            color: "#991B1B",
            border: "1px solid #FCA5A5",
            padding: "16px",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "600",
          },
          iconTheme: {
            primary: "#DC2626",
            secondary: "#FEE2E2",
          },
        });
      }
    } catch (err) {
      toast.error("Network error: " + err.message, {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#FEE2E2",
          color: "#991B1B",
          border: "1px solid #FCA5A5",
          padding: "16px",
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: "600",
        },
        iconTheme: {
          primary: "#DC2626",
          secondary: "#FEE2E2",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      <Toaster />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-3xl">
          {/* Blog Creation Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-purple-100">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Pen className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Create Blog Post</h1>
              <p className="text-gray-600 text-sm sm:text-base">Share your story with BanglaBuzz</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title Field */}
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Blog Title
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Enter blog title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Category Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["Food", "Travel", "Culture", "Lifestyle", "Technology", "Education", "Sports", "Entertainment", "Health & Fitness", "Business", "Fashion", "News"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="radio" name="category" value={cat} checked={form.category === cat} onChange={handleChange} className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300" required />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Image URL Field */}
              <div>
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                  Image URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Image className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="image"
                    type="text"
                    name="image"
                    placeholder="Enter image URL"
                    value={form.image}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Author Name Field */}
              <div>
                <label htmlFor="authorName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Author Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="authorName"
                    type="text"
                    name="authorName"
                    placeholder="Enter author name"
                    value={form.authorName}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Content Field */}
              <div>
                <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                  Content
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="content"
                    name="content"
                    placeholder="Write your blog content"
                    value={form.content}
                    onChange={handleChange}
                    rows={6}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Tags Field */}
              <div>
                <label htmlFor="tags" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tags (comma separated)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="tags"
                    type="text"
                    name="tags"
                    placeholder="e.g., travel, adventure, tips"
                    value={form.tags}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-200 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Creating...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    <span>Create Blog</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
