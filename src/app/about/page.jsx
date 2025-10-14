// ========================================
// ABOUT PAGE
// File: app/about/page.jsx
// ========================================

import Link from "next/link";
import { ArrowLeft, Target, Eye, Heart, Users, BookOpen, TrendingUp, Globe, Sparkles, Mail, MapPin } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: BookOpen, label: "Articles Published", value: "500+" },
    { icon: Users, label: "Active Writers", value: "50+" },
    { icon: Globe, label: "Monthly Readers", value: "10K+" },
    { icon: TrendingUp, label: "Categories", value: "12" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Stories",
      description: "We believe in genuine, heartfelt storytelling that connects people and cultures.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community where writers and readers inspire each other.",
    },
    {
      icon: Sparkles,
      title: "Quality Content",
      description: "Curating high-quality articles that inform, entertain, and inspire our audience.",
    },
    {
      icon: Globe,
      title: "Cultural Bridge",
      description: "Connecting Bangladesh with the world through diverse perspectives and stories.",
    },
  ];

  const team = [
    {
      name: "Sarah Wilson",
      role: "Founder & Editor-in-Chief",
      description: "Passionate about storytelling and building communities.",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      name: "Ahmed Rahman",
      role: "Content Director",
      description: "Curating the best stories from Bangladesh and beyond.",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      name: "Nadia Khan",
      role: "Community Manager",
      description: "Fostering connections and supporting our writers.",
      gradient: "from-green-400 to-emerald-400",
    },
    {
      name: "Rafi Islam",
      role: "Tech Lead",
      description: "Building the platform that powers our stories.",
      gradient: "from-orange-400 to-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors duration-200 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <Sparkles className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BanglaBuzz</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Your gateway to discovering authentic stories, vibrant culture, and diverse perspectives from Bangladesh and beyond.</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-purple-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-purple-100 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              BanglaBuzz was born from a simple idea: to create a platform where authentic voices from Bangladesh could be heard and celebrated. Founded in 2024, we started as a small community of passionate writers and storytellers who believed in the power of words to connect, inspire, and
              transform.
            </p>
            <p>
              What began as a modest blog has grown into a thriving community of over 50 writers and 10,000 monthly readers. We've published hundreds of articles covering everything from food and travel to culture, technology, and lifestyle. Each story shared on BanglaBuzz represents a unique
              perspective, a personal journey, or a glimpse into the rich tapestry of Bangladeshi life.
            </p>
            <p>Today, BanglaBuzz stands as a testament to the power of community-driven content. We're more than just a blog—we're a movement to showcase the best of Bangladesh to the world, one story at a time.</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To empower voices from Bangladesh by providing a platform where authentic stories can be shared, celebrated, and discovered by readers around the world. We strive to bridge cultures, inspire creativity, and build a community united by the love of storytelling.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become the leading platform for Bangladeshi storytelling, recognized globally for quality content, diverse perspectives, and a vibrant community. We envision a future where every voice can find its audience and every story can make an impact.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">The passionate people behind BanglaBuzz</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">Whether you're a writer looking to share your story or a reader seeking inspiration, there's a place for you at BanglaBuzz.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Writing
            </Link>
            <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border-2 border-white border-opacity-50">
              Explore Stories
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-purple-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">Have questions or want to collaborate? We'd love to hear from you!</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <a href="mailto:hello@banglabuzz.com" className="text-purple-600 hover:text-purple-700 hover:underline">
                  hello@banglabuzz.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
