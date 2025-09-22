"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlog() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ title: "", category: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blogs/user`);
        const data = await res.json();
        const blog = data.find((b) => b._id === id);
        if (blog) setForm({ title: blog.title, category: blog.category, content: blog.content });
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
    fetchBlog();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Blog updated successfully!");
        router.push("/dashboard");
      } else {
        setMessage("❌ " + (data.error || "Failed to update blog"));
      }
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Blog Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border p-2 rounded-md" required />
        <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2 rounded-md" required />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} className="border p-2 rounded-md" rows={6} required />
        <button type="submit" className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
          Update Blog
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}
