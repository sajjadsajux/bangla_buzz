import Link from "next/link";
import { Calendar, User, Edit, ArrowRight, Clock } from "lucide-react";

const BlogCard = ({ id, title, category, excerpt, image, authorName, postedDate, lastEditedDate }) => {
  // Category color mapping
  const getCategoryColor = (category) => {
    const colors = {
      Food: "bg-orange-100 text-orange-700 border-orange-200",
      Travel: "bg-blue-100 text-blue-700 border-blue-200",
      Culture: "bg-purple-100 text-purple-700 border-purple-200",
      Lifestyle: "bg-green-100 text-green-700 border-green-200",
      Technology: "bg-gray-100 text-gray-700 border-gray-200",
      Education: "bg-indigo-100 text-indigo-700 border-indigo-200",
      Sports: "bg-red-100 text-red-700 border-red-200",
      Entertainment: "bg-pink-100 text-pink-700 border-pink-200",
      "Health & Fitness": "bg-lime-100 text-lime-700 border-lime-200",
      Business: "bg-amber-100 text-amber-700 border-amber-200",
      Fashion: "bg-rose-100 text-rose-700 border-rose-200",
      News: "bg-slate-100 text-slate-700 border-slate-200",
    };
    return colors[category] || "bg-blue-100 text-blue-700 border-blue-200";
  };

  return (
    <article className="group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
            <div className="text-white text-center p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <p className="font-medium opacity-90">No Image</p>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border backdrop-blur-sm ${getCategoryColor(category)}`}>{category}</span>
        </div>

        {/* Reading time estimate */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Clock className="w-3 h-3 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">3 min read</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors duration-300">{title}</h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>

        {/* Author and Date Info */}
        <div className="flex flex-col gap-2 mb-6 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <User className="w-3 h-3 text-purple-500" />
            <span className="font-medium text-gray-700">By: {authorName}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-green-500" />
            <span>
              Posted:{" "}
              {new Date(postedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          {lastEditedDate && (
            <div className="flex items-center gap-2">
              <Edit className="w-3 h-3 text-blue-500" />
              <span>
                Updated:{" "}
                {new Date(lastEditedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          )}
        </div>

        {/* Read More Link */}
        <Link href={`/blog/${id}`} className="group/link">
          <div className="flex items-center justify-between p-3 -m-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
            <span className="font-semibold text-purple-600 group-hover/link:text-purple-700 flex items-center gap-2 transition-colors duration-300">
              Read Full Article
              <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
            </span>

            {/* Animated background indicator */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center opacity-0 group-hover/link:opacity-100 transform scale-75 group-hover/link:scale-100 transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  );
};

export default BlogCard;
