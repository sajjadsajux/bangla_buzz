"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false, // prevent NextAuth auto-redirect
      email,
      password,
    });

    setLoading(false);

    if (res.error) {
      alert("Login failed: " + res.error);
    } else {
      alert("Login successful!");
      window.location.href = "/"; // redirect to homepage
    }
  };

  return (
    <section className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded-md" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded-md" required />
        <button type="submit" disabled={loading} className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
        Don’t have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Register
        </a>
      </p>
    </section>
  );
}
