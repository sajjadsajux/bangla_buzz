"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UtensilsCrossed, Plane, Theater, Sparkles, Laptop, BookOpen, Trophy, Film, Dumbbell, Briefcase, Shirt, Newspaper, TrendingUp, ArrowRight, ChevronRight } from "lucide-react";

const categories = [
  { name: "Food", icon: UtensilsCrossed, color: "from-orange-400 to-red-400", bgColor: "bg-orange-50", textColor: "text-orange-700", hoverColor: "hover:bg-orange-100" },
  { name: "Travel", icon: Plane, color: "from-blue-400 to-cyan-400", bgColor: "bg-blue-50", textColor: "text-blue-700", hoverColor: "hover:bg-blue-100" },
  { name: "Culture", icon: Theater, color: "from-purple-400 to-pink-400", bgColor: "bg-purple-50", textColor: "text-purple-700", hoverColor: "hover:bg-purple-100" },
  { name: "Lifestyle", icon: Sparkles, color: "from-green-400 to-emerald-400", bgColor: "bg-green-50", textColor: "text-green-700", hoverColor: "hover:bg-green-100" },
  { name: "Technology", icon: Laptop, color: "from-gray-400 to-slate-400", bgColor: "bg-gray-50", textColor: "text-gray-700", hoverColor: "hover:bg-gray-100" },
  { name: "Education", icon: BookOpen, color: "from-indigo-400 to-blue-400", bgColor: "bg-indigo-50", textColor: "text-indigo-700", hoverColor: "hover:bg-indigo-100" },
  { name: "Sports", icon: Trophy, color: "from-red-400 to-orange-400", bgColor: "bg-red-50", textColor: "text-red-700", hoverColor: "hover:bg-red-100" },
  { name: "Entertainment", icon: Film, color: "from-pink-400 to-rose-400", bgColor: "bg-pink-50", textColor: "text-pink-700", hoverColor: "hover:bg-pink-100" },
  { name: "Health & Fitness", icon: Dumbbell, color: "from-lime-400 to-green-400", bgColor: "bg-lime-50", textColor: "text-lime-700", hoverColor: "hover:bg-lime-100" },
  { name: "Business", icon: Briefcase, color: "from-amber-400 to-yellow-400", bgColor: "bg-amber-50", textColor: "text-amber-700", hoverColor: "hover:bg-amber-100" },
  { name: "Fashion", icon: Shirt, color: "from-rose-400 to-pink-400", bgColor: "bg-rose-50", textColor: "text-rose-700", hoverColor: "hover:bg-rose-100" },
  { name: "News", icon: Newspaper, color: "from-slate-400 to-gray-400", bgColor: "bg-slate-50", textColor: "text-slate-700", hoverColor: "hover:bg-slate-100" },
];

export default function TrendingTopics() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
          <TrendingUp className="w-6 h-6 text-purple-600" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Trending
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Topics</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the most popular categories and dive into stories that matter to you</p>
      </div>

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map((category, index) => (
          <Link
            key={category.name}
            href={`/category/${encodeURIComponent(category.name)}`}
            className={`
              group relative overflow-hidden
              ${category.bgColor} ${category.textColor} ${category.hoverColor}
              px-4 sm:px-6 py-3 sm:py-3.5 
              rounded-full text-sm sm:text-base font-semibold
              transform transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-lg hover:-translate-y-1
              border border-transparent hover:border-white/20
              min-w-fit whitespace-nowrap block
            `}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Gradient overlay on hover */}
            <div
              className={`
                absolute inset-0 opacity-0 group-hover:opacity-10 
                bg-gradient-to-r ${category.color}
                transition-opacity duration-300 rounded-full
              `}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
              <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">{category.name}</span>

              {/* Arrow icon */}
              <ChevronRight
                className={`
                  w-4 h-4 ml-1 transform transition-transform duration-300
                  ${hoveredCategory === category.name ? "translate-x-1" : ""}
                `}
              />
            </div>

            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150" />
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
        <Link href="/categories" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          <span>View All Categories</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
