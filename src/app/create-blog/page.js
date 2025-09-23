"use client";
import { useState } from "react";

export default function CreateBlog() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
    authorName: "",
    tags: "",
    status: "Published", // default
  });
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
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />

        <div>
          <p className="mb-1 font-semibold">Category:</p>
          {["Food", "Travel", "Culture", "Lifestyle", "Technology", "Education", "Sports", "Entertainment", "Health & Fitness", "Business", "Fashion", "News"].map((cat) => (
            <label key={cat} className="mr-4">
              <input type="radio" name="category" value={cat} checked={form.category === cat} onChange={handleChange} required /> {cat}
            </label>
          ))}
        </div>

        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <input type="text" name="authorName" placeholder="Author Name" value={form.authorName} onChange={handleChange} required />

        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} rows={6} required />

        <input type="text" name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Create Blog
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}
