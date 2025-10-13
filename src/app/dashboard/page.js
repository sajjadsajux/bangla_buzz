"use client";
import Link from "next/link";
import { BookOpen, PlusCircle, Globe } from "lucide-react"; // ✅ nice icons

export default function Dashboard() {
  return (
    <section className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">📊 My Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* My Blogs */}
        <Link href="/dashboard/my-blogs" className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg hover:-translate-y-1 transition-all">
          <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold">My Blogs</h3>
          <p className="text-sm text-gray-500 text-center">See and manage your own blogs</p>
        </Link>

        {/* Create Blog */}
        <Link href="/create-blog" className="flex flex-col items-center justify-center bg-blue-600 text-white shadow-md rounded-2xl p-6 hover:bg-blue-700 hover:-translate-y-1 transition-all">
          <PlusCircle className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-semibold">Create Blog</h3>
          <p className="text-sm opacity-80 text-center">Write a new blog post</p>
        </Link>

        {/* All Blogs */}
        <Link href="/dashboard/all-blogs" className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg hover:-translate-y-1 transition-all">
          <Globe className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold">All Blogs</h3>
          <p className="text-sm text-gray-500 text-center">Browse blogs from all users</p>
        </Link>
      </div>
    </section>
  );
}
