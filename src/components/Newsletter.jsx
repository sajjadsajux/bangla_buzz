"use client";

const Newsletter = () => {
  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Get the latest blogs, trending topics, and exclusive updates straight to your inbox.</p>

        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" placeholder="Enter your email" className="input input-bordered w-full sm:w-2/3" required />
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
