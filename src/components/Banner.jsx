"use client";

const Banner = () => {
  return (
    <div className="hero min-h-[60vh]  relative overflow-hidden">
      <div
        className="hero-content max-w-full flex-col lg:flex-row-reverse absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
       radial-gradient(circle at center, #c4b5fd, transparent)
     `,
        }}
      >
        {/* Right side image */}
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" className="max-w-sm rounded-lg shadow-2xl" alt="BanglaBuzz" />

        {/* Left side text */}
        <div>
          <h1 className="text-5xl font-bold">Welcome to BanglaBuzz</h1>
          <p className="py-6 text-lg text-gray-600">Discover blogs about food, travel, culture, and lifestyle — all in one place. Stay updated with the latest stories from Bangladesh and beyond.</p>
          <button className="btn btn-primary">Explore Blogs</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// <div className="min-h-screen w-full bg-white relative overflow-hidden">
//   {/* Soft Lavender Center Glow */}
//   {/* <div
//     className="absolute inset-0 z-0 pointer-events-none"
//     style={{
//       backgroundImage: `
//        radial-gradient(circle at center, #c4b5fd, transparent)
//      `,
//     }} */}
//   />
//   {/* Your Content Here */}
// </div>;
