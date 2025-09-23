"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, []);

  // Update theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />

      {/* ☀️ Sun icon (for light mode) */}
      <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.64 17.64L4.22 19.06 5.64 20.48 7.06 19.06zM12 4a8 8 0 100 16 8 8 0 000-16zm0-2a10 10 0 100 20 10 10 0 000-20zm9 10h-2v2h2zM4 12H2v2h2zM12 20v2h2v-2zm0-18v2h2V2zM17.64 6.36l1.42-1.42L17.64 3.52 16.22 4.94z" />
      </svg>

      {/* 🌙 Moon icon (for dark mode) */}
      <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21.64 13.64a9 9 0 11-9-9 7 7 0 009 9z" />
      </svg>
    </label>
  );
};

export default ThemeToggle;
