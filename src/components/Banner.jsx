import React from "react";

export default function BanglaBuzzHero() {
  return (
    <div className="hero min-h-[70vh] relative overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #c4b5fd, transparent)
          `,
        }}
      />

      {/* Floating decoration elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-purple-400 rounded-full opacity-25"></div>
      </div>

      <div className="hero-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        {/* Main content - centered */}
        <div className="w-full">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">🌟 Trending Stories from Bangladesh</div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Welcome to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BanglaBuzz</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dive into captivating stories about <span className="font-semibold text-purple-700">delicious cuisine</span>,<span className="font-semibold text-purple-700"> breathtaking destinations</span>, rich <span className="font-semibold text-purple-700">cultural heritage</span>, and modern{" "}
            <span className="font-semibold text-purple-700">lifestyle trends</span>. Your gateway to Bangladesh and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 border-none">✨ Start Your Journey</button>
            <button className="btn btn-outline btn-lg px-8 py-3 text-lg font-semibold rounded-full border-2 border-purple-300 text-purple-700 hover:bg-purple-50 transition duration-300">🎯 Join Community</button>
          </div>

          {/* Stats section */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-700">500+</div>
              <div className="text-sm text-gray-600">Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-700">10K+</div>
              <div className="text-sm text-gray-600">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-700">50+</div>
              <div className="text-sm text-gray-600">Writers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
