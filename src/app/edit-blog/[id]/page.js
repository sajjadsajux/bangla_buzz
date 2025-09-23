"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlog() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
    tags: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const blog = await res.json();
        if (blog) {
          setForm({
            title: blog.title,
            category: blog.category,
            content: blog.content,
            image: blog.image || "",
            tags: blog.tags?.join(", ") || "",
          });
        }
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
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(",").map((t) => t.trim()),
          lastEditedDate: new Date(),
        }),
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
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />

        <div>
          <p className="mb-1 font-semibold">Category:</p>
          {["Food", "Travel", "Culture", "Lifestyle", "Technology", "Education", "Sports", "Entertainment", "Health & Fitness", "Business", "Fashion", "News"].map((cat) => (
            <label key={cat} className="mr-4">
              <input type="radio" name="category" value={cat} checked={form.category === cat} onChange={handleChange} required /> {cat}
            </label>
          ))}
        </div>

        <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
        <input type="text" name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma separated)" />

        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" rows={6} required />

        <button type="submit" className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
          Update Blog
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}
