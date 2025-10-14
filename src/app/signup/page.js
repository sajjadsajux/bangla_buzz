"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Registration successful! Redirecting to login...", {
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
        setForm({ name: "", email: "", password: "" });
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        let errorMessage = "Registration failed";
        try {
          const data = await res.json();
          errorMessage = data.error || errorMessage;
        } catch (jsonError) {
          if (res.status === 404) {
            errorMessage = "Registration endpoint not found. Check /api/auth/signup";
          }
        }
        toast.error(errorMessage, {
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
        <div className="w-full max-w-md">
          {/* Register Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-purple-100">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-600 text-sm sm:text-base">Join BanglaBuzz today</p>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
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
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <User className="w-5 h-5" />
                    <span>Register</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">Already have an account?</span>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <Link href="/login" className="inline-flex items-center justify-center w-full py-3 px-4 border-2 border-purple-200 rounded-xl text-purple-700 font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                Sign In
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-purple-600 hover:text-purple-700 font-semibold hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-semibold hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
