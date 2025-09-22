"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Registration successful! You can now login.");
        setForm({ name: "", email: "", password: "" });
      } else {
        setMessage("❌ " + (data.error || "Something went wrong"));
      }
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <section className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 rounded-md" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 rounded-md" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 rounded-md" required />
        <button type="submit" disabled={loading} className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50">
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {message && <p className="text-sm mt-4 text-center text-gray-700">{message}</p>}

      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-green-600 hover:underline">
          Login
        </a>
      </p>
    </section>
  );
}
