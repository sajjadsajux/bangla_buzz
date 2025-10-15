"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BookOpen, PlusCircle, Globe, TrendingUp, Users, Eye, Heart, MessageSquare, Calendar, Sparkles } from "lucide-react";

export default function Dashboard() {
  // State for your real data
  const [stats, setStats] = useState({
    myArticles: 0,
    totalViews: 0,
    totalLikes: 0,
    comments: 0,
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dashboard data
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setLoading(true);

        // TODO: Replace with your actual API endpoint
        // const response = await fetch('/api/dashboard');
        // const data = await response.json();

        // For now, using mock data - replace this with your API response
        const mockData = {
          stats: {
            myArticles: 12,
            totalViews: 2400,
            totalLikes: 342,
            comments: 89,
          },
          recentActivity: [
            { action: "Published", title: "The Ultimate Travel Guide", time: "2 hours ago" },
            { action: "Updated", title: "Food Trends in Bangladesh", time: "1 day ago" },
            { action: "Commented on", title: "Tech Innovation 2025", time: "3 days ago" },
          ],
        };

        // Set the data
        setStats(mockData.stats);
        setRecentActivity(mockData.recentActivity);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  // Helper function to format numbers
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  // Stats configuration
  const statsConfig = [
    {
      key: "myArticles",
      icon: BookOpen,
      label: "My Articles",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      key: "totalViews",
      icon: Eye,
      label: "Total Views",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      key: "totalLikes",
      icon: Heart,
      label: "Total Likes",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      key: "comments",
      icon: MessageSquare,
      label: "Comments",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const quickActions = [
    {
      href: "/dashboard/my-blogs",
      icon: BookOpen,
      title: "My Blogs",
      description: "View and manage your published articles",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      href: "/create-blog",
      icon: PlusCircle,
      title: "Create Blog",
      description: "Write and publish a new article",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      featured: true,
    },
    {
      href: "/dashboard/all-blogs",
      icon: Globe,
      title: "All Blogs",
      description: "Discover articles from the community",
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Welcome Back!</h1>
              <p className="text-gray-600 text-sm sm:text-base">{`Here's what's happening with your content`}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {statsConfig.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{formatNumber(stats[stat.key])}</h3>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href} className={`group relative overflow-hidden bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${action.featured ? "md:scale-105" : ""}`}>
                {/* Featured Badge */}
                {action.featured && <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Featured</div>}

                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${action.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <action.icon className={`w-8 h-8 ${action.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{action.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{action.description}</p>

                  {/* Arrow Icon */}
                  <div className="mt-6 flex items-center gap-2 text-purple-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span>Get Started</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
                <Link href="/dashboard/activity" className="text-purple-600 hover:text-purple-700 font-semibold text-sm hover:underline">
                  View All
                </Link>
              </div>

              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl animate-pulse">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : recentActivity.length > 0 ? (
                <div className="space-y-4">
                  {recentActivity.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 font-semibold mb-1">
                          {item.action} <span className="text-purple-600">{item.title}</span>
                        </p>
                        <p className="text-gray-500 text-sm">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No recent activity yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Tips & Resources */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl shadow-lg p-8 text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Tips for Success</h3>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm leading-relaxed">Write consistently to build your audience</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm leading-relaxed">Use engaging headlines and images</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm leading-relaxed">Engage with your readers in comments</p>
                </li>
              </ul>

              <Link href="/resources" className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
