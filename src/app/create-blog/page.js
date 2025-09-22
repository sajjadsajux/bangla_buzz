"use client";
import { useState } from "react";

export default function CreateBlog() {
  const [form, setForm] = useState({ title: "", category: "", content: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Blog created successfully!");
        setForm({ title: "", category: "", content: "" });
      } else {
        setMessage("❌ " + (data.error || "Failed to create blog"));
      }
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };

  return (
    <section className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border p-2 rounded-md" required />
        <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2 rounded-md" required />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} className="border p-2 rounded-md" rows={6} required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Create Blog
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}
